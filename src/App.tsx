import Countdown from './components/Countdown';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Transition from './components/Transition';
import Speakers from './components/Speakers';
import Sessions from './components/Sessions';
import TicketForm from './components/TicketForm';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Sponsorship from './components/SponsorShip';
import Faqs from './components/Faqs';
import Founder from './components/Founder';

function App() {


  return (
    <>
      <Navbar />
      <main className=''>
        <HeroSection />
        <Countdown />
        <Transition />
        <Speakers />
        <Sessions />
        <Founder />
        <Faqs />
        <TicketForm />
        <Partners />
        <Sponsorship />
        <Footer />
      </main>
    </>
  )
}

export default App;
