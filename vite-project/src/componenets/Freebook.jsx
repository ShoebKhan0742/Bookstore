import React from 'react';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
  const filterData = list.filter((data) => data.categary == "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-bold text-xl pb-5'>Free offered book</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti totam perspiciatis eos vero aperiam! Ipsum quam reprehenderit ex obcaecati quia? Minus eum dolore asperiores id nam facilis dolorum est dolor.
        </p>
        </div>
      
      <div>
        <div className="slider-container">
          <Slider {...settings}>
          {filterData.map((item) =>(
            <Cards item={item} key={item.id}/>
          ))}
          </Slider>
        </div>
      </div>
      </div>
    </>
  );
}

export default Freebook;



