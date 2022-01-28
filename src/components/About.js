import React from "react";
import pic from "../pic.png";
import Particles from "react-tsparticles";
import AOS from 'aos';

export default function About() {
  
    // const particlesInit = (main) => {
    //     console.log(main);
    
    //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    //   };
    
    //   const particlesLoaded = (container) => {
    //     console.log(container);
    //   };
      AOS.init({
        // initialise with other settings
        duration : 2000
      });
    return (
        <section className="aboutsec container">
            {/* <Particles style={{zIndex:"auto"}}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 50,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 4000,
              duration: 2,
              opacity: 0.8,
              size: 700,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffce6d",
          },
          links: {
            color: "#ffce6d",
            distance: 120,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 50,
          },
          opacity: {

            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 8,
          },
        },
        detectRetina: true,
      }}  
    />*/}
   

            <div className="row g-5 introsec" id="about">
            <div className="col-md-7 d-sm-flex col-12 order-2 order-md-1">
            <div className="introdiv text-md-end text-center" data-aos="fade-left"  data-aos-duration="5000">
              
               <h1>Shubhangi Garg</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius</p>
            {/* <h2 style={{zIndex:"auto"}}>Bachelor of Technology (2018-2022)<br/>
Electronics and Communication Engineering<br/>
Indian Institute of Information Technology, Kota (MNIT Jaipur)</h2>
<p style={{zIndex:"auto"}}>A self-motivated undergraduate with ability to adapt state-of-art technologies. According to the requirements of the workflow, implemented diverse technical projects in the course. Shows utmost commitment to the task entrusted to her and puts absolute efforts into getting things done</p> */}
            </div>
            </div>
            <div className="col-md-5 col-12 order-1 order-md-2">
            <div className="picdiv right">
                <div className="circle">
                    <img src={pic} data-aos="zoom-out" alt="picture" className="pic d-block"/>
                </div>
            </div>
            </div>
            </div>
        </section>
      );
}
