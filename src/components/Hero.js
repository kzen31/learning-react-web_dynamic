import React from 'react'
import pic1 from '../picture/1.png'
import pic2 from '../picture/2.png'
import pic3 from '../picture/3.png'
import pic4 from '../picture/4.png'
import pic5 from '../picture/5.png'
import pic6 from '../picture/6.png'
import pic7 from '../picture/7.png'
import pic8 from '../picture/8.png'
import pic9 from '../picture/9.png'
import pic10 from '../picture/10.png'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero--picture'>
                <div className='hero--picture-row1'>
                    <div>
                        <img src={pic1} alt="" />
                    </div>
                </div>
                <div className='hero--picture-row2'>
                    <div>
                        <img src={pic2} alt="" />
                    </div>
                    <div>
                        <img src={pic3} alt="" />
                    </div>
                </div>
                <div className='hero--picture-row3'>
                    <div>
                        <img src={pic4} alt="" />
                    </div>
                    <div>
                        <img src={pic5} alt="" />
                    </div>
                </div>
                <div className='hero--picture-row4'>
                    <div>
                        <img src={pic10} alt="" />
                    </div>
                    <div>
                        <img src={pic6} alt="" />
                    </div>
                    <div>
                        <img src={pic7} alt="" />
                    </div>
                </div>
                <div className='hero--picture-row5'>
                    <div>
                        <img src={pic8} alt="" />
                    </div>
                    <div>
                        <img src={pic9} alt="" />
                    </div>
                </div>
            </div>
            <div className='hero--text'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero