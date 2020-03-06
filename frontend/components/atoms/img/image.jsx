import React from 'react';
import testImg from '../../../images/logo/logo-pink@2x.png';
console.log(testImg)
const Image = (props) => {


  const {
    alt,
    children
  } = props;

  return (
      <img src={testImg} alt={alt}>
        {children}
      </img>
  )

}

export default Image
