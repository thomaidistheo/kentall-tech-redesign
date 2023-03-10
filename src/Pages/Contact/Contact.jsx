import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'

import './contact.css'

import { ReactComponent as IconMail } from '../../assets/icons/mail-icon.svg'
// import { ReactComponent as IconTel } from '../../assets/icons/phone-icon.svg'

export default function Contact({ desc }) {

  // const handleSubmit = () => {
  //   console.log('form submitted')
  // }

  return (
    <div className="landing-page">
      <PageTitle title='Contact us' />
      <div className='contact-cont'>

        
        <p className="contact-text">
          We take your needs for security seriously and would like to help you find the best solution
          for your personal asset or fleet.
        </p>
        <div className="contact-info">
          <ul>
            {/* <li>
                <span className='icon'><IconTel /></span>
              <a href="tel:2170001200">
                <span className="link-text">2170001200</span>
              </a>
              <span className='tel-space'>-</span>
              <a href="tel:2107663471">
                <span className="link-text">2107663471</span>
              </a>
            </li> */}
            <li>
                <span className='icon'><IconMail /></span>
              <a href="mailto:info@kentall-tech.com">
                <span className="link-text">info@kentall-tech.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* <form action="https://getform.io/f/8c9f0cc2-0884-4695-9c72-dc2eca7416be" method="post">

          <div>
            <label htmlFor="name">Your Name<span className="formReq">*</span></label>
            <input name="Name" id="name" type="text" required />
          </div>

          <div>
            <label htmlFor="surname">Your Surname<span className="formReq">*</span></label>
            <input name="Surname" id="surname" type="text" required />
          </div>

          <div>
            <label htmlFor="email">Your Email<span className="formReq">*</span></label>
            <input name="Email" id="email" type="email" required  />
          </div>

          <div>
            <label htmlFor="asset">Type of Asset<span className="formReq">*</span></label>
            <select name="Assets" id="Asset">
              <option disabled>Select...</option>
              <option value="Boat">Boat</option>
              <option value="Car">Car</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="model">Model</label>
            <input name="Model" id="model" type="text" />
          </div>

          <div>
            <label htmlFor="info">More Information</label>
            <p>Tell us more about your needs</p>
            <textarea name="Information" id="info" type="text" />
          </div>

          <div>
            <button 
              className="g-recaptcha" 
              data-sitekey="6Lc-89wfAAAAAERQzD3sFKJxzDGHyrzectGbkVLN" 
              data-callback='onSubmit' 
              data-action='submit'
              type="submit" 
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

        </form> */}
    </div>
    </div>

    
  )
}
