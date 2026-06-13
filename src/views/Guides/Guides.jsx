'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import PageTitle from '../../components/PageTitle/PageTitle'
import { guideCategories, allGuides, findGuide, guideImages } from './guidesData'

import './guides.scss'

// "Term: explanation" list items get the term rendered bold
const renderListItem = (item) => {
    const idx = item.indexOf(': ')
    if (idx === -1) return item
    return (
        <>
            <strong>{item.slice(0, idx)}</strong>: {item.slice(idx + 2)}
        </>
    )
}

function Guides({ slug }) {
    const article = findGuide(slug) || allGuides[0]

    // Lightbox: { src, caption } or null
    const [lightbox, setLightbox] = useState(null)
    const [zoomed, setZoomed] = useState(false)

    const openLightbox = (src, caption) => {
        setLightbox({ src, caption })
        setZoomed(false)
    }
    const closeLightbox = () => setLightbox(null)

    // Close on Escape and lock page scroll while the lightbox is open
    useEffect(() => {
        if (!lightbox) return

        const onKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox()
        }
        window.addEventListener('keydown', onKeyDown)
        document.body.style.overflowY = 'hidden'

        return () => {
            window.removeEventListener('keydown', onKeyDown)
            document.body.style.overflowY = ''
        }
    }, [lightbox])

    return (
        <div className='landing-page'>
            <PageTitle title='Guides' />

            <div className='guides-layout'>
                <nav className='guides-sidebar' aria-label='Guides navigation'>
                    {guideCategories.map((category) => (
                        <div className='guides-category' key={category.title}>
                            <div className='guides-category-title text-small'>
                                {category.title}
                            </div>
                            <ul>
                                {category.articles.map((a) => (
                                    <li key={a.slug}>
                                        <Link
                                            href={`/guides/${a.slug}`}
                                            className={
                                                a.slug === article.slug ? 'active' : ''
                                            }
                                        >
                                            {a.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                <article className='guides-content'>
                    <h2 className='text-big'>{article.title}</h2>
                    <div className='guides-divider'></div>

                    {article.blocks.map((block, i) => {
                        if (typeof block === 'string') {
                            return <p className='text-normal' key={i}>{block}</p>
                        }

                        if (block.img) {
                            const src = guideImages[block.img]
                            const srcs = Array.isArray(src) ? src : src ? [src] : []
                            return (
                                <figure className='guides-figure' key={i}>
                                    {srcs.length > 0 ? (
                                        <div className='figure-row'>
                                            {srcs.map((s, n) => (
                                                <button
                                                    type='button'
                                                    className='figure-zoom-btn'
                                                    aria-label={`Enlarge image: ${block.caption}`}
                                                    onClick={() => openLightbox(s, block.caption)}
                                                    key={n}
                                                >
                                                    <Image src={s} alt={block.caption} />
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className='guides-img-placeholder'>
                                            <span className='placeholder-number'>#{block.img}</span>
                                            <span className='placeholder-label text-small'>image placeholder</span>
                                        </div>
                                    )}
                                    <figcaption className='text-small'>{block.caption}</figcaption>
                                </figure>
                            )
                        }

                        return (
                            <ul className='guides-list text-normal' key={i}>
                                {block.list.map((item) => (
                                    <li key={item}>{renderListItem(item)}</li>
                                ))}
                            </ul>
                        )
                    })}

                    <div className='guides-help text-small'>
                        Can’t find what you’re looking for?{' '}
                        <a href='mailto:info@kentall-tech.com'>Contact us</a> and we’ll help you out.
                    </div>
                </article>
            </div>

            {lightbox && (
                <div
                    className='guides-lightbox'
                    role='dialog'
                    aria-modal='true'
                    aria-label={lightbox.caption}
                    onClick={closeLightbox}
                >
                    <div className='lightbox-toolbar' onClick={(e) => e.stopPropagation()}>
                        <button
                            type='button'
                            className='lightbox-btn'
                            onClick={() => setZoomed(!zoomed)}
                        >
                            {zoomed ? '− Zoom out' : '+ Zoom in'}
                        </button>
                        <button
                            type='button'
                            className='lightbox-btn'
                            aria-label='Close'
                            onClick={closeLightbox}
                        >
                            ✕ Close
                        </button>
                    </div>

                    <div className={`lightbox-body${zoomed ? ' zoomed' : ''}`}>
                        <Image
                            src={lightbox.src}
                            alt={lightbox.caption}
                            onClick={(e) => {
                                e.stopPropagation()
                                setZoomed(!zoomed)
                            }}
                        />
                    </div>

                    <div className='lightbox-caption text-small' onClick={(e) => e.stopPropagation()}>
                        {lightbox.caption}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Guides
