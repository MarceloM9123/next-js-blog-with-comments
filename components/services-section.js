import mstyles from '../styles.module.css'
import Header from './homeHeader'

export default function ServicesSection () {
    return (
        <div className={mstyles.services}>
            <h1>
                <span>Let’s start <br /> building</span>
                <span> based on your</span> 
                <span> business needs.</span>
            </h1>

            <h2>
                <span>We can create your vision and <br /> work together</span>
                <span> to discover what <br /> will help you the most.</span>
            </h2>
        </div>
    )
}