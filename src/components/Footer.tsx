import { div } from 'framer-motion/client'
import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6'


const Footer = () => {
  return (
    <footer>
    <div className="footer-col">
<h4>products</h4>
<ul>
    <li><a href="#">teams</a></li>
    <li><a href="#">advertising</a></li>
    <li><a href="#">talent</a></li>
</ul>
    </div>

    <div className="footer-col">
<h4>network</h4>
<ul>
    <li><a href="#">technology</a></li>
    <li><a href="#">professional</a></li>
    <li><a href="#">business</a></li>
    <li><a href="#">API</a></li>
</ul>
    </div>

    <div className="footer-col">
<h4>company</h4>
<ul>
    <li><a href="#">about</a></li>
    <li><a href="#">legal</a></li>
    <li><a href="#">contact us</a></li>
</ul>
    </div>
    <div className="footer-col">
<h4>company</h4>
<ul>
    <li><a href="#">about</a></li>
    <li><a href="#">legal</a></li>
    <li><a href="#">contact us</a></li>
</ul>
    </div>

    <div className="footer-col">

<h4>follow us</h4>

    <div className="links">
        <a href="https://www.linkedin.com/in/jawad-shoukat-7b6a642b5/" className='text-center items-center mt-8'>< FaLinkedin size={30}/></a>
        <a href="#">< FaInstagram size={30}/></a>
        <a href="#">< FaTwitter size={30}/></a>
        <a href="#">< FaFacebook size={30}/></a>

    </div>
    </div>
    
</footer>  

  )
}

export default Footer
