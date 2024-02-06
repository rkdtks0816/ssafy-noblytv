import { useState, useEffect } from 'react';
import BgVideoS from './BgVideoStyle';

interface BgVideoProps {
  muted: boolean;
  currentMode: string;
}

function BgVideo({ muted, currentMode }: BgVideoProps) {
  const [videoSrc, setVideoSrc] = useState('src/assets/news.mp4');

  useEffect(() => {
    let newVideoSrc = '';
    if (currentMode === 'news') {
      newVideoSrc = 'src/assets/news_closing.mp4';
    } else if (currentMode === 'commercial') {
      newVideoSrc = 'src/assets/advertisement_2.mp4';
    } else if (currentMode === 'main') {
      newVideoSrc = 'src/assets/news.mp4';
    }
    setVideoSrc(newVideoSrc);
  }, [currentMode]);

  return (
    <div>
      <BgVideoS key={videoSrc} controls autoPlay muted={muted} loop>
        <source src={videoSrc} type="video/mp4" />
      </BgVideoS>
    </div>
  );
}

export default BgVideo;
