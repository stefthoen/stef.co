import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const S = {}

S.AboutMe = styled.section`
  line-height: ${props => props.theme.lineheight250};
  margin: ${props => props.theme.space.stack500};
`

const AboutMe = ({ className }) => {
  return (
    <S.AboutMe className={className}>
      <h2>About me</h2>
      <p>
        My wife and I bought an{" "}
        <a href="https://joepdezoeperd.nl">old firetruck</a> back in 2013 to
        travel Europe for a year and got stranded in the{" "}
        <a href="https://www.google.com/search?q=morvan&tbm=isch">Morvan</a>,
        France. We built a yurt and lived in it for a couple of years, but right
        now it's on{" "}
        <a href="https://www.airbnb.com/rooms/32543480?s=67&unique_share_id=09f608eb-cd90-429e-b043-2597f02b7012">
          Airbnb
        </a>
        . Three years ago we bought an old farmhouse in the countryside and
        we're renovating to create space for our two daughters.
      </p>
      <p>
        I like trail running. I've ran{" "}
        <a href="https://www.youtube.com/watch?v=64dS0rTJCXg">
          {" "}
          my first ultra-trail{" "}
        </a>{" "}
        last year and hope to run the{" "}
        <a href="https://utmbmontblanc.com">UTMB</a> one day. Recently I started
        getting into rock climbing and this winter I'd like to build a{" "}
        <a href="https://www.moonboard.com/">Moon board</a>. In the summer I go
        for backpacking hikes in the mountains. On the nerdy side I love{" "}
        <a href="https://www.pricecharting.com/offers?seller=3k2pl75253fpqia35xhgqw74te&status=collection">
          retro videogames and consoles
        </a>{" "}
        and tinkering with my homelab.{" "}
      </p>
      <p>
        I enjoy self-improvement, self-suffiency, and I love{" "}
        <a href="https://www.goodreads.com/thoen">learning</a>. According to the
        Myers-Briggs test I'm a{" "}
        <a href="https://www.16personalities.com/isfj-personality">Defender</a>.
      </p>
    </S.AboutMe>
  )
}

AboutMe.propTypes = {
  className: PropTypes.node.function,
}

export default AboutMe
