import StripeCheckout from "react-stripe-checkout";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "react-bootstrap";

const Payment = () => {
  const [price, setprice] = useState("");

  document.title = "الدفع";

  if (price < 0) {
    setprice("");
  }

  const onchangeprice = (e) => {
    setprice(e.target.value);
  };

  const notify = (msg, type) => {
    if (type === "warn") {
      toast.warn(msg);
    } else if (type === "success") {
      toast.success(msg);
    } else if (type === "error") {
      toast.error(msg);
    }
  };

  const publishableKey =
    "pk_test_51MiIVZEk7Y5FJbDvP9YZIO7EHBebGb5WFOWdXwprA4eLm08GyOXex6BvmoezXmKWzdI5J2oVDE3VKtH1I8NOMTiq00t8k0ZsWU";
  const [product, setProduct] = useState({
    name: "Server Dell",
    price: price,
  });
  const priceForStripe = price * 100;

  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "http://localhost:5000/payment",
        method: "post",
        data: {
          amount: price * 100,
          token,
        },
      });
      if (response.status === 200) {
        notify(" تمت عمليه الدفع بنجاح ..جزاك الله خيرا ", "success");
        setprice("");
      }
    } catch (error) {
      //   handleFailure();
      console.log(error);
    }
  };

  return (
    <div className="container text-center" style={{ paddingTop: "10%" }}>
      <Row className="align-items-center">
        <Col>
          <ul className="text-start servess bg-primary">
            <li>Doctors Booking Appointments</li>
            <li>Symptoms Checker</li>
            <li>MRI Scan Checking</li>
            <li>Diabetes Analysis Algorithm</li>
          </ul>
        </Col>

        <Col>
          <div>
            <h1>pay 50 pound</h1>
          </div>
          <div
            style={{
              textAlign: "end",
              fontSize: " 15px",
              marginRight: "5px",
              marginTop: "5px",
            }}
          ></div>

          <StripeCheckout
            stripeKey={publishableKey}
            label=" pay now"
            name="Pay With Credit Card"
            billingAddress
            shippingAddress
            amount={priceForStripe}
            description={`Your total is 50 pound`}
            token={payNow}
            className="mt-2 btn w-100"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
