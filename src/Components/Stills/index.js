import React from 'react'
import styled from '@emotion/styled/macro'
import Media from 'react-media'
import Content from './Content'
const Wrapper = styled('div')`
  display: flex;

  width: 100%;
  flex-wrap: wrap;
  margin: auto;

  @media screen and (min-width: 700px) {
    width: 60%;
  }
`

const HeaderImage = styled('div')`
  width: 90%;
  margin: auto;

  @media screen and (min-width: 700px) {
    width: 60%;
  }
`


const Image = styled('img')`
  align-self: flex-start;
  margin-bottom: 4%;
`

const Stills = ({ images }) => {
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
    <div style={{ marginTop: '50px' }}>
      <HeaderImage>
        <Image
          style={{ marginBottom: '2%' }}
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
                <Content images={elementsExceptLast} />
              </Wrapper>
            )
          }

          return (
            <Wrapper>
              <Content style={{ marginRight: '2%' }} images={firstColumn} />
              <Content images={secondColumn} />
            </Wrapper>
          )
        }}
      </Media>
    </div>
  )
}

export default Stills
