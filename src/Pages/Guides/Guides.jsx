import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import PageTitle from '../../components/PageTitle/PageTitle'
import { guideCategories, allGuides, findGuide } from './guidesData'

import './guides.scss'

function Guides() {
    const { slug } = useParams()
    const article = findGuide(slug) || allGuides[0]

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
                                        <NavLink
                                            to={`/guides/${a.slug}`}
                                            className={() =>
                                                a.slug === article.slug ? 'active' : ''
                                            }
                                        >
                                            {a.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                <article className='guides-content'>
                    <h2 className='text-big'>{article.title}</h2>
                    <div className='guides-divider'></div>

                    {article.paragraphs.map((text, i) => (
                        <p className='text-normal' key={i}>{text}</p>
                    ))}

                    <div className='guides-help text-small'>
                        Can’t find what you’re looking for?{' '}
                        <a href='mailto:info@kentall-tech.com'>Contact us</a> and we’ll help you out.
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Guides
