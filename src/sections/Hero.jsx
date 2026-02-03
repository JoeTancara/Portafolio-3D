import React from 'react'
import { words } from '../constants/index.js'
import Button from '../componentes/Button.jsx'
import HeroExperience from '../componentes/HeroModels/HeroExperience.jsx'   

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import AnimatedCounter from '../componentes/AnimatedCounter.jsx';


const Hero = () => {

    useGSAP(() => {
        gsap.fromTo('.hero-text h2',
        {
            y:50,
            opacity:0
        },
        {
            y:0,
            opacity:1,
            stagger:0.3,
            duration:5,
            ease: 'power2.inOut'
        },
        )
        })


  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="fondo" />
        </div>

        <div className='hero-layout'>
            {/* Contenido del Hero left*/}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h2>Desarrollador de 
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.text} className='flex items-center md:gap-3 gap-1 pd-2'>
                                        <img 
                                            src={word.imgPath} 
                                            alt={word.text} 
                                            className="xl:size-8 md:size-12 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                        />
                                        <span>
                                            {word.text}
                                        </span>
                                        </span>
                                    ))}
                                </span>
                            </span>    
                        </h2>
                        <h2>Forence Digital</h2>
                        <h2>Seguridad Informática</h2>
                        <h2>Soporte TI</h2>   
                    </div>
                <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                Informatico especializado en desarrollo de software, seguridad informática y soporte técnico. 
                </p>
                <Button 
                    id="button"
                    text="Ver Proyectos"
                    className="md:w-80 md:h-16 w-60 h-12"
                />  
                </div>

            </header>

            {/* Contenido del Hero right*/}

            <figure>
                <div className='hero-3d-layout'>
                    <HeroExperience />
                </div>                
            </figure>
        </div>
        <AnimatedCounter />
    </section>
  )
}

export default Hero