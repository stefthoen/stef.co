import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: #333
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHklEQVQIW2NkQAX/GZH4/4FsRpgAmAOSBBFwDkgAAIKuBATRTAAZAAAAAElFTkSuQmCC);
`

const Inner = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding-top: 2rem;
  display: grid;
  color: white;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2em;
  grid-template-areas:
    "address contact administration"
    "copyright copyright copyright";

  a {
    color: white;
  }

  ul {
    list-style-type: none;
    margin-left: 0;
  }

    grid-area: address;
  }

  .contact {
    grid-area: contact;
  }

  .administration {
    grid-area: administration;
  }

  .copyright {
    grid-area: copyright;
    text-align: center;
  }
`

const Footer = () => (
  <StyledFooter>
    <Inner>
      <div className="address">
        <h2>Postadres</h2>
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
            E-mail: <a href="mailto:hi@stef.co">hi@stef.co</a>
          </li>
        </ul>
      </div>
      <div className="administration">
        <h2>Administratie</h2>
        <ul>
          <li>Siret: 81448255000013</li>
          <li>Bank: NL47 ASNB 0708 3314 67</li>
          <li>TVA: FR08814482550</li>
        </ul>
      </div>
      <p className="copyright">
        <a
          href="http://creativecommons.org/licenses/by-nc-nd/3.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alles hier &copy; Creative Commons
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/stefthoen/stef.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source staat op Github
        </a>
      </p>
    </Inner>
  </StyledFooter>
)

export default Footer
