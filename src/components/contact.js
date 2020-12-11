import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const S = {}

S.Contact = styled.section`
  line-height: ${props => props.theme.lineheight250};
  margin: ${props => props.theme.space.stack500};
  margin-bottom: ${props => props.theme.space600};
`

const Contact = () => (
  <S.Contact>
    <h2>Can we work together?</h2>
    <p>
      I hope you enjoyed this little presentation! I'd love to talk and hear how
      I might be able to help. Please send me a message at{" "}
      <a href="mailto:hi@stef.co">hi@stef.co</a> to plan a call.
    </p>
  </S.Contact>
)

Contact.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Contact
