import Countdown from './components/Countdown';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Transition from './components/Transition';
import Guests from './components/Guests';
import Sessions from './components/Sessions';
import TicketPurchase from './components/TicketPurchase';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Sponsorship from './components/SponsorShip';
import Faqs from './components/Faqs';
// import Convener from './components/Convener';
import TicketDetails from './components/TicketDetails';
import { chats, faciliators, speakers } from './utils/data';
// import { useEffect, useState } from 'react';

function App() {

  // const [isAtTop, setIsAtTop] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = document.getElementById("root");
  //     const rect = element?.getBoundingClientRect();
  //     setIsAtTop(rect?.top === 0);
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const scrollToTOP = () => {
    window.scrollTo(0, 0);
  };


  return (
    <>
      <Navbar />
      <div id='top'></div>
      <main className=''>
        <HeroSection />
        <Countdown />
        <Transition />
        <TicketDetails />
        <Guests key="facilitators" heading="Facilitators" href='facilitators' data={faciliators} />
        <Guests key="speakers" heading='Speakers' href='speakers' data={speakers} />
        <Guests key="chat" heading='Fireside Chat Guests' href='chat' data={chats} />
        <Sessions />
        {/* <Convener /> */}
        <Faqs />
        <TicketPurchase />
        <Partners />
        <Sponsorship />
        <Footer />
      </main>
      {/* {!isAtTop &&  */}
      <div onClick={scrollToTOP} className='fixed bottom-6 right-6 px-4 py-4 bg-yellow-600 rounded-tr-4xl rounded-tl-full rounded-b-full'>
        <div className='animate-bounce w-fit'>
          <img className='rotate-[90deg] h-4' src='/images/arrow.svg' alt='' />
        </div>
      </div>
      {/* } */}
    </>
  )
}

export default App;
