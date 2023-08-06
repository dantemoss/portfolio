import '../index.css';
import DantePhoto from '../assets/DanteMoscosoBio.jpg';

const Projects = () => {
  return (
    <div className="container mx-auto mt-40 mb-40 rounded-2xl">
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="max-h-96 md:h-screen">
        <img className="w-screen h-screen object-cover object-top rounded-l" src={DantePhoto} alt="Dante Photo"/>
      </div>
      <div className="flex bg-gray-100 p-10 rounded-r">
        <div className="mb-auto mt-auto max-w-lg ">
          <h1 className=" uppercase text-5xl font-Kanit font-extrabold">Dante Moscoso</h1>
          <p className="font-semibold mb-5 text-3xl font-Kanit italic">Web Developer</p>
          <p className='text-2xl '>18 year old, with almost 2 years of experience in web application
                    development. Leader par excellence, lover of teamwork and need to learn
                    all the time. Currently, I develop my learning in the Backend world,
                    creating and managing REST APIs with MongoDB, NodeJS and many boring
                    technologies! Im kidding haha.</p>
          <button className="bg-black rounded-md py-3 px-7 mt-6 text-white pruebaFont">Contact Me</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Projects 


