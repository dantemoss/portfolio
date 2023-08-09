
import CardSkills from "./CardSkills";
import ReactLogo from "../assets/icons/React-icon.svg.png";
import JS from "../assets/icons/js.png";
import CSS from "../assets/icons/css-3.png";
import tailwind from "../assets/icons/tailwind-css-hd-logo.png";
import boostrap from "../assets/icons/Bootstrap_logo.svg.png";

const Tools = () => {
    const skillImages = [ReactLogo, JS, CSS, tailwind, boostrap]; 

    return (
        <div className="container mx-auto px-4 mt-40">
            <h2 className="text-4xl text-center PixelFont" id="demotext">
                Dante Moscoso Experience
            </h2>
            <h3 className="text-3xl text-center PixelFont gradienttext">Its Different.</h3>
            <h2 className="PixelFont text-2xl flex justify-center shadow-skills mt-60">My Front Skills.</h2>
            <div className="flex justify-center gap-4 ">
                {skillImages.map((image, index) => (
                    <CardSkills key={index} image={image} />
                ))}
            </div>
        </div>
    );
};

export default Tools;
