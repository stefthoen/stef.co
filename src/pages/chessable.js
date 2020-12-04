import React from "react"
import { useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

import About from "../components/about"
import CV from "../components/cv"
import Case from "../components/case"
import Cases from "../components/cases"
import Contact from "../components/contact"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Main from "../components/main"
import Testimonial from "../components/testimonial"

import IconService from "../svgs/feature_service.svg"

export const caseImage = graphql`
  fragment caseImage on File {
    childImageSharp {
      fluid(maxWidth: 836) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

const S = {}

S.Intro = styled.section`
  line-height: ${props => props.theme.lineheight250};
  margin: ${props => props.theme.space.stack500};
`

S.Cases = styled(Cases)`
  .icon {
    display: block;
    margin: 0 auto;
  }
`

const Chessable = () => {
  const imageData = useStaticQuery(graphql`
    query {
      quaiDesNotaires: file(relativePath: { eq: "quai-des-notaires.png" }) {
        ...caseImage
      }
      hogeschoolUtrecht: file(relativePath: { eq: "hogeschool-utrecht.png" }) {
        ...caseImage
      }
      samenOpStap: file(relativePath: { eq: "samen-op-stap.png" }) {
        ...caseImage
      }
      speld: file(relativePath: { eq: "speld.png" }) {
        ...caseImage
      }
    }
  `)

  return (
    <Layout>
      <Header />
      <Main>
        <About>
          <h1>Chessable & Stef</h1>
          <p>
            I've spent most of my working life (10+) as a freelance full-stack
            developer. I've lead remote teams and I've worked on PHP/JS/React
            stacks for SaaS companies. As a freelancer I'm self-motivated and
            good at budgeting projects. I love your product and your vision and
            I think I'd be a great addition to your team.
          </p>
        </About>
        <Container>
          <S.Intro>
            <p>
              I'm an on-again off-again chess player. My biggest achievement in
              chess is my win against{" "}
              <a href="https://twitter.com/blackatlantic">Geert</a>, who kept
              giving me hints that I should keep pushing my pawns. I was
              subscribed to{" "}
              <a href="https://www.youtube.com/channel/UC6hOVYvNn79Sl1Fc1vx2mYA">
                John's YouTube channel at one time.
              </a>{" "}
              I've even built a chess website, with just one blog post back in
              2014:{" "}
              <a href="https://web.archive.org/web/20150217122218/http://patzer.ch/analyze-your-games-with-a-chess-database-and-engine/">
                How to Analyse Your Games with a Chess Database and Engine
              </a>
              . Turns out I'm more of a system builder than a player.
            </p>

            <p>
              Originally from The Netherlands,{" "}
              <a href="https://lavalleedefretoy.com">
                I moved to France a couple of years ago
              </a>
              . I'm using <a href="https://apps.ankiweb.net/">Anki</a> to learn
              vocabulary. I'm even using Anki in a home-brew knowledge system.
              I've used spaced repetition for years and think it's a great idea
              to combine spaced repetion with chess learning.
            </p>

            <p>
              I've created an account and used your product, researched your
              current stack on <a href="wappalyzer.com">Wappalyzer</a> and read{" "}
              <a href="https://www.indiehackers.com/interview/chessable-3418ada3ff">
                David's Indie Hackers update
              </a>{" "}
              in which he calls himself more of a hacker than a developer. I get
              the feeling you have a legacy codebase on your hands and you're in
              the middle of a big reboot, I've done these before and I would
              love to help.
            </p>
          </S.Intro>
          <CV />
          <S.Cases>
            <header>
              <IconService className="icon" />
              <h2>Relevant Projects</h2>
              <p>
                These are some of the projects I've done that are relevant to
                Chessable in some way. It could be because they showcase the
                tech stack{" "}
                <Link to="https://www.chessable.com/careers/">
                  you folks are looking for
                </Link>
                , it might be because they're bigger projects with a lot of
                customers or visitors, or they might be projects where I've
                taken on lead roles.
              </p>
            </header>
            <Case
              title="Quai des Notaires"
              url="https://app.quaidesnotaires.com"
              imageData={imageData.quaiDesNotaires}
            >
              <div className="summary">
                <p>
                  Quai des Notaires is a French startup in the Notary market.
                  Initially I was asked to analyse the performance of their
                  front-end stack. After I presented my findings, we decided to
                  split up the monolith Symfony 3 app. I was hired as a
                  consultant to take on the project lead role for this
                  transition.
                </p>
                <p>
                  During a 5 month period I led a team of developers and
                  designers to build a new signup flow. We created a design
                  system, built React components that use Redux for state and
                  built a GraphQL API on top of Symfony 4.
                </p>
              </div>
              <Testimonial
                author="Simon Derain"
                jobTitle="UI Designer"
                company="DesignSD"
                companyURL="https://designsd.fr"
              >
                <p>
                  It was a real pleasure working with Stef, with whom
                  communication has always been very easy. He respected the
                  details of the design that I proposed, which was very
                  important to me. A lot of rigor, simplicity and
                  professionalism.
                </p>
              </Testimonial>
            </Case>
            <Case
              title="Hogeschool Utrecht"
              url="https://pathfinder.stef.co"
              imageData={imageData.hogeschoolUtrecht}
            >
              <div className="summary">
                <p>
                  I made a Progressive Web App for Hogeschool Utrecht with
                  React. It's a tool that lets you select strategies for
                  behaviour change.
                </p>
                <p>
                  The app was initially built as a prototype, but main
                  functionality was achieved within budget so I cleaned it up
                  and added extra features (PWA, responsive breakpoints). The
                  design was done by{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.panton.nl"
                  >
                    Panton
                  </a>
                  .
                </p>
              </div>
              <Testimonial
                author="Dr. Sander Hermsen"
                jobTitle="Senior Researcher Design & Behaviour Change"
                company="Hogeschool Utrecht"
                companyURL="https://www.onderzoek.hu.nl/Onderzoekers/Sander-Hermsen"
              >
                <p>
                  "Stef is a creative and reliable partner who delivers good
                  products. He works quickly and is affordable. Moreover, he is
                  very pleasant in communication and is proactive. In our
                  project for Hogeschool Utrecht, he knew how to handle the
                  production process so well, that more could be achieved than
                  initially budgeted - not exactly common in IT land. Highly
                  recommended!"
                </p>
              </Testimonial>
            </Case>
            <Case
              title="Samen op Stap"
              url="https://samenopstap.app"
              imageData={imageData.samenOpStap}
            >
              <div className="summary">
                <p>
                  During the initial months of COVID in the Netherlands,
                  restaurants were allowed to stay open, but with strict rules
                  about reservations and health checks. I've built an initial
                  React Native prototype for a system to book a reservation and
                  check the occupancy rate, to make it easier for businesses to
                  comply with these rules.
                </p>
              </div>
              <Testimonial
                author="Sythe Veenje"
                jobTitle="Webdesigner & Developer"
                company="Sythe"
                companyURL="https://sythe.nl"
              >
                <p>
                  "Stef built a prototype for us in React Native. He was
                  realistic in estimating how much work it takes to build our
                  app. We were very happy with Stef!"
                </p>
              </Testimonial>
            </Case>
            <Case
              title="De Speld"
              url="https://speld.nl"
              imageData={imageData.speld}
            >
              <div className="summary">
                <p></p>
                <p>
                  "De Speld" is the largest satirical news website in the
                  Netherlands with more than 1.5 million visitors every month. I
                  took a legacy codebase and refactored it systematically. I
                  also implemented new advertisement and subscription models.
                </p>
                <p>
                  Currently I'm working on a proposal to change the current
                  WordPress website to a headless setup with{" "}
                  <a href="https://www.wpgraphql.com/">WPGraphQL</a>. I've built
                  prototypes in Next.js, Gatsby and Frontity to test viability.
                </p>
              </div>
              <Testimonial
                author="Melle van den Berg"
                jobTitle="Managing Director"
                company="De Speld"
                companyURL="https://speld.nl"
              >
                <p>
                  "I have benefited a lot from Stef in recent years. He has
                  tightened up our site, and as a developer of our Vage Kennis
                  program he has helped us enormously. He is proactive,
                  contributes (pragmatic) solutions and focuses on permanent
                  improvement.
                </p>
              </Testimonial>
            </Case>
          </S.Cases>

          <Contact>
            <h2>Can we work together?</h2>
            <p>
              I hope you enjoyed this little presentation! I'd love to talk to
              you guys and hear more of your future plans and how I might be
              able to help. Please send me a message at{" "}
              <a href="mailto:hi@stef.co">hi@stef.co</a> to plan a call.
            </p>
          </Contact>
        </Container>
      </Main>
    </Layout>
  )
}

export default Chessable
