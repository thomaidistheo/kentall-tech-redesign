import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'

import './error-page.css'

export default function ErrorPage() {
  return (
      <div className="error-page-cont">
        <h1>
          This page does not exist.
        </h1>

        <Link to='/' className='btn btn-primary-blue'>
          Return Home
        </Link>

        <div className='error-suggestion'>
          <Contact />
        </div>

      </div>
    )
  }