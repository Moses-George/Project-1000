


const Founder = () => {

    return (
        <section className="bg-blue-900 px-6 lg:px-20 py-10 flex flex-col lg:flex-row justify-between gap-10 items-center leading-tight">
            <div className="">
                <h1 className="text-4xl lg:text-6xl text-white"><span className="text-blue-300 ">Founder</span> and CTO - Project 1000</h1>
            </div>
            <div className="bg-[rgba(0,0,0,0.35)] rounded-lg w-fit p- space-y-4 h-fit lg:-mt-24">
                <div className="p-2 w-full bg-blue-200">
                    <img className="w-full h-60" src="/images/faith.png" />
                </div>
                <div className="p-4 w-80">
                    <h2 className="text-3xl text-white">Faith Aziegbemi</h2>
                    <p className="text-lg text-gray-300">Founder and CTO of project 1000</p>
                </div>
            </div>
        </section>
    )
}

export default Founder;