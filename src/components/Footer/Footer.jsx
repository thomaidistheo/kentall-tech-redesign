import React from 'react'
import { Link } from 'react-router-dom'

import LinkWidget from '../Widgets/LinkWidget/LinkWidget'

import './footer.css'

export default function Footer() {
  return (
    <div className='footer-cont'>
        <LinkWidget 
            title="Web Platform"
            item1={ <Link to="/guides"> Guides </Link> }
            item2={ <Link to="/features"> Features </Link> }
            item3={ <Link to="/demo"> Demo </Link> }
            item4={ <Link to="/support"> Support </Link> }
        />
    </div>
  )
}
