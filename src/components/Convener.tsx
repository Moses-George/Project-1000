


const Convener = () => {

    return (
        <section className="bg-blue-900 px-6 lg:px-12 py-10 flex flex-col lg:flex-row justify-between gap-10 items-center leading-tight">
            <div className="">
                <h1 className="text-4xl text-center lg:text-5xl text-white"><span className="text-blue-300 ">Convener</span> Of Project 1000</h1>
            </div>
            <div className="bg-[rgba(0,0,0,0.35)] shadow-xl rounded-lg w-fit p- space-y-4 h-fit lg:-mt-24">
                <div className="w-full bg-blue-200">
                    <img className="w-[23rem] h-[22rem]" src="/images/convener.jpg" />
                </div>
                <div className="p-4 w-80">
                    <h2 className="text-3xl text-white">Ifeanyi Godfrey</h2>
                    <p className="text-lg text-gray-300">Founder and Convener of Project 1000</p>
                </div>
            </div>
        </section>
    )
}

export default Convener;