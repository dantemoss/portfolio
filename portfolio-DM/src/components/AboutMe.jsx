import avatar from '../assets/icons/avatar.png';

const AboutMe = () => {
    return (
        <div className='mt-1 w-full flex flex-col lg:flex-row justify-center items-center lg:space-x-4'>
            <img src={avatar} alt="" className='w-64 h-64 lg:w-400 lg:h-auto object-contain' />
            <div className='flex flex-col space-y-2'>
                <h2 className='PixelFont heyGradient text-4xl text-center lg:text-left'>Hey!</h2>
                <span className='PixelFont TextPixel text-center lg:text-left'>My name is Dante and welcome to my portfolio!</span>
            </div>
        </div>
    );
};

export default AboutMe;
