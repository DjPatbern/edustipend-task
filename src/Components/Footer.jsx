import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from "react-icons/ai"
import {RiPlayListFill} from "react-icons/ri"
import {BiTrendingUp} from "react-icons/bi"

const Footer = () => {
  return (
    <div className='phone-footer'>
      <Link  to="/" className='phonenav-link'><AiOutlineHome /></Link>
      <Link  to="/playlist" className='phonenav-link'><RiPlayListFill /></Link>
      <Link  to="/trending" className='phonenav-link'><BiTrendingUp /></Link>
    </div>
  )
}

export default Footer
