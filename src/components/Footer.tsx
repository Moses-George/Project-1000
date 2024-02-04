


const Footer = () => {

    return (
        <footer id="about" className="w-full py-12 px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-8 bg-dark-blue">
            <div className="-ml-12">
                <img className="h-28 w-60" src="/images/logo.svg" alt="logo" />
            </div>
            <div className="flex gap-4 w-ful">
                <img className="" src="/images/instagram.svg" alt="instagram" />
                <img className="" src="/images/facebook.svg" alt="facebook" />
                <img className="" src="/images/twitter.svg" alt="twitter" />
                <img className="" src="/images/linkedIn.svg" alt="linkedin" />
            </div>
            <p className="text-white text-center">copyright 2023 Impact Africa Initiative. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;