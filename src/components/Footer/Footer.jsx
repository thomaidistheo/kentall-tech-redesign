import React from 'react'
import Link from 'next/link'
import ContactWidget from '../Widgets/ContactWIdget/ContactWidget'

import LinkWidget from '../Widgets/LinkWidget/LinkWidget'

import './footer.scss'

export default function Footer() {
  return (
    <ul className='footer-cont'>
      <li className='footer-widget'>
        <ContactWidget
          email='info@kentall-tech.com'
          phone='2170001200'
        />
      </li>

      <div className="widget-seperator"></div>

      <li className='footer-widget'>
        <LinkWidget
          title="Web Platform"
          item1={ <Link href="/guides"> Guides </Link> }
          item2={ <Link href="/features"> Features </Link> }
          item3={ <Link href="/demo"> Demo </Link> }
          item4={ <Link href="/support"> Support </Link> }
          />
      </li>

      <div className="widget-seperator"></div>

      <li className='footer-widget'>
        <LinkWidget
          title="Devices"
          item1={ <Link href="/our-devices"> Our Devices </Link> }
          item2={ <Link href="/third-party-compatibility"> Third-Party Compatibility </Link> }
          item3={ <Link href="/features"> Features </Link> }
          item4={ <Link href="/support"> Support </Link> }
          />
      </li>
    </ul>
  )
}
