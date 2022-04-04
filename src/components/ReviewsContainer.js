import React from 'react';
import useFatchReview from '../hooks/useFatchReview';
import Styles from '../Module/ReviewsContainer.module.css';
import Review from './Review';

const ReviewsContainer = () => {
    const [ reviews ] =  useFatchReview()
    return (
        <div className={Styles.container}>
            <h1 className={Styles.review_title}>customer reviews</h1>
            <div className={Styles.card_container}>
                {
                    reviews ? reviews.map((review) => <Review key={review.id} review={review}/>) : null
                }
            </div>
        </div>
    );
};

export default ReviewsContainer;