import "../index.css"
import ReactLogo from "../assets/icons/React-icon.svg.png"
import JavaScriptLogo from "../assets/icons/js.png"
import BoostrapLogo from "../assets/icons/Bootstrap_logo.svg.png"
import TailwindLogo from "../assets/icons/tailwind-css-hd-logo.png"
import CssLogo from "../assets/icons/css-3.png"
const Tools = () => {
    return (
    <div className="container mx-auto px-0 ">
        <h2 className=" text-8xl flex justify-center pruebaFont2">MY STACK FRONT</h2>
        <div className="flex justify-center gap-40 mt-40 tool-container pt-10 pb-10 pl-0 pr-0 tool-pattern">
            <img src={ReactLogo} alt="React Logo" className="w-25 h-20 icon text-xl hover:scale-110 transform transition-transform"/>
            <img src={JavaScriptLogo} alt="React Logo" className="w-25 h-20 icon text-xl hover:scale-110 transform transition-transform"/>
            <img src={CssLogo} alt="React Logo" className="w-25 h-20 icon text-xl hover:scale-110 transform transition-transform"/>
            <img src={TailwindLogo} alt="React Logo" className="w-25 h-20 icon text-xl hover:scale-110 transform transition-transform"/>
            <img src={BoostrapLogo} alt="React Logo" className="w-25 h-20 icon text-xl hover:scale-110 transform transition-transform"/>
        </div>
    </div>
    )
}

export default Tools