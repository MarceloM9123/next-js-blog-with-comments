import mstyles from '../styles.module.css'

export default function HeroHome () {
    return (
        <div className={mstyles.framewrapper}>   
         
            <div className={mstyles.frames}>
                <div className={mstyles.tablet}>
                    <img src="/freewebsite3.png"  alt="" />
                </div>
                
                <div className={mstyles.laptop}>
                    <img src="/freewebsite1.png"  alt="" />
                </div>
                
                <div className={mstyles.mobile}>
                    <img src="/freewebsite2.png"  alt="" />
                </div>
            </div>

        </div>
    )
}