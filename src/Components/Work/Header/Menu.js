import React, { Fragment } from 'react'
import styled from '@emotion/styled/macro'
import { withRouter } from 'react-router-dom'

const Link = styled('h5')`
  font-weight: 100;
  letter-spacing: 1.4px;
  cursor: pointer;
  transition: opacity 0.1s ease-in;
  color: white;
  position: relative;
  opacity: ${props => (props.path ? 1 : 0.6)};
  padding: 10px 0;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 679px) {
    padding: 0px;
    margin-right: 10px;
    width: auto;
    &:hover {
      opacity: ${props => (props.path ? 1 : 0.6)};

      ::after {
        position: absolute;
        bottom: -5px;

        left: 0;
        width: 100%;
        height: 1px;
        background-color: white;
        content: '';
      }
    }
  }
`

const Menu = ({ path, history }) => (
  <Fragment>
    <Link path={path === '/work' ? 1 : 0} onClick={() => history.push('/work')}>
      work
    </Link>
    <Link
      path={path === '/stills' ? 1 : 0}
      onClick={() => history.push('/stills')}
    >
      stills
    </Link>
    <Link
      path={path === '/contact' ? 1 : 0}
      onClick={() => history.push('/contact')}
    >
      contact
    </Link>
  </Fragment>
)

export default withRouter(Menu)
