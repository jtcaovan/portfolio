import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import {javascript, html, css, react, redux, gatsby, tailwind, webpack, framer, npm, heroku, netlify} from '../../images/icons'

function Skills() {
    const animation = useAnimation()
    const {ref, inView} = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        }
    }, [inView])

    const header = {
        visible: {
            y: 0, opacity: 1,
            transition: {
                staggerChildren: .15,
                delayChildren: .1, 
                duration: 1,
            }
        },
        hidden: {
            y: '5vw', opacity: 0
        }
    }

    const icons = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        hidden: {
            opacity: 0
        }
    }

    return(
        <div ref={ref} className='flex flex-col max-w-6xl lg:flex-row space-y-8 lg:space-y-0 
            w-3/4 py-12 lg:py-24 m-auto my-0 lg:m-auto lg:my-4'>
            <div className='w-full text-center lg:text-left lg:w-1/4'>
                <motion.h1 initial='hidden' animate={animation} variants={header} className='font-display text-4xl'>
                    Skills
                </motion.h1>
            </div>

            <div className='flex flex-col w-full text-center lg:w-3/4 space-y-24'>
                <div className='font-body lg:text-lg leading-loose lg:leading-loose text-center lg:text-left'>
                    <motion.p initial='hidden' animate={animation} variants={header}>
                        Experience in building modern web applications and user interface components using React.js, Javascript (ES6), HTML3, and CSS3.
                        Currently learning Node.js, Express.js, and MongoDB to connect backend functionality to future applications.
                    </motion.p>
                </div>
                <div className='flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 lg:divide-x divide-opacity-30 divide-graphite text-center justify-between'>
                    <motion.div className='w-full lg:w-1/2'           
                        initial='hidden'
                        animate={animation}
                        variants={header}>
                        <motion.h2 variants={header} className='font-display text-lg'>Languages and Frameworks</motion.h2>
                        <motion.ul variants={header} className='grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14'>
                            <motion.li variants={icons} className='icon'>{html} HTML5</motion.li>
                            <motion.li variants={icons} className='icon'>{css} CSS3</motion.li>
                            <motion.li variants={icons} className='icon'>{javascript}JavaScript</motion.li>
                            <motion.li variants={icons} className='icon'>{react}React</motion.li>
                            <motion.li variants={icons} className='icon'>{gatsby}Gatsby</motion.li>
                            <motion.li variants={icons} className='icon'>{tailwind}Tailwind</motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div className='w-full lg:w-1/2'
                            initial='hidden'
                            animate={animation}
                            variants={header}>
                        <motion.h2 variants={header} className='font-display text-lg'>Development Tools</motion.h2>
                        <motion.ul variants={header} className='grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14'>
                            <motion.li variants={icons} className='icon'>{redux}Redux</motion.li>
                            <motion.li variants={icons} className='icon'>{webpack}Webpack</motion.li>
                            <motion.li variants={icons} className='icon'>{framer}Framer</motion.li>
                            <motion.li variants={icons} className='icon'>{heroku}Heroku</motion.li>
                            <motion.li variants={icons} className='icon'>{netlify}Netlify</motion.li>
                            <motion.li variants={icons} className='icon'>{npm}npm</motion.li>
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Skills