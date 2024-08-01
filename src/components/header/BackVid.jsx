import React from 'react';

function BackVid() {
  return (
    <div>
        <video autoPlay loop muted
        className='relative z-10 w-auto min-w-full min-h-full max-w-none'>
       <source src="/videoVillage.mp4" type="video/mp4" />
       </video>
    </div>
  );
}

export default BackVid;
