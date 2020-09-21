import React from 'react';
import ComingSoon from '../Components/ComingSoon/comingSoon';
import GlobalHeader from '../Components/GlobalHeader/GlobalHeader';
import '../styles/global.scss';

export default function Home() {
  return (
    <>
      <GlobalHeader />
      <ComingSoon />  
    </>
  )
}
