import StripeCheckout from "react-stripe-checkout";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { SecTitle } from "../../components";
import LogoutHook from "../../redux/Hooks/Auth/LogoutHook";
import { useNavigate } from "react-router-dom";
import PremiumHook from "../../redux/Hooks/Premium/PremiumHook";

const PaymentPage = () => {
  const [handleLogout] = LogoutHook();
  const [handleUpgrade, loading] = PremiumHook();

  const navigate = useNavigate();

  const [price, setprice] = useState("");

  if (price < 0) setprice("");

  const onchangeprice = (e) => setprice(e.target.value);

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
        data: { amount: price * 100, token },
      });
      if (response.status === 200) {
        notify("Payment transaction done successfully", "success");
        setprice("");

        handleUpgrade();
        handleLogout();
        navigate("/login");
        return;
      }
    } catch (error) {
      // handleFailure();
      // console.log(error);

      handleUpgrade();
      handleLogout();
      navigate("/login");
      return;
    }
  };

  return (
    <Container className="text-center">
      <SecTitle title="Upgrade Plan" desc="Upgrade your plan to premium" />
      <Row className="align-items-center">
        <Col
          xs={12}
          md={5}
          className="bg-primary text-white text-black d-flex flex-column align-items-center py-5"
        >
          <h6 className="text-center mb-0">PREMIUM</h6>
          <h1 className="fw-bold mt-0" style={{ fontSize: "60px" }}>
            50 EGP
          </h1>
          <div className="d-flex w-75 ">
            <ul className="list-unstyled d-flex flex-column align-items-start gap-2 mt-2 mb-4">
              <li>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  fixedWidth
                  className="ms-0 me-1"
                />
                Doctors Booking Appointments
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  fixedWidth
                  className="ms-0 me-1"
                />
                Symptoms Checker
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  fixedWidth
                  className="ms-0 me-1"
                />
                MRI Scan Checking
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  fixedWidth
                  className="ms-0 me-1"
                />
                Diabetes Analysis Algorithm
              </li>
            </ul>
          </div>
        </Col>

        <Col>
          <div>
            <h1>Pay 50.00 EGP</h1>
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
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
