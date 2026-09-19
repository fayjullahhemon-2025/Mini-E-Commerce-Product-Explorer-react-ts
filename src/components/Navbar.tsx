import { FaBlenderPhone } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-4">

 
            <div className="flex items-center gap-2">
                <FaBlenderPhone className="text-2xl" />
                <h1 className="text-2xl font-bold">MobiZone</h1>
            </div>


            <div className="mt-4 md:mt-0">
                <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">Phone Finder</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>


            <div className="flex justify-center gap-2 mt-4 md:mt-0">
                <button className="px-4 py-2 rounded-md border">
                    Sign Up
                </button>

                <button className="px-4 py-2 rounded-md bg-black text-white">
                    Sign In
                </button>
            </div>

        </div>
    )
}