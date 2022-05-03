import React from 'react'
import cardpic1 from '../picture/1.png'
import cardpic2 from '../picture/2.png'
import cardpic3 from '../picture/3.png'

const Card = () => {
    return (
        <section className='card'>
            <div class="card--column">
                <div><img src={cardpic1} alt="card 1" /></div>
                <p>5.0 (6) USA</p>
                <p>Life lessons from katie zafares</p>
                <p><strong>From $136</strong> / person</p>
            </div>
            <div class="card--column">
                <div><img src={cardpic2} alt="card 2" /></div>
                <p>S5.0 (6) USA</p>
                <p>Life lessons from katie zafares</p>
                <p><strong>From $136</strong> / person</p>
            </div>
            <div class="card--column">
                <div><img src={cardpic3} alt="card 3" /></div>
                <p>5.0 (6) USA</p>
                <p>Life lessons from katie zafares</p>
                <p><strong>From $136</strong> / person</p>
            </div>
        </section>
    )
}

export default Card