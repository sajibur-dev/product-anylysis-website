import React from 'react';
import Styles from '../Module/Review.module.css';


const Review = ({review}) => {
    console.log(review);
    const {name,img,body,rating} = review;
    return (
        <div className={Styles.review}>
            <div className={Styles.review_img}>
                <img src={img} alt="use-img" width='200' />
            </div>
            <div className={Styles.review_body}>
                <h2 className={Styles.reviewer_name}>{name}</h2>
                <p className={Styles.review_rating}>{rating}*</p>
                <p className={Styles.review_description}>{body}</p>
            </div>
        </div>
    );
};

export default Review;