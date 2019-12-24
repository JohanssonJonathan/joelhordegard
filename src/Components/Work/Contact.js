import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled/macro'

const Wrapper = styled('div')`
  width: 90%;
  margin: auto;
  display:flex;
  justify-content:center;

`

const Image = styled('img')`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius:100%;
  transition: transform 0.2s ease;
`

const RatioBox = styled('div')`
  position: relative;
  overflow: hidden;
  cursor: pointer;

    padding-bottom: 100%;
  }
`

const Contact = () => {
  const [videos, setVideos] = useState(null)

  useEffect(() => {}, [])

  return (
    <Wrapper>
        <div style={{position:"relative", width:"40%", top:"50px", right:"0", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h5>
            blablsll 

            </h5>
            <h5>
            blablsll 

            </h5>
            <h5>
            blablsll 

            </h5>
            <h5>
            blablsll 

            </h5>
            <h5>
            blablsll 

            </h5>
               
        </div>
    <div style={{width:"30%", position:"relative", top:"50px"}}>
      <RatioBox>
        <Image src="https://i.vimeocdn.com/portrait/26100040_600x600.webp" />
      </RatioBox>

    </div>

    <div style={{ position:"relative", width:"40%", top:"50px"}}>
            hej
        </div>
    </Wrapper>
  )
}

export default Contact
