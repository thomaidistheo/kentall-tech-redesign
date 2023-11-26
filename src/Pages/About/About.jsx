import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle'
import Services from '../../components/Services/Services'
import {
  useLocation
} from "react-router-dom"
import { useEffect } from "react";

import './about.css'

import laptopMap from '../../assets/laptop.png'

export default function About() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
        <div className="landing-page">
          <PageTitle title="About Kental Tech Ltd." />
          <div className="about-banner">
            <div className="img-cont">
              <img src={laptopMap} alt="laptop with platform" />
            </div>
            <div className="text-cont">
              <div>The most advanced Fleet Management</div>
              <div>Available for PC, iPhone & Android</div>
              <div>Feature rich for every tracking need</div>
            </div>
          </div>
          <Services />
        </div>
    </div>
  )
}