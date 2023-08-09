
import Gallery from './CardProject';

const ProjectsContainer = () => {
    return (
        <div className="grid lg:grid-cols-3 lg:gap-x-12 w-128">
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
        </div>
    );
};

export default ProjectsContainer;
