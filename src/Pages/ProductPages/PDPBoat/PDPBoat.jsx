import React from 'react'
import Banner from '../../../components/PDP Components/Banner/Banner'
import Spacer from '../../../components/Spacer/Spacer'
import FeatureStrip from '../../../components/PDP Components/Feature Strip/FeatureStrip'
import BodyBanner from '../../../components/PDP Components/BodyBanner/BodyBanner'

import './PDPBoat.css'

import boatImg_mob from '../../../assets/Product Pages/pdp_boat_banner-mob.png'
import boatImg_desk from '../../../assets/Product Pages/pdp_boat_banner.png'
import devices from '../../../assets/laptop-phone-v2.png'
import featureOneImg from '../../../assets/icons/dashboard.png'
import featureTwoImg from '../../../assets/icons/live-map.png'
import featureThreeImg from '../../../assets/icons/trip-history.png'
import featureFourImg from '../../../assets/icons/geo-zones.png'

import fleetMap from '../../../assets/Product Pages/fleet-map.png'

import mapBefore from '../../../assets/Product Pages/map_before.png'
import mapAfter from '../../../assets/Product Pages/map_after.png'

import iconActiveAsset from '../../../assets/icons/active-asset.png'
import iconStationaryAsset from '../../../assets/icons/stationary-asset.png'
import iconLastActiveAsset from '../../../assets/icons/last-active.png'
import iconDisconnectedAsset from '../../../assets/icons/disconnected-cloud.png'

import bodyBannerOneDesk from '../../../assets/Product Pages/pdp_boat_mid-banner.png'
import bodyBannerOneMob from '../../../assets/Product Pages/pdp_boat_mid-banner-mob.png'
import tripReportImg from '../../../assets/trip-report 1.png'
import tripHistoryImg1 from '../../../assets/triphistory1.png'
import tripHistoryImg2 from '../../../assets/triphistory2.png'
import tripReportImg1 from '../../../assets/tripreport1.png'
import tripZoneImg1 from '../../../assets/tripzone.png'
import { ImgComparisonSlider } from '@img-comparison-slider/react';

function PDPBoat() {

    return (
        <div className="product-page">    
            {/* {window.scrollTo(0, 0)} */}
            <Banner 
                imageDesk={boatImg_desk}
                imageMob={boatImg_mob}
            />
            <div className="device-showcase" id="sectionOne">
                <img src={devices} alt="service"/>
            </div>
            <div className="subtitle" > 
                Enjoy real-time tracking, customizable reports, and geo-fenced safety alerts, accessible from any web-enabled device. 
            </div>
            <FeatureStrip 
                featureOne='professional web platform'
                featureTwo='real-time map tracking'
                featureThree='6 months trip history'
                featureFour='Custom VAT Reports'

                featureOneImg={featureOneImg}
                featureTwoImg={featureTwoImg}
                featureThreeImg={featureThreeImg}
                featureFourImg={featureFourImg}
                />

                <div className="section">
                    <div className="centered-title">Professional Web Platform</div>
                    <div className="centered-paragraph">
                        Have your entire fleet at the tip of your fingers. User our advanced online platform that can be accessed by a laptop, PC, Android and iPhone. 
                        <br/>
                        The design is crafted to be easy to navigate and to show all the needed information that is needed for your asset or fleet.
                        <br/><br/>
                        Pair the amazing platform experience with one of our KEN-M devices or let us set up your own device. We support 95% of the devices that are currently on the market. That way you can enjoy all the features our platform has to offer without having to install a new device on your boat.
                    </div>
                </div>

                <BodyBanner desktop={bodyBannerOneDesk} mobile={bodyBannerOneMob} /> 
                <Spacer />
                <div className="section">
                    <div className="centered-title">See your whole fleet live on the map</div>
                    <div className="centered-paragraph">
                        You can view your entire fleet at any moment, and also get info about all your assets and their status.
                        <br />

                        See the speed, the connection status and the course of all the assets at a glance.

                        <br /> 
                        For more detailed information about a specific asset, click on it either on the map or on the list. 

                    </div>
                </div>

                <div className="image-container">
                    <img className="screenshot" src={fleetMap} alt="browser window with whole fleet" />
                    <div className="section big-features">

                        <div className="features-title">
                            Real-time status
                        </div>
                        <div className="feature">
                            <div className="feature--icon">
                                <img src={iconActiveAsset} alt="" />
                            </div>
                            <div className="feature--text">
                                Moving
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature--icon">
                                <img src={iconStationaryAsset} alt="" />
                            </div>
                            <div className="feature--text">
                                Stationary
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature--icon">
                                <img src={iconLastActiveAsset} alt="" />
                            </div>
                            <div className="feature--text">
                                Last report
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature--icon">
                                <img src={iconDisconnectedAsset} alt="" />
                            </div>
                            <div className="feature--text">
                                Disconnected
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="map-showcase">
                    <div className="centered-title">
                        Select the type of map<br/> you prefer.
                    </div>
                    <div className="map">

                        <ImgComparisonSlider hover="hover">
                            <img slot="first" className="compareImg" src={mapBefore} alt="map style 1" />
                            <img slot="second" className="compareImg" src={mapAfter} alt="map style 2" />
                        </ImgComparisonSlider>
                    </div>
                    
                    <div className="centered-title">
                    Get automated <br/> trip reports in your email.
                    </div>

                    <img className="overlay-img" src={tripReportImg} alt="Trip Report Doc" />
                </div>

                <div className="trip-history">
                    <div className="centered-title">
                        Trip History
                    </div>
                    <div className="centered-paragraph">
                    With Trip Replay you can view your assets’ past trips for up to 6 months. 
                    This is perfect to confirm the route a client followed or to inspect if the asset has been close to dangerous zones.
                    Valuable information is shown for each step of the trip, like speed, coordinates and engine status*.
                    </div>
                    <div className="photo-grid">
                        <img src={tripHistoryImg1} alt="Trip History 1" />
                        <img src={tripHistoryImg2} alt="Trip History 2" />
                    </div>
                </div>

                <div className="trip-reports">
                    <div className="centered-title">Automated Trip Reports</div>
                    <div className="centered-paragraph">
                        Get a weekly email of your fleet’s trips in a Report specifically designed to be used in compliance with Greek VAT Laws about sailboats and boats.
                        <br/>
                        This report can be setup to be created every week for each asset and then automatically sent out to your e-mail to provide a clear view of each trip with data required by the Greek law,
                        <br/>
                        making it easy to submit for VAT purposes.
                    </div>

                    <img className="trip-report-img" src={tripReportImg1} alt="Trip Report Data" />

                    <div className="trip-report-desc">
                        Every island with a major port base is mapped out specifically for this purpose.
                        <br/>
                        <br/>
                        That way our platform can calculate the percentage of the trip that was spent inside the nautical miles specified by the government and the percentage that was spent outside of this zone. 
                        <br/>
                        <br/>
                        Therefore the automated trip report calculates all the needed information that would otherwise need to be done by hand using coordinates and estimates.
                    </div>
                    <img className="trip-zone-img" src={tripZoneImg1} alt="Trip Zones on Map" />
                </div>
                
                <div className="cta-section">
                    <div className="centered-title">
                        Already have a GPS Tracker device installed? No problem.
                    </div>
                    <div className="centered-paragraph">
                    Our Advanced Tracking Platform is compatible with <br/>
                    90% of the tracking devicesthat are currently in the market.<br/>
                    Feel free to contact us to learn more and arrange a meeting.
                    </div>
                    <a href="mailto:info@kentall-tech.com" className='btn btn-primary-black'>Contact us</a>
                </div>
        </div>
    )
}

export default PDPBoat