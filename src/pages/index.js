import React, { useEffect, useState} from 'react';
import ComingSoon from '../Components/ComingSoon/comingSoon';
import GlobalHeader from '../Components/GlobalHeader/GlobalHeader';
import SlideLayout from '../Components/Slide/Slide';
import '../styles/global.scss';

export default function Home() {
  const numSlides = 4;
  const [slideIndex, changeSlideIndex] = useState(0);
  let newSlide = slideIndex;


  useEffect(() => {
    scrollUtil();
  }, []);

  const handleSlideClick = (index) =>{
    changeSlideIndex(index);
  }

  const scrollUtil = () => {
    window.addEventListener('wheel', (event) => {
      const direction = event.deltaY;
      if(direction === 100) {
        if(newSlide < numSlides) {
          newSlide = newSlide + 1;
          changeSlideIndex(newSlide);
        }
      } else {
        if(newSlide > 0) {
          newSlide = newSlide - 1;
          changeSlideIndex(newSlide);
        }
      }
    })
  }

  return (
    <>
      <GlobalHeader 
        click={handleSlideClick}
      />
      <ComingSoon />
      {slideIndex === 1 && 
        <SlideLayout>
          <p>1</p>
        </SlideLayout>
      }
      {slideIndex === 2 && 
        <SlideLayout>
          <p>2</p>
        </SlideLayout>
      }
      {slideIndex === 3 && 
        <SlideLayout>
          <p>3</p>
        </SlideLayout>
      }
      {slideIndex === 4 && 
        <SlideLayout>
          <p>4</p>
        </SlideLayout>
      }
    </>
  )
}
