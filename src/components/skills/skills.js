import React from "react";
import './skills.css';
import UIDesign from '../../assets 2/ui-design.png';
import WebDesign from '../../assets 2/website-design.png';
import AppDesign from '../../assets 2/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">About Me</span>
            <span className="skillDesc">My name is Inderjit Singh. I’m a under-graduate of 2021 from MCKV Institute Of Engineering at Kolkata with a degree in B.Tech of Automobile Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of Full Stack Developer. I'm proficient in HTML, CSS, Javascript, React & Node.js</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="uidesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>React</h2>
                        <p></p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="webdesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Node.js</h2>
                        <p></p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="appdesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>MongoDB</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;