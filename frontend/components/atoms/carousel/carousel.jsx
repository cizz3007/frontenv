import React from 'react'
import Slider from "react-slick"
import HotelImg from'@images/hotels/hotels.png';
import 'slick-carousel/slick/slick.css?global';
import 'slick-carousel/slick/slick-theme.css?global';

class SimpleSlider extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      settings: {
        dots          : false,
        arrows        : true,
        infinite      : true,
        speed         : 500,
        slidesToShow  : 1,
        slidesToScroll: 1,
        initialSlide:0,
        lazyLoad:true,
      }
    }
  }

  render() {

    const {
      settings
    } = this.state;

    return (
        <Slider {...settings}>
          <div>
            <img src={HotelImg} width={'100%'} height={'auto'}/>
          </div>
          <div>
            <img src={HotelImg} width={'100%'} height={'auto'}/>
          </div>
          <div>
            <img src={HotelImg} width={'100%'} height={'auto'}/>
          </div>
          <div>
            <img src={HotelImg} width={'100%'} height={'auto'}/>
          </div>
        </Slider>
    );
  }
}

export default SimpleSlider
