import React from 'react'
import SimpleSlider from '@atoms/carousel/carousel'
import HashTag from '@atoms/tag'
import { StyledDetailLayout } from '@pages/booking/detailStyled'
import DetailDescription from '@components/templates/booking/description'
import Button from '@atoms/button/defaultButton'
import { StyledBookingDescription } from '@components/templates/booking/styled'
import Axios from 'axios'
/*P*/
class DetailPage extends React.PureComponent {

  test () {
      Axios({
        url:'/api/regions/602043/hotels?regionid=602043&location=%EB%B6%80%EC%82%B0&rooms=1&room-0-adults=2&room-0-children=0&check-in=2020.04.13&check-out=2020.04.14&index=0&sort=DEFAULT&tripadvisor=business%2Csolo%2Ccouples%2Cfriends%2Cfamily%2Cnone&theme=',
        method:'get',
        crossDomain: true,
        withCredentials: true,
      }).then((res)=>{
        console.log(res)
      })
  }

  render () {
    return (
      <StyledDetailLayout>
        {/*A*/}
        <SimpleSlider/>
        {/*T*/}
        <DetailDescription/>

        <button type={'button'} onClick={this.test}>api 테스트</button>

      </StyledDetailLayout>
    )
  }
}

export default DetailPage
