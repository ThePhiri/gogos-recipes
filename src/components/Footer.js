import { Link } from "react-router-dom"
import { faHome, faList, faUser } from "@fortawesome/free-solid-svg-icons"


function Footer() {
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Profile",
            path: "/profile",
            icon: faUser
        }
    ]

    return (
        <footer className="bg-white dark:bg-zinc-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-zinc-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>
                        <p className="max-w-lg tracking-tight text-zinc-400 "> Gogo's recipes is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" className="px-4 py-2 text-zinc-700 bg-white border rounded-md dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-orange-800 rounded-lg hover:bg-zinc-700 focus:ring focus:ring-zinc-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-white">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2 text-white">
                            <ul>
                                {links.map(link => (
                                    <Link to={link.path} key={link.name}><li className="p-2">{link.name}</li> </Link>
                                )
                                )}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-zinc-800 dark:text-white">Social Media</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white">Facebook</a>
                            <a href="#" className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white">Twitter</a>
                            <a href="#" className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white">Instagram</a>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-zinc-200 md:my-8 dark:border-zinc-700" />

                <div className="flex items-center justify-between">

                    <Link to="/" className="text-2xl mr-4 sm:text-3xl font-bold text-orange-600"> Gogos Recipes.</Link>


                    <div className="flex -mx-2">

                        <p className="text-zinc-400">&copy; 2023 | All Rights Reserved</p>


                    </div>
                </div>
            </div>
        </footer >

    )
}

export default Footer

{/* <div className="footer container">
             <div className="footerSection">
                 <p className="title">Gogos Recipes</p>
                 <p></p>
                 <p>&copy; 2023 | All Rights Reserved</p>
             </div>
             <div className="footerSection">
                 <p className="title">Contact Us</p>
                 <p>developers@ninekeys.co.za</p>
             </div>
             <div className="footerSection">
                 <p className="title">Socials</p>
                 <p>Facebook</p>
                 <p>Twitter</p>
                 <p>Instagram</p>
             </div>
         </div> */}