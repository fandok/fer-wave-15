import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./App.module.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      // infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      arrows: true,
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div className={styles.slideItem}>
            <h3>1</h3>
          </div>
          <div className={styles.slideItem}>
            <h3>2</h3>
          </div>
          <div className={styles.slideItem}>
            <h3>3</h3>
          </div>
          <div className={styles.slideItem}>
            <h3>4</h3>
          </div>
          <div className={styles.slideItem}>
            <h3>5</h3>
          </div>
          <div className={styles.slideItem}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
