import avatar from '../assets/icons/avatar.png';

const AboutMe = () => {
    return (
        <div className='mt-1 w-full flex justify-center items-center space-x-4'>
            <img src={avatar} alt="" width={400} />
            <div className='flex flex-col space-y-2'>
                <h2 className='PixelFont heyGradient text-4xl'>Hey!</h2>
                <span className='PixelFont TextPixel'>My name is Dante and welcome to my portfolio!</span>
            </div>
        </div>
    );
};

export default AboutMe;
