// import { useRef } from 'react'
import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'contact_service',
        'template_8af8phk',
        refForm.current,
        'IC5jFOSTYY-zaa4t_'
      )
      .then(
        () => {
          alert('Message Sent!')
          window.location.reload(false)
        },
        () => {
          alert('Message Failed, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'a', 'y', '', 'H', 'e', 'l', 'l', 'o', '.']}
              idx={15}
            />
          </h1>
          <p>
            I’m interested in all sorts of work opportunities, freelance
            endeavours, or corporate projects. I also offer my wide expertise in
            proofreading, English to Spanish / Spanish to English translation,
            as well as other linguistic needs, please feel free to contact me.
            Or if you simply want to say “Hi”, and chat, just use the form
            below!!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <input type="submit" className="flat-button" value="SEND" />
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Javier "Jay" Pereira,
          <br />
          Spain,
          <br />
          Calle Puerta Del Sol, plaza 28013 <br />
          Madrid <br />
          <span>jay.englishgroup@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[40.4167, -3.7042]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[40.4167, -3.7042]}>
              <Popup>Hello there!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Contact
