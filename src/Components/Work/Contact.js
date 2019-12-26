import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled/macro'

const Wrapper = styled('div')`
  width: 90%;
  margin: 100px auto 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Heading = styled('h4')`
  font-weight: normal;
  font-size:32px;
  margin-bottom:20px;
  /* font-size:14px; */
`

const SubHeading = styled("h5")` 

  font-weight:normal;

`

const Information = styled("div")` 
    margin-bottom:10px;
    line-height:20px;
`

const Contact = () => {
  const [videos, setVideos] = useState(null)

  useEffect(() => {}, [])

  return (
    <Wrapper>
      <Heading>Represented by The Talent Group</Heading>
      <SubHeading>Contact</SubHeading>
      <Information>
        <h5>KLAARA@TTG.SE</h5>
        <h5>+46 70 925 15 44</h5>
      </Information>

      <Information>
        <h5>FELICIA@TTG.SE</h5>
        <h5>+46 709 115 720</h5>
      </Information>
    </Wrapper>
  )
}

export default Contact
