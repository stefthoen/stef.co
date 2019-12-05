import React from "react"
import styled from "styled-components"

const S = {}

S.CTA = styled.div`
  background-color: ${props => props.theme.color.neutral700};
  color: ${props => props.theme.color.neutral500};
  font-size: ${props => props.theme.font.sizeDefault};
  padding: ${props => props.theme.space200} ${props => props.theme.space300};
  position: fixed;
  right: ${props => props.theme.spaceDefault};
  top: ${props => props.theme.spaceDefault};
  z-index: ${props => props.theme.zIndex.layer100};

  a {
    color: ${props => props.theme.color.neutral500};
  }

  p {
    margin: 0;
  }

  a:hover {
    color: ${props => props.theme.color.neutral200};
    border-bottom: 1px solid ${props => props.theme.color.neutral200};
  }
`

const CTA = () => (
  <S.CTA>
    <p>Beschikbaar voor werk!</p>
    <p>
      Mail: <a href="mailto:hi@stef.co">hi@stef.co</a>
    </p>
  </S.CTA>
)

export default CTA
