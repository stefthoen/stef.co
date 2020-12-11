import React from "react"
import styled from "styled-components"

import About from "../components/about"
import AboutMe from "../components/aboutme"
import CV from "../components/cv"
import Cases from "../components/cases"
import Contact from "../components/contact"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Main from "../components/main"

import CaseEchotoon from "../components/cases/echotoon"
import CaseHogeschoolUtrecht from "../components/cases/hogeschoolutrecht"
import CaseNexusInstitute from "../components/cases/nexusinstitute"
import CaseQuaiDesNotaires from "../components/cases/quaidesnotaires"
import CaseSpeld from "../components/cases/speld"

import IconService from "../svgs/feature_service.svg"

const S = {}

S.Section = styled.section`
  line-height: ${props => props.theme.lineheight250};
  margin: ${props => props.theme.space.stack500};
`

S.Main = styled(Main)`
  .icon {
    display: block;
    margin: 0 auto;
  }
`

const Code23 = () => {
  return (
    <Layout>
      <Header />
      <S.Main>
        <About>
          <h1>Code23 & Stef</h1>
          <p>
            I've spent most of my working life (15+) as a freelance full-stack
            WordPress developer. I've lead remote teams and I've worked on
            PHP/JS/React stacks for SaaS companies. As a freelancer I'm
            self-motivated and good at budgeting projects.
          </p>
        </About>
        <Container>
          <S.Section>
            <p>
              Hi, my name is Stef Thoen. I'm a 38 year old full-stack web
              developer with 10+ years of experience with WordPress theme and
              plugin development. Originally from the Netherlands, but now
              living in France.
            </p>
            <p>
              I've been using the Roots stack since 2014. I especially like
              Bedrock and Trellis and I've used Sage previously, so I have no
              qualms using it again (although I prefer using my own custom setup
              based on <a href="https://upstatement.com/timber/">Timber</a> and
              React-like components).
              <p>
                I was excited by Tailwind the moment Adam Wathan mentioned it on
                his podcast, but have only used it for hobby projects. With the
                release of 2.0 I'm only picking Tailwind for my own projects
                from now on.
              </p>
            </p>
            <p>
              You're looking to create longstanding partnerships with your
              clients. I like working for agencies that are looking for that
              partnership, not only with their clients, but also with their
              freelancers.
            </p>
          </S.Section>
          <CV />
          <Cases>
            <header>
              <IconService className="icon" />
              <h2>Relevant Projects</h2>
              <p>
                These are some of the projects I've done that are relevant to
                Code23 in some way. It could be because they showcase the tech
                stack you use, it might be because they're bigger projects with
                a lot of customers or visitors, or they might be projects where
                I've taken on lead roles.
              </p>
            </header>
            <CaseQuaiDesNotaires />
            <CaseNexusInstitute />
            <CaseEchotoon />
            <CaseHogeschoolUtrecht />
            <CaseSpeld />
          </Cases>
          <AboutMe />
          <Contact />
        </Container>
      </S.Main>
    </Layout>
  )
}

export default Code23
