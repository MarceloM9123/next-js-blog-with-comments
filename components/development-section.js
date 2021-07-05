import mstyles from '../styles.module.css'

export default function DevelopmentSection () {
    return (
        <div className={mstyles.developmentSection}>
            <div className={mstyles.developmentSectionWrapper}>
                <h2>
                <span>I can write custom code and</span>
                <span> <br className={mstyles.developmentSectionBreak} /> I can work with various</span> tools.
                </h2>
                
                <h3>
                <span>I am familiar with a variety of programming</span>   
                <span> languages and digital tools.  I can build </span> 
                <span>your website with the features and specifications </span>  
                      that best fit your needs.
                </h3>
                
                <div className={mstyles.devSectionFrame}>
                    <img src="./codeImage.png" alt="" />
                    <img src="./digitalToolImage.png" alt="" />
                </div>
            </div>
        </div>
    )
}