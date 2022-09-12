import {Download, Features, Button, SectionWrapper} from './components'
import assets from './assets'
import styles from './styles/Global'

<link href="/dist/output.css" rel="stylesheet"></link>

const App = () => {
  return (
    <>     
      <SectionWrapper 
      title="Your own store of Nifty NFTs Start Selling & Growing"
      description="Buy, store, collect NFTs, exchange & earn Crypto. 
      Join 25+ million people using ProNef Marketplace."
      showBtn
      mockupImg={assets.homeHero} 
      banner="banner"
      />
      <SectionWrapper 
      title="Smart user interface Marketplace"
      description="Experience a butter UI of ProfNef NFT Marketplace. 
      Smooth constant colors of a fluent UI design."      
      mockupImg={assets.homeCards} 
      reverse 
      />
      <Features/>
      <SectionWrapper 
      title="Deployment"
      description="ProfNef is built using Expo wich runs natively on all users devices. 
      You can easily get your App into people's hands."      
      mockupImg={assets.feature} 
      reverse
      />
      <SectionWrapper 
      title="Creative way to showcase the store"
      description="The app contains two screens. 
      The first screen list all NFTs while the second one shows the details of a specific NFT."      
      mockupImg={assets.mockup} 
      />
      <Download/>
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "}
          <span className="bold">
             Juan Rodrigo Vargas
          </span>
        </p>
      </div>
    </>
  );
}

export default App;
