import { Link } from "react-router-dom"
import CustomImage from "./CustomImage"



function HeroSection() {
    const images = [
        "/images/hero_images/hero1.jpg",
        "/images/hero_images/hero2.jpg",
        "/images/hero_images/hero1.jpg",
        "/images/hero_images/hero2.jpg",
        "/images/hero_images/hero1.jpg",
        "/images/hero_images/hero2.jpg",
        "/images/hero_images/hero1.jpg",
        "/images/hero_images/hero2.jpg",
        "/images/hero_images/hero1.jpg"
    ]

    return (

        //div with 2 columns
        <div className="flex flex-col md:flex-row justify-between items-center p-10">
            <div className="flex flex-col justify-center items-center md:items-start">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Gogos Recipes</h1>
                <p className="text-lg md:text-2xl text-gray-600">Gogos recipes is a place where you can please your soul and tummy with delicious food recepies of all things African. Our service is absolutely free. So start exploring now.</p>
                <Link to="/recipes" className="bg-orange-600 text-white px-4 py-2 rounded-md mt-4">Explore Now</Link>
            </div>
            <div className="flex flex-wrap justify-center items-center">
                {images.map((image, index) => (
                    <CustomImage key={index} src={image} alt="hero" className="w-40 h-40 md:w-60 md:h-60 m-2" />
                ))}
            </div>
        </div>





    )
}

export default HeroSection

