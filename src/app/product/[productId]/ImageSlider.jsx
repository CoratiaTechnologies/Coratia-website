import React, { useEffect, useState } from 'react';
import './ImageSlider.css';
function ImageSlider({gallery}) {
  
  const imgs = gallery
  const [wordData, setWordData] = useState(imgs[0])
  const [val, setVal] = useState(0)
  const handleClick = (index) =>{
    console.log(index)
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handleNext = () =>{
    let index = val < imgs.length -1 ? val +1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handlePrevious = ()=>{
    let index = val <= imgs.length -1 && val > 0? val - 1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="main">
    <div className='flex items-center justify-center'>
      <button className='btns' onClick={handlePrevious}>P</button>
      <img src={wordData.value} height="300" width="500" /> 
      <button className='btns' onClick={handleNext}>N</button>
    </div>
      <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} />
        </div>
        )}
      </div>
    </div>
  );
}

export default ImageSlider;