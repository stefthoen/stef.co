import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import IconDesign from "../svgs/feature_design.svg"
import IconBuild from "../svgs/feature_build.svg"

const S = {}

S.CV = styled.section`
  ${props => props.theme.media.size100`
    display: flex;
  `}
`

S.Unit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: ${props => props.theme.lineheight300};
  margin: ${props => props.theme.space.stack500};

  li {
    font-size: ${props => props.theme.font.size500};
    margin-bottom: ${props => props.theme.spaceDefault};
    list-style: none;
  }

  li span:first-child {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: bold;
  }

  li span:last-child {
    color: ${props => props.theme.color.neutral600};
    font-size: ${props => props.theme.font.size400};
  }
`

const CV = () => (
  <>
    <S.CV>
      <S.Unit>
        <IconDesign className="icon" />
        <h2>Education</h2>
        <ul>
          <li>
            <span>Bachelor in Computer Science</span>
            <br />
            <span>Haagse Hogeschool, The Hague (1999-2005)</span>
          </li>
          <li>
            <span>Bachelor in Philosophy</span>
            <span>(Unfinished)</span>
            <br />
            <span>
              Rijksuniversiteit Groningen (RUG) - Groningen (2005-2008)
            </span>
          </li>
        </ul>
      </S.Unit>
      <S.Unit>
        <IconBuild className="icon" />
        <h2>Work Experience</h2>
        <ul>
          <li>
            <span>Freelance full-stack web developer</span>
            <br />
            <span>
              From 2010 and still going @ <Link to="/">Stef.co</Link>
            </span>
          </li>
          <li>
            <span>Full-stack web developer</span>
            <br />
            <span>
              From 2009 until 2011 @ V12 Online Engineers in Groningen
            </span>
          </li>
          <li>
            <span>Quality Assurance</span>
            <br />
            <span>from 2000 until 2005 @ NIAM-TMS in The Hague</span>
          </li>
        </ul>
      </S.Unit>
    </S.CV>
  </>
)

export default CV
