import './App.css';
import Hero from './pages/hero'
import Payments from './pages/payments'
import Banking from './pages/banking'
import Boost from './pages/boost'
import Investing from './pages/investing'
import FooterMobile from './pages/footerMobile'

function App() {

  return (
    <>
      <div className='snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 smlap:hidden'>
        <Hero/>
        <Payments/>
        <Banking/>
        <Boost/>
        <Investing/>
      </div>
      <div className='snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 revsmlap:hidden'>
        <Hero/>
        <Payments/>
        <Banking/>
        <Boost/>
        <Investing/>
        <FooterMobile/>
      </div>
    </>
  );
}

export default App;
