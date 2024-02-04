import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";


const Countdown = () => {
    return (
        <section className="px-6 lg:px-12 lg:pt-24 lg:pb-20 py-10  space-y-20 bg-darker-blue">
            <div className="flex gap-6 lg:gap-6 items-center">
                <h1 className="uppercase text-3xl lg:text-6xl text-white">coming<span className="text-blue-500"> Soon</span></h1>
                <img className="w-10 h-10" src="/images/calendar.svg" alt="" />
            </div>
            <div className="flex justify-start lg:justify-center scroller">
                <FlipClockCountdown
                    className=""
                    to={new Date('2024-02-23T09:00:00')} 
                    labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                    duration={0.5}
                    digitBlockStyle={{"fontSize": "4rem", width: "7rem", height:"7rem", backgroundColor: "#010138"}}

                     />
            </div>
        </section>
    )
}

export default Countdown;