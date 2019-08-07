/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core';
import { Fragment } from 'react';
import Slider from 'react-slick';

const SETTINGS = {
  arrows: false,
  dots: true,
  infinite: true,
  // autoplay: true,
  // autoplaySpeed: 3000,
  speed: 500
};

const Carousel = ({ items, renderItem, ...props }) => {
  return (
    <Fragment>
      <Global
        styles={css`
          .slick-list,
          .slick-slider,
          .slick-track {
            position: relative;
            display: block;
          }
          .slick-loading .slick-slide,
          .slick-loading .slick-track {
            visibility: hidden;
          }
          .slick-slider {
            box-sizing: border-box;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
          }
          .slick-list {
            overflow: hidden;
            margin: 0;
            padding: 0;
          }
          .slick-list:focus {
            outline: 0;
          }
          .slick-list.dragging {
            cursor: pointer;
            cursor: hand;
          }
          .slick-slider .slick-list,
          .slick-slider .slick-track {
            transform: translate3d(0, 0, 0);
          }
          .slick-track {
            top: 0;
            left: 0;
          }
          .slick-track:after,
          .slick-track:before {
            display: table;
            content: '';
          }
          .slick-track:after {
            clear: both;
          }
          .slick-slide {
            display: none;
            float: left;
            height: 100%;
            min-height: 1px;
          }
          [dir='rtl'] .slick-slide {
            float: right;
          }
          .slick-slide img {
            display: block;
          }
          .slick-slide.slick-loading img {
            display: none;
          }
          .slick-slide.dragging img {
            pointer-events: none;
          }
          .slick-initialized .slick-slide {
            display: block;
          }
          .slick-vertical .slick-slide {
            display: block;
            height: auto;
            border: 1px solid transparent;
          }
          .slick-arrow.slick-hidden {
            display: none;
          }

          .slick-dots {
            position: absolute;
            display: block;
            padding: 0;
          }
          .slick-dotted.slick-slider {
            margin-bottom: 30px;
          }
          .slick-dots {
            position: absolute;
            bottom: 20px;
            width: 100%;
            margin: 0;
            list-style: none;
            text-align: center;
          }
          .slick-dots li {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 20px;
            margin: 0 5px;
            padding: 0;
            cursor: pointer;
          }
          .slick-dots li button {
            font-size: 0;
            line-height: 0;
            display: block;
            width: 20px;
            height: 20px;
            padding: 5px;
            cursor: pointer;
            color: transparent;
            border: 0;
            outline: 0;
            background: 0 0;
          }
          .slick-dots li button:focus,
          .slick-dots li button:hover {
            outline: 0;
          }
          .slick-dots li button:focus:before,
          .slick-dots li button:hover:before {
            opacity: 1;
          }
          .slick-dots li button:before {
            position: absolute;
            top: 0;
            left: 0;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            content: ' ';
            background-color: #ac884c;
            border: 1px solid #ac884c;
          }
          .slick-dots li.slick-active button:before {
            background-color: #fff;
            border: 1px solid #ac884c;
          }
        `}
      />
      <div style={{ width: '100%', height: '100%' }}>
        <Slider {...SETTINGS}>
          {items.map((item, i) => (
            <div key={i}>{renderItem({ item })}</div>
          ))}
        </Slider>
      </div>
    </Fragment>
  );
};

export default Carousel;
