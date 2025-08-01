// import React from "react";
import { useSearchParams } from "react-router-dom";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const tranId = searchParams.get("tran_id");

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2>Payment Successful 🎉</h2>
      {tranId && <p>Your order ID: <b>{tranId}</b></p>}
      <p>Thank you for your purchase!</p>
    </div>
  );
}
