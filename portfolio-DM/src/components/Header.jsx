import profile from '../assets/profile.jpg';
import svg from '../assets/descarga.svg';
import '../index.css'; // Importar el archivo CSS personalizado

const Header = () => {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="flex flex-col items-start">
                <div className="relative w-32 h-32">
                    {/* SVG con efecto de superposición */}
                    <div className="absolute w-full h-full -top-0 -right-14 z-1 -bottom-2">
                        <img src={svg} alt="svg" className="w-full h-full" />
                    </div>
                    {/* Imagen de perfil */}
                    <div className="rounded-full overflow-hidden absolute w-full h-full -bottom-0 top-0.5">
                        <img src={profile} alt="profile" className="object-cover w-full h-full" />
                    </div>
                </div>
                <h2 className="text-7xl text-[#FFCFD2] font-Syne font-bold mt-10 glitch-wrapper glitch" data-text="Witness FrontEnd Mastery">
                    Witness FrontEnd Mastery
                </h2>

                <button className='rounded-full ring-black bg-[#FFCFD2] w-1/3 h-20 text-lg font-[GolosText] font-semibold hover:bg-white-100 mt-10 ' >
                    Explore Projects
                </button>
            </div>
        </div>
    );
};

export default Header;
