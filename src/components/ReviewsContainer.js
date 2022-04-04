import React from "react";
import { useNavigate } from "react-router-dom";
import useFatchReview from "../hooks/useFatchReview";
import Styles from "../Module/ReviewsContainer.module.css";
import Button from "./Button";
import Review from "./Review";

const ReviewsContainer = () => {
  const [reviews] = useFatchReview();
    const navigate =  useNavigate()

  const gotoReviewPage = () => {
      navigate('/review')
  }
  return (
    <div className={Styles.container}>
      <h1 className={Styles.review_title}>customer reviews</h1>
      <div className={Styles.card_container}>
        {reviews
          ? reviews.slice(0,3).map((review) => <Review key={review.id} review={review} />)
          : null}
      </div>
      <div className={Styles.review_button}>
        <Button handleEvent={gotoReviewPage}>see all review</Button>
      </div>
    </div>
  );
};

export default ReviewsContainer;
