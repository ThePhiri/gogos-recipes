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
        <div className='section hero'>
            <div className='col typography'>
                <h1 className='title'>What are we about</h1>
                <p className='info'>Gogos recipes is a place where you can please your soul and tummy with delicious food recepies of all things African. Our service is absolutely free. So start exploring now.</p>
                <button className='btn'>Explore Now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage imgSrc={src} key={index} pt={"90%"} />
                ))}


            </div>
        </div>
    )
}

export default HeroSection