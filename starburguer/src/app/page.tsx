"use client"
import Link from "next/link";
import NavBar from "../components/NavBar";
import Image from "next/image";
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import Homepage from '../components/homePage'
import About from '../components/about'
import Footer from "@/components/footer";
export default function Home() {
 

 
 
  return (
    <div className=" ">
      <NavBar />
      <Homepage />
      <About />
      <Footer />

    </div>
  )
}
