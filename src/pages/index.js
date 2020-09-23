import React, {useState} from 'react';
import ComingSoon from '../Components/ComingSoon/comingSoon';
import GlobalHeader from '../Components/GlobalHeader/GlobalHeader';
import SlideLayout from '../Components/Slide/Slide';
import '../styles/global.scss';

export default function Home() {

  const [slideIndex, changeSlideIndex] = useState(0);

  const handleSlideClick = (index) =>{
    changeSlideIndex(index);
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
