'use client'

import React from 'react'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Banner from '../../../components/PDP Components/Banner/Banner'
import Spacer from '../../../components/Spacer/Spacer'
import FeatureStrip from '../../../components/PDP Components/Feature Strip/FeatureStrip'
import BodyBanner from '../../../components/PDP Components/BodyBanner/BodyBanner'
import AssetStatusLegend from '../../../components/PDP Components/AssetStatusLegend/AssetStatusLegend'
import {
    ComputerDesktopIcon,
    MapIcon,
    ClockIcon,
    BellAlertIcon,
} from '@heroicons/react/24/outline'

import './PDPMoto.scss'

import motoImg_mob from '../../../assets/Product Pages/pdp_moto_banner-mob.png'
import motoImg_desk from '../../../assets/Product Pages/pdp_moto_banner.png'
import devices from '../../../assets/laptop-phone-v3.png'

import fleetMap from '../../../assets/Product Pages/moto-map.png'

import bodyBannerOneDesk from '../../../assets/Product Pages/pdp_moto_mid-banner.png'
import bodyBannerOneMob from '../../../assets/Product Pages/pdp_moto_mid-banner-mob.png'
import tripHistoryImg1 from '../../../assets/Product Pages/moto_trip.png'
import tripHistoryImg2 from '../../../assets/Product Pages/moto-demos/IMG_1067.png'
import mobileNotificationImg1 from '../../../assets/Product Pages/mobile_notif_1.png'
import mobileNotificationImg2 from '../../../assets/Product Pages/mobile_notif_2.png'

import carouselPhoto1 from '../../../assets/Product Pages/moto-demos/IMG_1065.png'
import carouselPhoto2 from '../../../assets/Product Pages/moto-demos/IMG_1066.png'
import carouselPhoto3 from '../../../assets/Product Pages/moto-demos/IMG_1067.png'
import carouselPhoto5 from '../../../assets/Product Pages/moto-demos/IMG_1069.png'
import carouselPhoto6 from '../../../assets/Product Pages/moto-demos/IMG_1070.png'
import carouselPhoto7 from '../../../assets/Product Pages/moto-demos/IMG_1071.png'


function PDPMoto() {

    const [photos] = useState([
        carouselPhoto1,
        carouselPhoto2,
        carouselPhoto3,
        // carouselPhoto4,
        carouselPhoto5,
        carouselPhoto6,
        carouselPhoto7,
    ]);

    const listRef = useRef(null);
    const isDragging = useRef(false);
    const startPosition = useRef(0);
    const currentTranslate = useRef(0);
    
    useEffect(() => {
        const list = listRef.current;
        const listContent = Array.from(list.children);

        listContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            list.appendChild(duplicatedItem);
        });

        const handleMouseDown = (event) => {
            isDragging.current = true;
            startPosition.current = event.clientX - currentTranslate.current;
        };

        const handleMouseMove = (event) => {
            if (isDragging.current) {
            const newPosition = event.clientX - startPosition.current;
            list.style.transform = `translateX(${newPosition}px)`;
            currentTranslate.current = newPosition;
            }
        };

        const handleTouchStart = (event) => {
            isDragging.current = true;
            startPosition.current = event.touches[0].clientX - currentTranslate.current;
        };
        
        const handleTouchMove = (event) => {
            if (isDragging.current) {
                const newPosition = event.touches[0].clientX - startPosition.current;
                list.style.transform = `translateX(${newPosition}px)`;
                currentTranslate.current = newPosition;
            }
        };
    
        const handleTouchEnd = () => {
            isDragging.current = false;
        };

        const handleMouseUp = () => {
            isDragging.current = false;
        };

        list.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        list.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            list.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);

            list.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div className="product-page">    
            <Banner 
                imageDesk={motoImg_desk}
                imageMob={motoImg_mob}
                alt="Motorcycle tracked with KentallTech GPS"
                title="Motorcycle GPS Tracking"
            />
            <div className="demo-carousel"></div>
            <div className="device-showcase" id="sectionOne">
                <Image src={devices} alt="The Kentall tracking platform on a laptop and a smartphone"/>
            </div>
            <div className="subtitle" > 
                Enjoy real-time tracking, customizable reports, and geo-fenced safety alerts, accessible from any web-enabled device. 
            </div>
            <FeatureStrip 
                featureOne='professional web platform'
                featureTwo='real-time map tracking'
                featureThree='6 months trip history'
                featureFour='location alerts'

                featureOneIcon={<ComputerDesktopIcon />}
                featureTwoIcon={<MapIcon />}
                featureThreeIcon={<ClockIcon />}
                featureFourIcon={<BellAlertIcon />}
                />
                <div className="section">
                    <h2 className="centered-title">Professional Web Platform</h2>
                    <div className="centered-paragraph">
                    Have your entire fleet at the tip of your fingers. Use our advanced online platform that can be accessed by a laptop, PC, Android and iPhone. The design is crafted to be easy to navigate and to show all the needed information that is needed for your asset or fleet.
                        <br/>
                        Pair the amazing platform experience with one of our KEN-M devices or let us set up your own device. We support 95% of the devices that are currently on the market. That way you can enjoy all the features our platform has to offer without having to install a new device on your motorcycle.
                    </div>
                </div>

                {/* <div className="img-grid">
                    <div className="big-img"></div>
                    <div className="small-img-col">
                        <div className="image-one"></div>
                        <div className="image-two"></div>
                    </div>
                </div> */}
                <BodyBanner desktop={bodyBannerOneDesk} mobile={bodyBannerOneMob} /> 
                <Spacer />
                <div className="section">
                    <h2 className="centered-title">See your bike live on the map from your phone or computer</h2>
                    <div className="centered-paragraph">
                        You can check where your bike is at any time through your phone or computer.
                        <br />
                        Set speed alerts and geo-location alerts based on your preferred regions 
                        <br/> 
                        and get notified of any suspicious activity.
                        <br /> 
                        Check past trips with accurate data on the map, speed limit violations, average speed and trip distance.

                    </div>
                </div>

                <div className="image-container">  
                    <Image className="screenshot" src={fleetMap} alt="Live map showing a tracked motorcycle and its status" />
                    <AssetStatusLegend />
                </div>
                
                {/* <div className="map-showcase">
                    <h2 className="centered-title">
                        Select the type of map<br/> you prefer.
                    </h2>
                    <div className="map">

                        <ImgComparisonSlider hover="hover">
                            <Image slot="first" className="compareImg" src={mapBefore} alt="map style 1" />
                            <Image slot="second" className="compareImg" src={mapAfter} alt="map style 2" />
                        </ImgComparisonSlider>
                    </div>
                    
                    <h2 className="centered-title">
                    Get automated <br/> trip reports in your email.
                    </h2>

                    <Image className="overlay-img" src={tripReportImg} alt="Trip Report Doc" />
                </div> */}
                <Spacer />

                <div className="mobile-notifications">
                    <h2 className="centered-title">
                        Set up alerts for specific locations and other triggers
                    </h2>
                    <div className="centered-paragraph">
                        Get notified when your bike enters or leaves a specific location radius. 
                        An email with the information of the location will be sent to your phone.
                    </div>
                    <div className="photo-grid">
                        <Image src={mobileNotificationImg1} alt="Location alert notification on a smartphone" />
                        <Image src={mobileNotificationImg2} alt="Email alert with the motorcycle location details" />
                    </div>
                </div>

                <Spacer />

                <div className="trip-history">
                    <h2 className="centered-title">
                        Trip History
                    </h2>
                    <div className="centered-paragraph">
                    With Trip Replay you can view your assets’ past trips for up to 6 months. 
                    This is perfect to confirm the route a client followed or to inspect if the asset has been close to dangerous zones.
                    Valuable information is shown for each step of the trip, like speed, coordinates and engine status*.
                    </div>
                    <div className="photo-grid">
                        <Image className="big-img" src={tripHistoryImg1} alt="Trip replay of a motorcycle route on the map" />
                        <Image className="small-img" src={tripHistoryImg2} alt="Trip history details on the mobile web app" />
                    </div>
                </div>

                <Spacer />

                <div className="carousel-section">
                    <h2 className="centered-title">
                        Full Fledged Mobile Web App
                    </h2>
                    <div className="carousel-cont" data-animated>
                        <ul ref={listRef} id="list">
                            {photos.map((photo, index) => (
                            <li key={index}>
                                <Image src={photo} alt={`Mobile web app screen ${index + 1}`} draggable="false"/>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Spacer />
                
                <div className="cta-section">
                    <h2 className="centered-title">
                        Already have a GPS Tracker device installed? No problem.
                    </h2>
                    <div className="centered-paragraph">
                    Our Advanced Tracking Platform is compatible with <br/>
                    95% of the tracking devicesthat are currently in the market.<br/>
                    Feel free to contact us to learn more and arrange a meeting.
                    </div>
                    <a href="mailto:info@kentall-tech.com" className='btn btn-primary-black'>Contact us</a>
                </div>
        </div>
    )
}

export default PDPMoto