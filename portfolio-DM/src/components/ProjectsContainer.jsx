import Gallery from './CardProject';

const ProjectsContainer = () => {
    return (
        <div className="mt-20">
            <h2 className='PixelFont text-center text-4xl work-shadow my-6 font-bold'>a bit of my work</h2>
            <div className="flex flex-col items-center space-y-6">
                <Gallery />
            </div>
        </div>
    );
};

export default ProjectsContainer;

