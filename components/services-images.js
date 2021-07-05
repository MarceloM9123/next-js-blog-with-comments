import mstyles from '../styles.module.css'

export default function ServicesImages () {
    return (
        
        <div className={mstyles.ServicesImagesWrapper}>
            <div className={mstyles.servicesImages}>
                <img src="./videoMeeting.png" className={mstyles.servicesImage1} alt="" />
                <img src="./diagram.png" className={mstyles.servicesImage2} alt="" />
                <img src="./blackWireframe.png" className={mstyles.servicesImage3} alt="" />
            </div>
        </div>
    )
}