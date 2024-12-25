import { useState, useRef } from 'react'
//icons
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
//slider
import { ReactRotationSlider } from 'react-rotation-slider'
import 'react-rotation-slider/dist/index.css'
//images
import img1 from '../assets/images/food1.png'
import img2 from '../assets/images/food2.png'
import img3 from '../assets/images/food3.png'
import img4 from '../assets/images/food4.png'

const Top = () => {
  //images -----------------------------------------------------------------------------
  const [imageIndex, setImageIndex] = useState(0)
  let images = [img1, img2, img3, img4, img2, img3, img4, img3, img4]

  //theme ------------------------------------------------------------------------------
  const [themeColors, setThemeColors] = useState([
    { light: '#C2FFA7', dark: '#509630' },
    { light: '#FFBE96', dark: '#F99456' },
    { light: '#FFEBA3', dark: '#DAB322' },
  ])
  const [themeIndex, setThemeIndex] = useState(0)
  //slider handler ----------------------------------------------------------------------
  const slider = useRef()
  const sliderHandler = ({ type }) => {
    // change theme ---------------------------------------------------------------------
    if (themeIndex < themeColors.length - 1) {
      setThemeIndex(themeIndex + 1)
    } else {
      setThemeIndex(0)
    }

    //slide -----------------------------------------------------------------------------
    if (type == 'next') {
      slider.current.next()
      if (imageIndex > 0) {
        setImageIndex(imageIndex - 1)
      } else {
        setImageIndex(images.length - 1)
      }
    } else {
      slider.current.prev()
      if (imageIndex < images.length - 1) {
        setImageIndex(imageIndex + 1)
      } else {
        setImageIndex(0)
      }
    }
  }

  return (
    <>
      <div className='container mx-auto relative '>
        {/* B A C K - S L I D E R */}
        <div
          style={{ backgroundColor: themeColors[themeIndex].light }}
          className='w-11/12 aspect-square rounded-full absolute top-[-700px] 2xl:top-[-900px] right-[-250px] 2xl:right-[-350px]  flex justify-center items-end overflow-hidden shadow-xl '
        >
          <div className='absolute bottom-[-350px]'>
            <ReactRotationSlider images={images} ref={slider} />
          </div>
        </div>
        {/* F R O N T - S L I D E R */}
        <div className='absolute w-[20rem] right-[180px] 2xl:right-[200px] top-[450px] 2xl:top-[500px]'>
          <div className='flex justify-center items-center'>
            {images.map((i, index) => (
              <img
                src={i}
                alt=''
                className={`w-full absolute ease-in-out duration-500 ${
                  index == imageIndex ? 'scale-100' : 'scale-0'
                }`}
              />
            ))}
          </div>
          <div className='flex mx-auto ml-[-8rem] mt-20 gap-[30rem]'>
            <p onClick={() => sliderHandler({ type: 'prev' })}>
              <BsFillArrowDownCircleFill
                style={{ color: themeColors[themeIndex].dark }}
                className='text-4xl cursor-pointer hover:translate-y-1 ease-in-out duration-300 hover:scale-105 drop-shadow-md'
              />
            </p>
            <p onClick={() => sliderHandler({ type: 'next' })}>
              <BsFillArrowDownCircleFill
                style={{ color: themeColors[themeIndex].dark }}
                className='text-4xl cursor-pointer hover:translate-y-1 ease-in-out duration-300 hover:scale-105 drop-shadow-md'
              />
            </p>
          </div>
        </div>
        {/* L E F T - S I D E */}
        <div className='pt-52 2xl:pt-64 flex flex-col gap-6 '>
          <h1
            style={{ color: themeColors[themeIndex].dark }}
            className='text-5xl font-bold ease-in-out duration-500'
          >
            Delicious
          </h1>
          <h2 className='text-4xl opacity-75'>Quench the Hunger</h2>
          <h3 className='text-justify w-[30rem] text-xl opacity-70'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            phasellus dolor, euismod sed suscipit. Justo eu ut amet sed eget
            netus.
          </h3>

          <p
            style={{ backgroundColor: themeColors[themeIndex].dark }}
            className='mt-16 text-lg w-max px-7 py-4 rounded-[4rem] cursor-pointer text-white ease-in-out duration-500 shadow-md hover:rounded-sm'
          >
            Quench now
          </p>
        </div>
      </div>
    </>
  )
}

export default Top