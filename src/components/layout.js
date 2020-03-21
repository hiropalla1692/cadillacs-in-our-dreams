import React from "react"
import { Link } from "gatsby"
import styled, {css} from 'styled-components';
import { rhythm, scale } from "../utils/typography"

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  max-Width: ${rhythm(36)};
  padding: ${rhythm(3)} ${rhythm(4)};
  background-color: white;

  @media screen and (max-width:768px) {
    padding: ${rhythm(1.5)} ${rhythm(2)};
  }
  @media screen and (max-width:432px) {
    padding: ${rhythm(1.5)} ${rhythm(1)};
    font-size: 15px;
    h1, h2, h3, h4{
      font-size: 20px;
    }
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(3 / 2),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
    )
  }
}

export default Layout
