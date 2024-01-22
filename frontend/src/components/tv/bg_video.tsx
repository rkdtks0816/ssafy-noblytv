import React from 'react';
import { BgVideoS } from './styles/bg_video_styles';


const BgVideo: React.FC = () => {
  return (
    <div>
      <BgVideoS controls>
        <source src="src/assets/advertisement.mp4" type="video/mp4"></source>
      </BgVideoS>
    </div>
  );
};

export default BgVideo;
