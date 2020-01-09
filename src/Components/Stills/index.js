import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled/macro'
import Media from 'react-media'
import Content from './Content'
import { withRouter } from 'react-router-dom'
import { Transition } from 'react-transition-group'

const Wrapper = styled('div')`
  display: flex;
  width: 100%;
  margin: auto;

  @media screen and (min-width: 700px) {
    width: 60%;
  }
`

const Container = styled('div')`
  margintop: 50px;
  transition: margin-top 0.2s ease-in;


  &.entering {
    margin-top: 50px;
  }
  &.entered {
    margin-top: 30px;
  }

`

const HeaderImage = styled('div')`
  width: 91.19%;
  /* width: 88.34%; */
  margin: auto;

  @media screen and (min-width: 700px) {
    width: 60%;
  }
`

const Image = styled('img')`
  align-self: flex-start;
  margin-bottom: 4%;
  transition: opacity 0.2s ease;

  &.entering {
    opacity: 0;
  }
  &.entered {
    opacity: 1;
  } 

  
  &.exited {
    opacity: 0;
  } 
 
`

const Stills = ({
  images,
  history: {
    location: { pathname },
  },
}) => {
  if (!images) return null

  const regexp = /src="(.+?)"/gm

  const lastElement = images[images.length - 1]

  const elementsExceptLast = images.filter((item, index) => {
    if (index !== images.length - 1) {
      return item
    }
  })

  const match = lastElement.content.match(regexp)[0]
  const lastElementUrl = match.substring(5, match.length - 1)

  const amountOfImagesInFirstColumn = Math.ceil(elementsExceptLast.length / 2)

  const firstColumn = elementsExceptLast.filter(
    (item, index) => index < amountOfImagesInFirstColumn,
  )
  const secondColumn = elementsExceptLast.filter(
    (item, index) => index > amountOfImagesInFirstColumn - 1,
  )
  return (
    <Images
      lastElementUrl={lastElementUrl}
      elementsExceptLast={elementsExceptLast}
      firstColumn={firstColumn}
      secondColumn={secondColumn}
      pathname={pathname}
    />
  )
}

const Images = ({
  lastElementUrl,
  elementsExceptLast,
  firstColumn,
  secondColumn,
  pathname,
}) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(pathname === '/stills' ? true : false)
  }, [])

  return (
    <Transition in={animate} timeout={200}>
      {state => {
        
        return (
        <Container className={state}>
          <HeaderImage>
            <Image
              className={state}
              style={{ marginBottom: '24px' }}
              width="100%"
              src={lastElementUrl}
              alt=""
            />
          </HeaderImage>

          <Media
            queries={{
              small: '(max-width:699px)',
              medium: '(min-width:700px)',
            }}
          >
            {matches => {
              if (matches.small) {
                return (
                  <Wrapper>
                    <Content className={state} images={elementsExceptLast} />
                  </Wrapper>
                )
              }

              return (
                <Wrapper>
                  <Content
                  className={state}
                    images={firstColumn}
                    style={{ marginRight: '24px' }}
                  />
                  <Content className={state} images={secondColumn} />
                </Wrapper>
              )
            }}
          </Media>
        </Container>
      )}}
    </Transition>
  )
}


export default withRouter(Stills)
