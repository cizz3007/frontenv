import React from 'react';
import {StyledBookingDescription} from '@components/templates/booking/styled'
import HashTag from '@atoms/tag'
import HashTagContainer from '@molecules/container/hashtag/index'
import Button from '@atoms/button/defaultButton'
import StarGrade from '@atoms/typography/star'
import Heading from '@atoms/typography/title'
import HotelAddress from '@atoms/typography/address'
import Icon, {IconSize, IconType} from '@atoms/icon'

const DetailDescription = (props) => {
  return (
      <StyledBookingDescription>
        <StarGrade>5성급</StarGrade>
        <Heading type={'detailHotelTitle'}>경복궁</Heading>
        <HotelAddress>서울시 강남구 논현동 248-7</HotelAddress><Icon type={IconType.MAP} size={IconSize.MIDDLE}/>
        <HashTagContainer/>
      </StyledBookingDescription>
  )
}

export default DetailDescription;
