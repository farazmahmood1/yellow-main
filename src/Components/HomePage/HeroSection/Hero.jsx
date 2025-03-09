import React, { useRef, useState } from 'react';
import './HeroStyles.scss';
import { Link } from 'react-router-dom';
import { ImagesBaseUrl } from '../../SourceFiles/BaseUrl';

const Hero = () => {
  const perspectivesRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const scrollToPerspectives = () => {
    if (perspectivesRef.current) {
      perspectivesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div>
      <div style={{ position: 'relative', bottom: -10 }}>
        <div className='Skip-to-Main-Content'>
          <button className='skip-main' onClick={scrollToPerspectives}>
            Skip to Main Content
          </button>
        </div>
        <video
          ref={videoRef}
          autoPlay
          loop
          width="100%"
          height="100%"
          muted={isMuted}
          playsInline
          id="video"
          className='video-section'
        >
          <source src={`${ImagesBaseUrl}HeroSection.mp4`} type="video/mp4" />
        </video>
        <button className="audio-toggle-button" onClick={toggleAudio}>
          <i className={isMuted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high"}></i>
        </button>
      </div>
      <div className="video-info" ref={perspectivesRef}>
        <div className="videoPara">
          <p className="text-white">
            At Yellow Mellow, we understand that each wedding is a distinct chapter waiting to be told. Our team excels in adapting swiftly to your unique needs, creating memories brimming with joy, love, and emotions to be cherished for a lifetime. Based in Dallas, Houston, Austin, and San Antonio, our highly skilled Wedding Photographers & Cinematographers make Yellow Mellow the ultimate choice for your wedding photography needs.
          </p>
          <a className="videoBtn">
            <Link to='/contact' style={{ textDecoration: "none", color: "#000" }}>
              Watch Our Cinematic Films
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
