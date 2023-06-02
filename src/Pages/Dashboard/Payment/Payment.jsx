import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../../../hooks/useCart";

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const [cart] = useCart();
  const total = parseFloat(
    cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)
  );
  return (
    <div className="w-full min-h-screen">
      <SectionTitle subHeading={"Please process"} heading={"Payment"} />
      <Elements className="" stripe={stripePromise}>
        <CheckoutForm price={total} />
      </Elements>
    </div>
  );
};

export default Payment;
