import React from "react";
import { Container, Row, Spinner, Button } from "react-bootstrap";
import SecTitle from "../utilities/SecTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DoctorCard from "./../utilities/DoctorCard";
import DoctorsHook from "../../redux/Hooks/DoctorsHook";
import { Link } from "react-router-dom";

const FeaturedDoctors = () => {
  const [doctors, loading] = DoctorsHook();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Row>
      <SecTitle
        title={"Doctors"}
        desc="Find and meet our professional doctors"
      />

      {!loading ? (
        doctors?.length >= 1 ? (
          <Carousel
            responsive={responsive}
            swipeable={true}
            itemClass="mx-2"
            transitionDuration={800}
          >
            {doctors?.map((doctor, index) => {
              return <DoctorCard doctor={doctor} key={index} />;
            })}
          </Carousel>
        ) : (
          <h4>No Doctors Right Now</h4>
        )
      ) : (
        <Container className="text-center py-4">
          <Spinner animation="border" variant="primary" />
        </Container>
      )}

      <div className="text-center show-all-doctors-div mt-3">
        <Button as={Link} to={`/doctors`}>
          More Doctors
        </Button>
      </div>
    </Row>
  );
};

export default FeaturedDoctors;
