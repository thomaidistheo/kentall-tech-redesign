import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import PageTitle from '../../components/PageTitle/PageTitle'
import { guideCategories, allGuides, findGuide } from './guidesData'

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

                    {article.blocks.map((block, i) =>
                        typeof block === 'string' ? (
                            <p className='text-normal' key={i}>{block}</p>
                        ) : (
                            <ul className='guides-list text-normal' key={i}>
                                {block.list.map((item) => (
                                    <li key={item}>{renderListItem(item)}</li>
                                ))}
                            </ul>
                        )
                    )}

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
