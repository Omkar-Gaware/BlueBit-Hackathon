
import React, { useContext } from 'react'

import { Context } from "../../main"

import { Link } from "react-router-dom"

import { FaGithub, FaLinkedin } from "react-icons/fa"

import { SiLeetcode } from "react-icons/si"

import { RiInstagramFill } from "react-icons/ri"



function Footer() {

  const { isAuthorized } = useContext(Context)

  return (

    <footer className={isAuthorized ? "footerShow" : "footerHide"} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px' }}>

      <div>&copy; All Rights Reserved by Hackers United.</div>

    </footer>

  )

}



export default Footer





