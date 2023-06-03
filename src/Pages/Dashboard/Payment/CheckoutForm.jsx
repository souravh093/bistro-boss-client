import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ price, cart }) => {
  console.log(cart);
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();
  const [clientSecret, setclientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const element = useElements();

  useEffect(() => {
    if (price === 0) {
      return;
    }
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setclientSecret(res.data.clientSecret);
    });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
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
      //       status
      // :
      // "succeeded"
      setTransactionId(paymentIntent.id);

      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        data: new Date(),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.itemId),
        status: "service pending",
        itemName: cart.map((item) => item.name),
      };
      console.log(payment);
      axiosSecure.post("/payment", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // display confirm
        }
      });
    }
  };

  console.log(cart);
  return (
    <>
      <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          className="border py-2 px-2 shadow-md border-orange-400 mb-3 max-w-lg rounded-md"
          options={{
            style: {
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
          className="bg-orange-500 px-10 rounded-sm text-white py-1 shadow-lg hover:bg-orange-400 transition hover:text-gray-100"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-500 my-3 text-lg mx-auto w-2/3">{cardError}</p>
      )}
      {transactionId && (
        <p className="text-green-500 text-lg mx-auto w-2/3">
          Transaction complete with Transaction Id: {transactionId}{" "}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
