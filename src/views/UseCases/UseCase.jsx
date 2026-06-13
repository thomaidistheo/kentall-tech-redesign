import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Banner from '../../components/PDP Components/Banner/Banner'
import FeatureStrip from '../../components/PDP Components/Feature Strip/FeatureStrip'
import BodyBanner from '../../components/PDP Components/BodyBanner/BodyBanner'
import AssetStatusLegend from '../../components/PDP Components/AssetStatusLegend/AssetStatusLegend'
import { findUseCase } from './useCasesData'

import {
    ComputerDesktopIcon,
    MapIcon,
    ClockIcon,
    DocumentTextIcon,
    BellAlertIcon,
    ShieldCheckIcon,
    LockClosedIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

import './use-cases.scss'

// Shared marine art borrowed from the boat PDP.
import bannerDesk from '../../assets/Product Pages/pdp_boat_banner.png'
import bannerMob from '../../assets/Product Pages/pdp_boat_banner-mob.png'
import devices from '../../assets/laptop-phone-v2.png'
import bodyBannerDesk from '../../assets/Product Pages/pdp_boat_mid-banner.png'
import bodyBannerMob from '../../assets/Product Pages/pdp_boat_mid-banner-mob.png'
import fleetMap from '../../assets/Product Pages/fleet-map.png'
import tripHistoryImg1 from '../../assets/triphistory1.png'
import tripHistoryImg2 from '../../assets/triphistory2.png'
import vatReportImg from '../../assets/tripreport1.png'
import vatZoneImg from '../../assets/tripzone.png'

const ICONS = {
    platform: <ComputerDesktopIcon />,
    map: <MapIcon />,
    clock: <ClockIcon />,
    doc: <DocumentTextIcon />,
    bell: <BellAlertIcon />,
    shield: <ShieldCheckIcon />,
    lock: <LockClosedIcon />,
    users: <UsersIcon />,
}

// Renders a section body: a string is a paragraph, { list } is a bullet list.
function Body({ items }) {
    return items.map((item, i) => {
        if (typeof item === 'string') {
            return (
                <div className='centered-paragraph' key={i}>
                    {item}
                </div>
            )
        }
        return (
            <ul className='use-case-list' key={i}>
                {item.list.map((li) => (
                    <li key={li}>{li}</li>
                ))}
            </ul>
        )
    })
}

function Block({ block, alt }) {
    switch (block.kind) {
        case 'bodyBanner':
            return <BodyBanner desktop={bodyBannerDesk} mobile={bodyBannerMob} alt={alt} />

        case 'fleetMap':
            return (
                <>
                    <div className='section'>
                        <h2 className='centered-title'>{block.title}</h2>
                        <Body items={block.body} />
                    </div>
                    <div className='image-container'>
                        <Image className='screenshot' src={fleetMap} alt={`Live fleet map for ${alt}`} />
                        <AssetStatusLegend />
                    </div>
                </>
            )

        case 'photoGrid':
            return (
                <div className='trip-history'>
                    <h2 className='centered-title'>{block.title}</h2>
                    <Body items={block.body} />
                    <div className='photo-grid'>
                        <Image src={tripHistoryImg1} alt={`Trip replay of a ${alt} route on the map`} />
                        <Image src={tripHistoryImg2} alt='Trip history list with speed and duration details' />
                    </div>
                </div>
            )

        case 'vatReport':
            return (
                <div className='trip-reports'>
                    <h2 className='centered-title'>{block.title}</h2>
                    <Body items={block.body} />
                    <Image className='trip-report-img' src={vatReportImg} alt='Automated VAT trip report with distances and zones' />
                    {block.desc && <div className='trip-report-desc'>{block.desc}</div>}
                    <Image className='trip-zone-img' src={vatZoneImg} alt='Nautical mile zones mapped around a Greek island port' />
                </div>
            )

        case 'prose':
        default:
            return (
                <div className='section'>
                    <h2 className='centered-title'>{block.title}</h2>
                    <Body items={block.body} />
                </div>
            )
    }
}

// FAQPage structured data so the FAQ can win rich results.
function FaqJsonLd({ faq }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
        })),
    }
    return (
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

export default function UseCase({ slug }) {
    const data = findUseCase(slug)
    if (!data) return null

    const [f1, f2, f3, f4] = data.features

    return (
        <div className='product-page use-case-page'>
            <FaqJsonLd faq={data.faq} />

            <Banner
                imageDesk={bannerDesk}
                imageMob={bannerMob}
                alt={data.h1}
                title={data.h1}
            />

            <div className='device-showcase' id='sectionOne'>
                <Image src={devices} alt='The Kentall tracking platform on a laptop and a smartphone' />
            </div>

            <div className='subtitle'>{data.subtitle}</div>

            <FeatureStrip
                featureOne={f1.label}
                featureTwo={f2.label}
                featureThree={f3.label}
                featureFour={f4.label}
                featureOneIcon={ICONS[f1.icon]}
                featureTwoIcon={ICONS[f2.icon]}
                featureThreeIcon={ICONS[f3.icon]}
                featureFourIcon={ICONS[f4.icon]}
            />

            {data.blocks.map((block, i) => (
                <Block block={block} alt={data.h1} key={i} />
            ))}

            <section className='use-case-faq'>
                <h2 className='centered-title'>Frequently asked questions</h2>
                <div className='use-case-faq-list'>
                    {data.faq.map(({ q, a }) => (
                        <details className='use-case-faq-item' key={q}>
                            <summary>{q}</summary>
                            <p>{a}</p>
                        </details>
                    ))}
                </div>
            </section>

            {data.related?.length > 0 && (
                <nav className='use-case-related' aria-label='Related pages'>
                    <h2 className='centered-title'>Explore more</h2>
                    <ul>
                        {data.related.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            <div className='cta-section'>
                <h2 className='centered-title'>Want to see it on your own fleet?</h2>
                <div className='centered-paragraph'>
                    Tell us about your vessels and we will get back to you to arrange a demo and discuss your needs.
                </div>
                <a href='mailto:info@kentall-tech.com' className='btn btn-primary-black'>Contact us</a>
            </div>
        </div>
    )
}
