
import { useEffect, useRef } from 'react'
import './style.scss'
import { gsap } from "gsap";


function GridHero() {
    let gridOne = useRef<null>(null)
    let gridTwo = useRef<null>(null)
    let gridThree = useRef<null>(null)
    let gridFour = useRef<null>(null)
    let gridFive = useRef<null>(null)
    let gridSix = useRef<null>(null)
    let gridSeven = useRef<null>(null)
    let gridEight = useRef<null>(null)
    let tl = gsap.timeline()
    useEffect(() => {
        tl.to(gridOne.current, { background: 'transparent', duration: 0.5 }, 0.5).to(gridTwo.current, { background: 'transparent', duration: 0.5 }, 0.6).to(gridThree.current, { background: 'transparent', duration: 0.5 }, 0.7).to(gridFour.current, { background: 'transparent', duration: 0.5 }, 0.8).to(gridFive.current, { background: 'transparent', duration: 0.5 }, 0.9).to(gridSix.current, { background: 'transparent', duration: 0.5 }, 1).to(gridSeven.current, { background: 'transparent', duration: 0.5 }, 1.1).to(gridEight.current, { background: 'transparent', duration: 0.5 }, 1.2)
    }, [tl])

    return (
        <div className='grid' ><span className='grid-one' ref={gridOne}></span><span className='grid-two' ref={gridTwo}></span><span className='grid-three' ref={gridThree}></span ><span className='grid-four' ref={gridFour}></span><span className='grid-five' ref={gridFive}></span><span className='grid-six' ref={gridSix}></span><span className='grid-seven' ref={gridSeven}></span><span className='grid-eight' ref={gridEight}></span></div>
    )
}

export default GridHero