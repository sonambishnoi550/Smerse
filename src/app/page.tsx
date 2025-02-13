"use client";
import react, { useEffect } from 'react'
import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"
import Project from '@/components/Project';
import Vision from '@/components/Vision';
const page = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Vision/>
      <Project/>
    </div>
  )
}

export default page