import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey =
    "pk_test_51Ib7MwHGaenB8b3pdLQTNlOdzJQZgRWGZjaBZ4j4NfFwMugOY0oBe16ydI8qiDVKK0HYvqEXKRAGq3TEDI3QTcEh00ytqEHkmq";

  const onToken = (token) => {
    // this where token is passed to backend for processing
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
