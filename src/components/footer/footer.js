import React from "react";
import './footer.css';
import FacebookIcon from '../../assets 2/facebook.png';
import InstagramIcon from '../../assets 2/instagram.png';
import GithubIcon from '../../assets 2/github.png'; 
import LinedinIcon from '../../assets 2/linkedin.png'

const Footer = () => {
    return (
       <section id="foter">
       <footer className="footer">
            <span className="footerTitle">Get In Touch</span>
            <div className="links">
                <img src={FacebookIcon} alt="facebook" className="link"/>
                <img src={InstagramIcon} alt="instagram" className="link"/>
                <img src={GithubIcon} alt="github" className="link"/>
                <img src={LinedinIcon} alt="linedin" className="link"/>
            </div>
            <span className="footerPara">I'm currently looking for full-time React Full Stack Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at, sinderjit339@gmail.com</span>
            {/* <span className="footerEnd">*Signing off Inderjit Singh*</span> */}
        </footer>
        </section>
    )
}

export default Footer;