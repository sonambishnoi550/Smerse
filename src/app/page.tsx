"use client";
import react, { useEffect } from 'react'
import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"
import Project from '@/components/Project';
const page = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Project/>
    </div>
  )
}

export default page