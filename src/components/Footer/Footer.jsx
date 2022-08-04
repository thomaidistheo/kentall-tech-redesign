import React from 'react'
import { Link } from 'react-router-dom'
import ContactWidget from '../Widgets/ContactWIdget/ContactWidget'

import LinkWidget from '../Widgets/LinkWidget/LinkWidget'

import './footer.css'

export default function Footer() {
  return (
    <ul className='footer-cont'>
      <li className='footer-widget'>
        <ContactWidget 
          email='info@kentall-tech.com'
          phone='6948465991'
        />
      </li>

      <div className="widget-seperator"></div>

      <li className='footer-widget'>
        <LinkWidget 
          title="Web Platform"
          item1={ <Link to="/guides"> Guides </Link> }
          item2={ <Link to="/features"> Features </Link> }
          item3={ <Link to="/demo"> Demo </Link> }
          item4={ <Link to="/support"> Support </Link> }
          />
      </li>

      <div className="widget-seperator"></div>

      <li className='footer-widget'>
        <LinkWidget 
          title="Devices"
          item1={ <Link to="/our-devices"> Our Devices </Link> }
          item2={ <Link to="/third-party-compatibility"> Third-Party Compatibility </Link> }
          item3={ <Link to="/features"> Features </Link> }
          item4={ <Link to="/support"> Support </Link> }
          />
      </li>

    </ul>
  )
}
