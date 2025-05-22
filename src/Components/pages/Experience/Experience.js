import React, { useEffect, useRef } from 'react'
import './Experience.css'

const Experience = () => {
  const scrollListRef = useRef(null);

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
  }, []);

  return (
    
    <div className="scroll-list__wrp" ref={scrollListRef}>
      <h1 style={{ textAlign:"center", color:"white"}}>Experience</h1>
      <div className="item">Türk Havacılık ve Uzay Sanayii A.Ş.</div>
      <div className="item">Kapsül Teknoloji Platformu</div>
      <div className="item">Türk Havacılık ve Uzay Sanayii A.Ş.</div>
      <div className="item">T.C. Ulaştırma ve Altyapı Bakanlığı</div>
      <div className="item">Etiya Bilgi Teknolojileri</div>
      <div className="item">Kapsül Teknoloji Platformu</div>
    </div>
  )
}

export default Experience