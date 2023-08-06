import '../index.css';
import DantePhoto from '../assets/DanteMoscosoBio.jpg';

const Biography = () => {
    return (
        <div className="flex justify-center items-center h-10/12 mt-40 card ml-40 w-10/12">
            <div className="w-1/2 text-center text-white">
                <h2 className="mb-4 font-GolosText font-semibold text-4xl shadow-text italic">About Me</h2>
                <span className="relative inset-y-0 left-0 w-16 font-extrabold font-GolosText"> 
                    18 year old, with almost 2 years of experience in web application
                    development. Leader par excellence, lover of teamwork and need to learn
                    all the time. Currently, I develop my learning in the Backend world,
                    creating and managing REST APIs with MongoDB, NodeJS and many boring
                    technologies! Im kidding haha
                </span>
            </div>
            <div className="w-3/5 flex justify-center pt-10 pb-10">
                <img
                    className="w-3/5"
                    src={DantePhoto}
                    alt="Dante Beautiful Moscoso"
                />
            </div>
        </div>
    );
};

export default Biography;
