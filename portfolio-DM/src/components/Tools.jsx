
import CardSkills from "./CardSkills";
import ReactLogo from "../assets/icons/React-icon.svg.png";
import JS from "../assets/icons/js.png";
import CSS from "../assets/icons/css-3.png";
import tailwind from "../assets/icons/tailwind-css-hd-logo.png";
import boostrap from "../assets/icons/Bootstrap_logo.svg.png";

const Tools = () => {
    const skillImages = [ReactLogo, JS, CSS, tailwind, boostrap];

    return (
        <div className="container mx-auto px-0 text-center mt-60">
            <h2 className="text-4xl PixelFont" id="demotext">
                Dante Moscoso Experience
            </h2>
            <h3 className="text-3xl PixelFont gradienttext">Its Different.</h3>
            <div className="flex justify-center space-x-20 mt-1">
                {skillImages.map((image, index) => (
                    <CardSkills key={index} image={image} />
                ))}
            </div>
        </div>
    );
};

export default Tools;
