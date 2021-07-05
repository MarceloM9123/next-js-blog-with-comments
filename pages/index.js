import mstyles from '../styles.module.css'
import Header from '../components/homeHeader'
import HeroHome from '../components/hero-home'
import ServicesSection from '../components/services-section'
import ServicesImages from '../components/services-images'
import DesignSection from '../components/design-section'
import DevelopmentSection from '../components/development-section'
import EcomSection from '../components/ecom-section'

export default function Index() {
  return (
    <div >
      
      <Header/>
      
      <div>
        <HeroHome/>
      </div>
      
      <div className={mstyles.servicesContainer}>
        
        <div>
          <ServicesSection/>
        </div>
        
        <div>
          <ServicesImages/>
        </div>

      </div>

      <div>

        <div>
          <DesignSection />
        </div>

      </div>

      <div>

        <div>
          <DevelopmentSection />
        </div>

      </div>

      <div>

        <div>
          <EcomSection />
        </div>

      </div>

    </div>
  )
}


