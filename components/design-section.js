import mstyles from '../styles.module.css'

export default function DesignSection () {
    return (
        <div className={mstyles.designSection}>
            <div className={mstyles.designSectionWrapper}>
                <h1>
                    <span>Update your design<br className={mstyles.designSectionBreak} /> or</span>
                    <span> build new<br className={mstyles.designSectionBreak} /> features</span>   
                </h1>
                
                <h2>
                    <span>Make the changes<br className={mstyles.designSectionBreak} /> you can’t make<br className={mstyles.designSectionBreak} /> with a</span>
                    <span> ‘no-code’ builder.</span>   
                </h2>
                
                <div className={mstyles.designImgWrapper}>
                    <img src="./websiteDesign.png" alt="" />
                </div>

                <h3>
                    <span>Get more from your website<br className={mstyles.designSectionBreak} /> with a</span>
                    <span> unique design</span>
                </h3>
            </div>
        </div>
    )
}