import React from "react";
import './intro.css';
import bg from '../../assets 2/image1.png';
import btnImg from '../../assets 2/hireme.png';
import { Link } from 'react-scroll';


const Intro = () => {
    return (
       <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText"> I'm <span className="introName"> Inder </span> <br/> Full Stack Developer </span> 
            <p className="introPara"> I'm enthusiactic Full Stack Developer, <br/> creating visually appealing and user friendly websites. </p>
            {/* <Link><btn className="btn"><img src={btnImg} alt="hire me" className="btnImg"/>Hire me</btn></Link> */}
        </div>
        <img src={bg} alt="profile" className="bg"/>
       </section>
    )
}

export default Intro;