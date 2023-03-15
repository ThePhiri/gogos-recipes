import { Link } from "react-router-dom"

function ImproveSkillsSection() {
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recipes",
        "Know nutrition facts",
        "Get cooking tips"
    ]
    return (
        <div className="w-fullflex-col justify-between pt-[80px] pb-[80px]">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="m-2">
                    <img src="/images/cooking.png" alt="woman cooking" className="rounded-md" />
                </div>
                <div className="flex flex-col justify-center md:items-start w-full px-2 ">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Improve your cooking skills</h1>

                    <ul className="flex flex-col justify-center items-start">
                        {list.map((item, index) => (
                            <li key={index} className="flex justify-left">
                                <p className="text-gray-600 border-l-4 border-orange-600 px-2 my-2"> {item}</p>
                            </li>
                        ))}
                    </ul>
                    <Link to="/recipes" ><button className="py-2 px-6 ">Sign Up Now</button></Link>


                </div>


            </div>

        </div>



    )
}

export default ImproveSkillsSection
