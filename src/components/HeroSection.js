import { Link } from "react-router-dom"



function HeroSection() {

    return (

        //div with 2 columns
        <div className=" w-full bg-zinc-800 flex-col justify-between pt-[80px] text-white">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className="py-3 text-2xl">Gogos recipes is a place where you can please your soul and tummy with delicious food recipes of all things African. Our service is absolutely free. So start exploring now.</p>

                    <Link to="/recipes" ><button className="py-2 px-6 ">Explore Now</button></Link>
                </div>

                <div >
                    <img src="/images/hero_images/food.png" alt="hero" className="w-full" />
                </div>
            </div>

        </div>





    )
}

export default HeroSection

