import cardImage1 from '../assets/cardimage1.jpg'



const Gallery = () => {
    return (
        <div className="container mx-auto md:px-6 w-3/4">
            <section className="mb-32 text-center lg:text-left">


                <div>
                    <div className="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0" data-te-ripple-init data-te-ripple-color="light">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                            <img src={cardImage1} className="w-full rounded-t-lg" alt="" />
                            <a href="#!">
                                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                            </a>
                            <svg className="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="currentColor" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-4 text-lg font-bold">Nostalgic waves</h5>
                            <p className="mb-6">
                                Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                                placerat vulputate. Ut vulputate est non quam dignissim
                                elementum. Donec a ullamcorper diam.
                            </p>
                            <a href="#!" data-te-ripple-init data-te-ripple-color="light" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Go to Project</a>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Gallery;