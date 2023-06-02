import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ price }) => {
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();
  const [clientSecret, setclientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const element = useElements();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setclientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id)
      const transactionId = paymentIntent.id;

      // TODO next step
    }
  };
  return (
    <>
      <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              border: "1px solid",
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn-block btn-primary btn mt-10"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-500 my-3 text-lg mx-auto w-2/3">{cardError}</p>
      )}
      {transactionId && <p className="text-green-500 text-lg mx-auto w-2/3">Transaction complete with Transaction Id: {transactionId} </p>}
    </>
  );
};

export default CheckoutForm;
