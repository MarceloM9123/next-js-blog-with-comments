import mstyles from '../styles.module.css'

export default function EcomSection () {
    return (
        <div className={mstyles.ecomSection}>

            <div className={mstyles.ecomSectionWrapper}>
                <h2> 
                    <span>Add e-commerce to your</span>  
                    <span> website</span>
                </h2>
                
                <h3>
                    <span>Let your customers shop online for your products</span>
                    <span> and services.   Give your customers the option to</span>
                    <span> buy from you at their convenience.</span>
                    
                </h3>
            
            </div>

            <div>
                <img src="./ezgif.com-gif-maker (1).gif" alt="" />
            </div>
        </div>
    )    
}