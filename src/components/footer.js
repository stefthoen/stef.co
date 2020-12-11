import React from "react"
import styled from "styled-components"

import Container from "../components/container"

const S = {}

S.Footer = styled.footer`
  background: #333
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHklEQVQIW2NkQAX/GZH4/4FsRpgAmAOSBBFwDkgAAIKuBATRTAAZAAAAAElFTkSuQmCC);
  color: white;
  font-size: ${props => props.theme.font.size300};
  padding-top: ${props => props.theme.space400};
  padding-bottom: ${props => props.theme.space400};

  h2 {
    font-size: ${props => props.theme.font.size500};
    text-align: left;

    ${props => props.theme.media.size100`
      text-align: center;
    `}
  }

  h2,
  a {
    color: white;
  }

  ul {
    list-style-type: none;
    margin-left: 0;
    padding: 0;
  }

  .content {
    margin: ${props => props.theme.space.stack300};

    ${props => props.theme.media.size100`
      display: flex;
      justify-content: space-between;
    `}
  }

  .copyright {
    text-align: center;
  }
`

const Footer = () => (
  <S.Footer>
    <Container>
      <div className="content">
        <div className="address">
          <h2>Post adress</h2>
          <ul>
            <li>4 Frétoy</li>
            <li>71550 Cussy-en-Morvan</li>
            <li>France</li>
          </ul>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <a
                href="https://twitter.com/stefthoen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/scnthoen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:hi@stef.co">hi@stef.co</a>
            </li>
          </ul>
        </div>
        <div className="administration">
          <h2>Administration</h2>
          <ul>
            <li>Siret: 81448255000013</li>
            <li>Bank: NL47 ASNB 0708 3314 67</li>
            <li>TVA: FR08814482550</li>
          </ul>
        </div>
      </div>
      <footer className="copyright">
        <a href="http://creativecommons.org/licenses/by-nc-nd/3.0/">
          Everything here &copy; Creative Commons
        </a>{" "}
        | <a href="https://github.com/stefthoen/stef.co">Source is on Github</a>
      </footer>
    </Container>
  </S.Footer>
)

export default Footer
