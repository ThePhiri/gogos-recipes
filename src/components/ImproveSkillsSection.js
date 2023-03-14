function ImproveSkillsSection() {
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recipes",
        "Know nutrition facts",
        "Get cooking tips"
    ]
    return (
        //div with 2 columns with image in the left column
        <div className="flex flex-col md:flex-row justify-between items-center p-10">
            <div className="flex flex-col justify-center items-center md:items-start">
               
                <img src="/images/cook.jpg" alt="woman cooking" className=""/>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Improve your cooking skills</h1>
                <ul className="flex flex-col justify-center items-center">
                    {list.map((item, index) => (
                        <li key={index} className="flex justify-left">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-gray-600">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default ImproveSkillsSection

    // < div className = 'section improveSkills' >
    //     <div className='col img'>
    //      <img src="/images/cook.jpg" alt="woman cooking"/>
    //     </div>
    //     <div className="col typography">
          
    //         <h1 className='title'>Improve your cooking skills</h1>

    //             {list.map((item, index) =>
    //                 <p className="skillItem" key={index}>{item}</p> 
    //             )}
     

    //        <button className='btn'>SignUp Now</button>
     
    //     </div>
    // </div >