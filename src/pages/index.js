import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import Navbar from '../components/navbar.js'

const ourOfferts = [
  {
    name: 'Wulkanizacja',
    description:
      'Wymienimy Twoje opony i wyważymy koła. Przechowamy Twoje opony do następnego sezonu.',
    imageId: 'wheels',
  },
  {
    name: 'Naprawa i regeneracja silników',
    description:
      'Silnik jest sercem Twojego samochodu. Zadbaj o niego zostawiając swoje auto w naszym serwisie.',
    imageId: 'engine',
  },
  {
    name: 'Diagnostyka i naprawa zawieszenia',
    description:
      'Dzięki dobremu zawieszeniu możesz poczuć się komfortowo i bezpiecznie. To naprawdę ważne, tym bardziej na polskich drogach.',
    imageId: 'suspension',
    imageAlt: 'Ilustracja przedstwiająca zawieszenie',
  },
  {
    name: 'Przeglądy okresowe',
    description:
      'Wymienimy klocki i tarcze hamulcowe oraz oleje i filtry w Twoim samochodzie.',
    imageId: 'overview',
  },
  {
    name: 'Regeneracja alternatorów',
    description:
      'Jeśli coś zaczyna popiskiwać pod Twoją maską, to szybciutko należy sprawdzić stan alternatora, zanim nadejdą większe szkody.',
    imageId: 'alternator',
  },
  {
    name: 'Spawalnictwo',
    description: 'To nasza specjalność. Pospawamy prawie wszystko.',
    imageId: 'welding',
  },
]

const ourPros = [
  {
    name: 'Jakość',
    description:
      'Mamy nowoczesny warsztat i doświadczonych mechaników. Oferujemy Ci usługi na najwyższym poziomie.',
    imageId: 'quality',
  },
  {
    name: 'Odpowiedzialność',
    description:
      'Twój samochód będzie przygotowany na każdą podróż. Gotowy na przygodę?',
    imageId: 'responsibility',
  },
  {
    name: 'Czas naprawy',
    description:
      'Naprawiamy tak szybko, jak to możliwe. I zawsze zgodnie z terminem.',
    imageId: 'repair_time',
  },
  {
    name: 'Uczciwość',
    description:
      'Jesteśmy uczciwi wobec Ciebie. Robimy dokładnie to, na co się umawiamy.',
    imageId: 'honesty',
  },
  {
    name: 'Doświadczenie',
    description:
      'Już od wielu lat dbamy o pojazdy. Pracują u nas doświadczeni serwisanci, którzy naprawdę znają się na rzeczy.',
    imageId: 'experience',
  },
]

const OurProLink = styled.a`
  color: initial;
  text-decoration: none;
  background: hsla(0, 0%, 0%, 0.02);
  border-radius: 0.2rem;
  display: flex;
  flex-flow: row wrap;
`

const OurProImage = styled(Img)`
  width: 21.2rem;
  height: 30rem;
  flex: 0 0 auto;
`

const OurProContent = styled.div`
  padding: 2rem;
`

const OurPro = ({ name, description, imageId, images }) => {
  return (
    <OurProLink>
      <OurProImage fixed={images[imageId].childImageSharp.fixed} />
      <OurProContent>
        <h2>{name}</h2>
        <p>{description}</p>
      </OurProContent>
    </OurProLink>
  )
}

const OurOffertLink = styled.a`
  color: initial;
  text-decoration: none;
  background: hsla(0, 0%, 0%, 0.02);
  border-radius: 0.2rem;
  display: flex;
  flex-flow: row wrap;
`

const OurOffertImage = styled(Img)`
  width: 21.2rem;
  height: 30rem;
  flex: 0 0 auto;
`

const OurOffertContent = styled.div`
  padding: 2rem;
`
const OurOffert = ({ name, description, imageId, images }) => {
  return (
    <OurOffertLink>
      <OurOffertImage fixed={images[imageId].childImageSharp.fixed} />
      <OurOffertContent>
        <h2>{name}</h2>
        <p>{description}</p>
      </OurOffertContent>
    </OurOffertLink>
  )
}

const IndexPage = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        car_repair_station: file(relativePath: { eq: "home_page.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        blur: file(relativePath: { eq: "home_blur.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        wheels: file(relativePath: { eq: "opony.png" }) {
          childImageSharp {
            fixed(width: 207, height: 188) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        alternator: file(relativePath: { eq: "alternator.jpg" }) {
          childImageSharp {
            fixed(width: 245, height: 188) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        overview: file(relativePath: { eq: "przeglad.png" }) {
          childImageSharp {
            fixed(width: 283, height: 188) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        engine: file(relativePath: { eq: "silnik.png" }) {
          childImageSharp {
            fixed(width: 235, height: 188) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        welding: file(relativePath: { eq: "spawalnictwo.png" }) {
          childImageSharp {
            fixed(width: 250, height: 188) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        suspension: file(relativePath: { eq: "zawieszenie.png" }) {
          childImageSharp {
            fixed(width: 282, height: 188) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        repair_time: file(relativePath: { eq: "czas_naprawy.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        experience: file(relativePath: { eq: "doswiadczenie.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        quality: file(relativePath: { eq: "jakosc.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        responsibility: file(relativePath: { eq: "odpowiedzialnosc.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        honesty: file(relativePath: { eq: "uczciwosc.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div>
          <Navbar />
          <BackgroundImage
            Tag='section'
            className={className}
            alt='Ilustracja w tle przedstawiająca miejsce naprawy aut'
            fluid={data.car_repair_station.childImageSharp.fluid}>
            <h1>Naprawdę możesz nam zaufać</h1>
            <h2>
              Szukasz dobrego mechanika? Dobrze trafiłeś, ponieważ należycie Cię
              obsłużymy i jesteśmy uczciwi. A co najważniejsze, kochamy to, co
              robimy i pragniemy, żebyś był zadowolony.
            </h2>
            // <h2>Umów wizytę - button!</h2>
          </BackgroundImage>
          <div>
            {ourPros.map(ourPro => (
              <OurPro key={ourPro.name} {...ourPro} images={data} />
            ))}
          </div>
          <BackgroundImage
            Tag='section'
            fluid={data.blur.childImageSharp.fluid}>
            <h1>Naprawa samochodu nigdy nie była taka prosta</h1>
            <h2>Umów wizytę - button!</h2>
          </BackgroundImage>
          <div>
            // <h1>Gallery???</h1>
          </div>
          <div>
            <h1>Rzetelna wycena</h1>
            <p>
              Przed naprawą dowiesz jakie są przewidywane koszty naprawy oraz
              ile ona potrwa.
            </p>
            // <h2>Umów wizytę - button!</h2>
          </div>
          <div>
            <h1>Co robimy?</h1>
            {ourOfferts.map(ourOffert => (
              <OurOffert key={ourOffert.name} {...ourOffert} images={data} />
            ))}
          </div>
          <div>
            <h1>Nie musisz szukać dalej</h1>
            // <h2>Umów wizytę - button!</h2>
          </div>
        </div>
      )
    }}
  />
)

export default IndexPage
