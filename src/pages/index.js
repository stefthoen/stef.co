import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/layout"

import Header from "../components/header"
import Container from "../components/container"
import Case from "../components/case"

import IconDesign from "../svgs/feature_design.svg"
import IconBuild from "../svgs/feature_build.svg"
import IconService from "../svgs/feature_service.svg"
import LogoSpeld from "../svgs/speld-logo.svg"

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

S.Home = styled.div`
  position: relative;
  background-color: ${props => props.theme.color.neutral200};
  max-width: 964px;
  margin: 0 auto;
  margin-top: -${props => props.theme.space500};
`

S.About = styled.section`
  border-top: ${props => props.theme.space100} solid
    ${props => props.theme.color.neutral700};
  box-shadow: -5px -1px 5px -5px ${props => props.theme.color.neutral700},
    5px -1px 5px -5px ${props => props.theme.color.neutral700};
  font-size: ${props => props.theme.font.size500};
  line-height: ${props => props.theme.lineheight300};
  margin: ${props => props.theme.space.stack400};
  padding-top: ${props => props.theme.space400};
  padding-left: ${props => props.theme.space400};
  padding-right: ${props => props.theme.space400};

  ${props => props.theme.media.size100`
    padding-left: ${props => props.theme.space500};
    padding-right: ${props => props.theme.space500};
  `}
`

S.Story = styled.section`
  line-height: ${props => props.theme.lineheight250};
  margin: ${props => props.theme.space.stack500};

  ${props => props.theme.media.size100`
    display: flex;
  `}

  p {
    ${props => props.theme.media.size100`
      margin-right: ${props => props.theme.spaceDefault};
      flex: 1 1 0;
    `}
  }

  p:last-child {
    ${props => props.theme.media.size100`
      margin-right: 0;
    `}
  }
`

S.Features = styled.section`
  line-height: ${props => props.theme.lineheight250};
  margin: ${props => props.theme.space.stack500};

  h2 {
    margin: ${props => props.theme.space.stack400};
  }

  svg {
    display: block;
    margin: ${props => props.theme.space.stack300};
  }

  h3 {
    margin: 0;
  }

  div {
    ${props => props.theme.media.size100`
      display: flex;
      justify-content: center;
    `}
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${props => props.theme.media.size100`
      margin-right: ${props => props.theme.spaceDefault};
      flex: 1 1 0;
    `}
  }

  article:last-child {
    ${props => props.theme.media.size100`
      margin-right: 0;
    `}
  }
`

S.Cases = styled.section`
  line-height: ${props => props.theme.lineheight250};
  margin: ${props => props.theme.space.stack500};

  header {
    margin: ${props => props.theme.space.stack500};
  }
`

S.Contact = styled.section`
  line-height: ${props => props.theme.lineheight250};
  margin: ${props => props.theme.space.stack500};
  margin-bottom: ${props => props.theme.space600};
`

const IndexPage = () => {
  const imageData = useStaticQuery(graphql`
    query {
      speld: file(relativePath: { eq: "speld.png" }) {
        ...caseImage
      }
      quaiDesNotaires: file(relativePath: { eq: "quai-des-notaires.png" }) {
        ...caseImage
      }
      hogeschoolUtrecht: file(relativePath: { eq: "hogeschool-utrecht.png" }) {
        ...caseImage
      }
      nexusInstituut: file(relativePath: { eq: "nexus-instituut.png" }) {
        ...caseImage
      }
      echotoon: file(relativePath: { eq: "echotoon.png" }) {
        ...caseImage
      }
    }
  `)

  return (
    <Layout>
      <Header />
      <S.Home>
        <SEO />
        <S.About>
          <h1>Stef Thoen </h1>
          <p>
            Ik ben een freelance full-stack developer met een achtergrond in
            Informatica en Filosofie. Ik werk vanuit Frankrijk voor Nederlandse
            klanten.
          </p>
        </S.About>
        <Container>
          <S.Story>
            <p>
              Oktober 2013 vertrok ik met mijn vrouw en{" "}
              <a href="http://joepdezoeperd.nl">Joep de Zoeperd</a> en ben ik
              door Europa gaan zwerven als digitale nomade.
            </p>
            <p>
              Wij zijn gestrand in de Morvan in Frankrijk, waar we twee jaar
              hebben gewoond in een{" "}
              <a href="https://www.paprikapatterns.com/building-home-mounting-yurt/">
                yurt
              </a>
              . Zomer 2017 hebben we een{" "}
              <a href="http://peuapeu.nl">
                oude boerderij gekocht die we aan het opknappen zijn
              </a>
              .
            </p>
          </S.Story>

          <S.Features>
            <h2>Wat doe ik?</h2>
            <div>
              <article>
                <IconDesign className="icon" />
                <h3>Ontwerp</h3>
                <p>
                  Ik onderzoek, schets en bouw prototypes. Ik zorg voor een
                  overzichtelijk en doeltreffend ontwerp, een website waar
                  bezoekers graag naar terugkomen.
                </p>
              </article>
              <article>
                <IconBuild />
                <h3>Bouw</h3>
                <p>
                  Responsive websites en webapps gebouwd met een sterke focus op
                  performance. Razendsnel waardoor je bezoeker snel vindt wat
                  hij zoekt.
                </p>
              </article>
              <article>
                <IconService />
                <h3>Service</h3>
                <p>
                  Na oplevering voer ik onderhoud uit, host ik je website,
                  installeer updates en &apos;tweak&apos; de website voor
                  optimale veiligheid en conversie.
                </p>
              </article>
            </div>
          </S.Features>

          <S.Cases>
            <header>
              <h2>Wat maak ik?</h2>
              <p>
                Ik bouw responsive websites op maat. Dit gaat van een simpele
                one-page tot complete webshops. HTML, CSS en JavaScript kennen
                voor mij geen geheimen. WordPress is mijn CMS naar keuze, maar
                ik heb ervaring met een boel andere back-end talen en
                frameworks.
              </p>
              <p>
                Hieronder volgt een greep uit mijn meest recente werk. Wil je
                meer zien <a href="mailto:hi@stef.co">neem dan contact op</a>.
              </p>
            </header>
            <Case
              title="Quai des Notaires"
              url="https://quaidesnotaires.com"
              imageData={imageData.quaiDesNotaires}
            >
              <div className="summary">
                <p>
                  Quai des Notaires is een Franse startup in de notaris markt.
                  Ik was project lead van een team dat een Symfony 3 web
                  applicatie met Twig templates converteerde naar een Symfony 4
                  GraphQL API met een React front-end.
                </p>
              </div>
            </Case>
            <Case
              className="speld"
              title="De Speld"
              url="https://speld.nl"
              imageData={imageData.speld}
              logo={<LogoSpeld className="logo" />}
            >
              <div className="summary">
                <p>
                  {" "}
                  De Speld is de grootste satirische website van Nederland met
                  maandelijks meer dan 1,5 miljoen bezoekers. Ik heb het
                  afgelopen jaar een grote refactor uitgevoerd en de codebase
                  gemoderniseerd. Daarnaast heb ik nieuwe features ontwikkeld en
                  de website gekoppeld aan een nieuwe advertentie partner. Ten
                  slotte hebben we een “Vage Kennis” abonnement model
                  geintroduceerd waarmee bezoekers lid kunnen worden en een
                  advertentie-vrije versie van de website kunnen zien.
                </p>
              </div>
            </Case>
            <Case
              title="Hogeschool Utrecht"
              url="https://pathfinder.stef.co"
              imageData={imageData.hogeschoolUtrecht}
            >
              <p>
                Hogeschool Utrecht vroeg mij een keuzetool te ontwikkeling, voor
                de selectie van strategieën voor gedragsverandering. Op basis
                van het ontwerp van{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.panton.nl"
                >
                  Panton
                </a>{" "}
                heb ik een responsive React progressive web app gebouwd.
              </p>
            </Case>
            <Case
              title="Nexus Instituut"
              url="https://nexus-instituut.nl"
              imageData={imageData.nexusInstituut}
            >
              <p>
                De website van Nexus Instituut heb ik responsive gemaakt
                waardoor hij meeschaalt met verschillende scherm formaten. De
                oude website gebruikte een maatwerk CMS. Onder luid gejuich van
                de Nexus redactie heb ik hem omgezet naar WordPress. Een nieuwe
                WooCommerce store maakt dat klanten met groot gemak het laatste
                Nexus magazine kunnen bestellen.
              </p>
            </Case>
            <Case
              title="Echotoon"
              url="https://echotoon.nl"
              imageData={imageData.echotoon}
            >
              <p>
                Samen met visueel strateeg{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://irisvansen.nl"
                >
                  Iris van Sen
                </a>{" "}
                en UX designer{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://leonhuisman.com"
                >
                  Leon Huisman
                </a>{" "}
                hebben we een responsive WordPress website gemaakt voor
                Echotoon; de beste echoscopie praktijk van Noord-Nederland.
              </p>
            </Case>
          </S.Cases>

          <S.Contact>
            <h2>Waar kan ik je mee helpen?</h2>
            <p>
              Denk je dat ik je ergens bij kan helpen? Of je nu een simpele
              website nodig hebt, of je een creatief communicatiebureau hebt en
              een vaste dev&apos;er nodig hebt om je designs te bouwen: Stuur
              mij een e-mail op <a href="mailto:hi@stef.co">hi@stef.co</a>.
            </p>
          </S.Contact>
        </Container>
      </S.Home>
    </Layout>
  )
}

export default IndexPage
