


const Sponsorship = () => {

    return (
        <section className="px-6 py-10 lg:p-20 bg-blue-700 text-center space-y-8 hover:opacity-85">
            <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold uppercase text-white">Sponsor<span className="text-blue-950">ship</span>/</h1>
                <h1 className="text-4xl lg:text-6xl font-bold uppercase text-white">Partner<span className="text-blue-950">ship</span></h1>
                <p className="text-xl lg:text-3xl text-white font-medium">Would you like to sponsor or partner with us ?</p>
            </div>
            <div className="text-xl text-white font-medium border-gray-200 border-2 lg:p-4 px-2 py-4 max-w-md mx-auto">
                <p className="">Call these numbers:</p>
                <div className="flex flex-col mt-2 gap-1">
                    <a href="tel:+2348100072927" className="underline">+2348100072927</a>
                    <a href="tel:+2349090555065" className="underline">+2349090555065</a>
                </div>
            </div>
        </section>
    )
}

export default Sponsorship;