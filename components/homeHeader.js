import mstyles from '../styles.module.css'

export default function Header() {
    return (
        <div className={mstyles.headline}>
            <h1>Hello, 
            <br />
                <span>I am Marcelo and</span>
                <span>I’m ready to help<br className={mstyles.mbreak}/> you build a</span>website
            </h1>
            <h2>
                <span> Whether you’re building a website for </span> 
                <span>your business or if your business is a website,</span> 
                I've got you covered.
            </h2>
        </div>
    )
}