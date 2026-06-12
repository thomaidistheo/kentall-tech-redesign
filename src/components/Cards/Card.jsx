import React from 'react'
import Link from 'next/link'

import '../Cards/card.scss'



export default function Card({ title, text, buttonLink, buttonText, image}) {
  return (
      <div className='card'>
          <div className='inner'>
              <div
                  className="image"
                  style={{
                      backgroundImage: `url(${image.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
              ></div>
              <h2 className='title'>{title}</h2>
              <div className='text'>{text}</div>

              <Link href={buttonLink} className='btn btn-primary-blue'>
                      {buttonText}
              </Link>
          </div>
      </div>
  )
}
