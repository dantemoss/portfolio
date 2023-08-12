import profile from '../assets/profile.jpg';
import svg from '../assets/descarga.svg';
import '../index.css';
import instaLogo from '../assets/icons/instagram.png';
import twitterLogo from '../assets/icons/twitter.png';
import githubLogo from '../assets/icons/github-sign.png';
import linkedinLogo from '../assets/icons/linkedin.png';

const Header = () => {
    const openPDF = (pdfFileName) => {
        window.open(`/${pdfFileName}`, '_blank');
    };
    
    
    
    return (
        <div className="flex items-center justify-center h-screen header-container">
            <div className="flex flex-col items-start max-md:items-center">
                <div className="relative w-32 h-32">
                    {/* SVG con efecto de superposición */}
                    <div className="absolute w-full h-full -top-0 -right-14 z-1 -bottom-2 max-md:hidden">
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

                <div className="flex items-center gap-5 mt-5 w-full max-md:flex max-md:justify-center max-md:flex-col"> {/* Contenedor de iconos y botón */}
                
                    <button className='rounded-full ring-black bg-[#FFCFD2] w-2/4 h-14 pruebaFont font-bold hover:bg-white-100' onClick={() => openPDF('public/DanteMoscosoCurriculum.pdf')}>
                        View CV
                    </button>

                    {/* Inicio REDES */}
                    <div className="flex items-center gap-x-5 w-full max-md:flex max-md:justify-center"> {/* Contenedor de iconos */}
                        <a href="https://www.instagram.com/dante.moss/" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <img src={instaLogo} alt="Instagram" className="icon w-8 h-8 flex-shrink-0 hover:scale-105" />
                        </a>
                        <a href="https://github.com/DanteMoss" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub" className="icon w-8 h-8 flex-shrink-0 hover:scale-105" />
                        </a>
                        <a href="https://www.linkedin.com/in/dante-moscoso-aa146825a/" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="LinkedIn" className="icon w-8 h-8 flex-shrink-0 hover:scale-105" />
                        </a>
                        <a href="https://twitter.com/dantemoss11" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <img src={twitterLogo} alt="Twitter" className="icon w-8 h-8 flex-shrink-0 hover:scale-105" />
                        </a>
                    </div>
                    {/* Fin REDES */}
                </div>
            </div>
        </div>
    );
};

export default Header;

