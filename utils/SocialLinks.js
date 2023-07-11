import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {CgFacebook} from 'react-icons/cg'

export default function SocialLinks() {
  return (
    <>
       <a href='https://www.instagram.com/_tengeya/' target='_blank'>
                <FiInstagram size="30px" color="#fff"/>
            </a>
            <a href='https://www.linkedin.com/in/fred-ndemo-1b0807241/' target='_blank'>
                <FaLinkedinIn    size="30px" color="#fff"/>
            </a>
            <a href='https://twitter.com/_ndemo' target='_blank'>
                <BsTwitter size="30px" color="#fff"/>
            </a>
            <a href='https://www.facebook.com/freddie.ndemo' target='_blank'>
                <CgFacebook size="30px" color="#fff"/>
            </a>
      
    </>
  )
}
