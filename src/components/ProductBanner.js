import React from "react";
import logo from '../assets/images/banner-image.jpg';
import Styles from '../Module/ProductBanner.module.css';
import Button from './Button';


const ProductBanner = () => {
  return (
    <div className={Styles.product_container}>
      <div className={Styles.product_description}>
        <h3 className={Styles.product_name}>lenovo laptop</h3>
        <p className={Styles.product_detail}>
          this is best laptop for programmer.you can do pretty everything.I hope
          this product effective for you
        </p>
        <Button>show demo</Button>
      </div>
      <div className={Styles.product_image}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default ProductBanner;
