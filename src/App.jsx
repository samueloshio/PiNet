import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & and earn crypt. Join 25+ million peple using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a battery UI of ProNet NFT Marketplace. Smoth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNet is built using Expo which runs natively on all users' devices. You can easily get yur app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store."
        description="The app contains two screens. The first screen list all NFTs while the second one shows the details of a specific NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="banner04 flex-col items-center justify-center bg-primary py-4 px-4 text-center">
        <p className={`${styles.pText} ${styles.white}`}>
          Made with love by <span className="bold">Samuel Oshio</span>
        </p>
      </div>
    </>
  );
};

export default App;
