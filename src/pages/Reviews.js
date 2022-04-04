import React from 'react';
import Review from '../components/Review';
import useFatchReview from '../hooks/useFatchReview';
import Styles from '../Module/Reviews.module.css';


const Reviews = () => {
    const [reviews] =  useFatchReview()
    return (
        <div className={Styles.review_container}>
            <h1 className={Styles.review_title}>Every review here...</h1>
            <div className={Styles.user_reviews}>
                {
                    reviews ? reviews.map((review) => <Review key={review.id} review={review}/>) : null
                }
            </div>
        </div>
    );
};

export default Reviews;