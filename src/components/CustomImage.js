function CustomImage({imgSrc, pt}) {
    return (
        <div className="customImage" style={{paddingTop: pt}}> 
            <img src={imgSrc} alt="gallery"/>
        </div>
    )    
}

export default CustomImage