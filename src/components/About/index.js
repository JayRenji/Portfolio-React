import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'H',
                'e',
                'l',
                'l',
                'o',
                '',
                'T',
                'h',
                'e',
                'r',
                'e',
                '.',
              ]}
              idx={15}
            />
          </h1>
          <p>
            After many years of experience in the fields of teaching and
            linguistics, I decided to finally challenge myself, and follow my
            second passion: programming and Tech. In my teaching experience I
            have come across people form all walks of life, from the man on the
            street worker, to the high C-suit executive, and found that all of
            us have one desire that unites us: wanting to be the best we can at
            what we do and offering the best of us to others. This realization
            inspired me to go on to the next level and challenge myself to
            pursue a dream that up to that point had been mostly a hobby, and so
            I embarked in this new journey into the realm of front end.
          </p>
          <p>
            Thanks to my unique background and approach to life I bring into
            each and every project that I embark on a marriage between my love
            for the tech and the art behind designing windows into worlds and
            the empathy and need for communication that we as humans all need
            and search for, be it among my team or directly towards the end
            user, hearing what they have to say and finding how best to meet
            their needs .
          </p>
          <p>
            I would describe myself as a very energetic and enthusiastic
            individual, who has an immense love for his family, great passion
            for every project he embarks on and an immense pride in his work and
            achievements.
          </p>
          <p>
            Oh, and I am also a huge nerdy gamer that enjoys literature and
            obsess over storytelling and world building.{' '}
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#d61b15" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f5932b" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#2862e9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#04d1f7" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#e84e32" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default About
