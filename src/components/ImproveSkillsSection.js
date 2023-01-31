function ImproveSkillsSection() {
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recipes",
        "Know nutrition facts",
        "Get cooking tips"
    ]
    return (
    <div className='section improveSkills'>
        <div className='col img'>
         <img src="/images/cook.jpg" alt="woman cooking"/>
        </div>
        <div className="col typography">
          
            <h1 className='title'>Improve your cooking skills</h1>

                {list.map((item, index) =>
                    <p className="skillItem" key={index}>{item}</p> 
                )}
     

           <button className='btn'>SignUp Now</button>
     
        </div>
    </div>
  )
}

export default ImproveSkillsSection