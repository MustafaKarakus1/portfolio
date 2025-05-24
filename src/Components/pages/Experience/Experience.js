import React, { useEffect, useRef } from 'react'
import './Experience.css'

const Experience = () => {
  /*const scrollListRef = useRef(null);

  useEffect(() => {
    const scrollList = scrollListRef.current;
    if (!scrollList) return;

    const handleScroll = () => {
      const items = scrollList.querySelectorAll('.item');
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const windowCenter = window.innerHeight / 2;
        const distance = Math.abs(windowCenter - itemCenter);

        const maxDistance = window.innerHeight / 2;
        const scale = 1 - Math.min(distance / maxDistance, 1) * 0.2;
        const opacity = 1 - Math.min(distance / maxDistance, 1) * 0.5;

        item.style.transform = `scale(${scale})`;
        item.style.opacity = opacity;
      });
    };

    scrollList.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      scrollList.removeEventListener('scroll', handleScroll);
    };
  }, []);*/

  return (
    <div>
    <h1 style={{ textAlign:"center", color:"white"}} id='experience'>Experience</h1>
    <div className="scroll-list__wrp" /*ref={scrollListRef}*/ >
      <div className="item" style={{display:"flex",justifyContent:"space-between"}} >
        <span>Candidate Engineer</span> 
        <span>Türk Havacılık ve Uzay Sanayii A.Ş.</span>
      </div>
      <div className="item" style={{display:"flex",justifyContent:"space-between"}} >
        <span>Software Developer</span> 
        <span>Kapsül Teknoloji Platformu</span>
      </div>
      <div className="item" style={{display:"flex",justifyContent:"space-between" }} >
        <span>Candidate Engineer</span> 
        <span>Türk Havacılık ve Uzay Sanayii A.Ş.</span>
      </div>
      <div className="item" style={{display:"flex",justifyContent:"space-between"}} >
        <span>Software Developer</span> 
        <span>T.C. Ulaştırma ve Altyapı Bakanlığı</span>
      </div>
      <div className="item" style={{display:"flex",justifyContent:"space-between"}} >
        <span>Software Developer</span> 
        <span>Etiya Bilgi Teknolojileri</span>
      </div>
      <div className="item" style={{display:"flex",justifyContent:"space-between"}} >
        <span>Part-time Developer</span> 
        <span>Kapsül Teknoloji Platformu</span>
      </div>
    </div>
    </div>
  )
}

export default Experience