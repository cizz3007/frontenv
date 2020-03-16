import React from 'react';
import {StyledHashTagContainer} from '@molecules/container/hashtag/styled'
import HashTag from '@atoms/tag'

const HashTagContainer = (props)=>{

  return (
    <StyledHashTagContainer>
      <HashTag text={'dfdsfsf'}/>
      <HashTag text={'dfdsfsf'}/>
      <HashTag text={'dfdsfsf'}/>
      <HashTag text={'dfdsfsf'}/>
    </StyledHashTagContainer>
  )
}

export default HashTagContainer;
