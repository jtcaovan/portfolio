import React from 'react'
import {javascript, html, css, react, redux, gatsby, tailwind, webpack, vscode, graphql, git, npm, heroku, netlify} from '../images/icons'
// import { motion, useViewportScroll, useTransform } from "framer-motion"

const About = () => {
// const typescript = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px"><path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z"/></svg>
    return (
        <div className ="flex flex-col items-center bg-bg-blue text-white h-screen w-full">
            <div  className='w-1/2'>
                <h1 className='font-display text-4xl'>About Me</h1>
                <p className='font-body'>I'm a self-taught Front-end developer based in Phoenix, Arizona 
                I'm a self-taught Front-end developer based in Phoenix, Arizona
                I'm a self-taught Front-end developer based in Phoenix, Arizona
                I'm a self-taught Front-end developer based in Phoenix, Arizona
                I'm a self-taught Front-end developer based in Phoenix, Arizona
                I'm a self-taught Front-end developer based in Phoenix, Arizona</p>
            </div>

            <div className='flex'>
                <div>
                    <h2>Technologies</h2>
                    <ul>
                        <li>{html} HTML5</li>
                        <li>{css} CSS3</li>
                        <li>{javascript}Javascript</li>
                        <li>{react}React</li>
                        <li>{redux}Redux</li>
                        <li>{gatsby}Gatsby</li>
                        <li>{tailwind}Tailwind CSS</li>
                    </ul>
                </div>
                <div>
                    <h2>Tools</h2>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <h2>Misc</h2>
                    <ul>
                        <li>{git}Git</li>
                        <li>{vscode}VS Code</li>
                        <li>{heroku}Heroku</li>
                        <li>{netlify}Netlify</li>
                        <li>{webpack}Webpack</li>
                        <li>{graphql}GraphQL</li>
                        <li>{npm}npm</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About