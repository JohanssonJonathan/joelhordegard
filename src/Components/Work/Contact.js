import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled/macro'

const Wrapper = styled('div')`
  width: 90%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-style: italic;
  z-index:-1;
  margin: 100px auto 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 679px) {
    top:100px;
   
}
`

const Heading = styled('h4')`
  font-weight: normal;
  /* font-size:32px; */
  margin-bottom: 20px;
  /* font-size:14px; */
`

const SubHeading = styled('h5')`
  font-weight: normal;
  margin-bottom:10px;
  font-size:16px;


`

const Adress = styled('h5')`
  font-weight: normal;
  font-size:16px;

`

const Information = styled('div')`
  margin-bottom: 10px;
  line-height: 23px;
  font-weight:normal;
  font-size:16px;

`

const Contact = () => {
  const [videos, setVideos] = useState(null)

  useEffect(() => {}, [])

  return (
    <Wrapper>

      
      <Heading>Represented by The Talent Group</Heading>
      <SubHeading>Contact</SubHeading>
      <Information>
        <a href="mailto:klaara@ttg.se">
         <Adress> klaara@ttg.se</Adress>
        </a>
        <a style={{fontSize:"15"}} href="tel:+46 70 925 15 44">+46 70 925 15 44</a>
      </Information>

      <Information>
        <a href="mailto:klaara@ttg.se">
          <Adress>felicia@ttg.se</Adress>
        </a>
        <a style={{fontSize:"15"}} href="tel:+46709115720">+46 709 115 720</a>
      </Information>
    </Wrapper>
  )
}

export default Contact
