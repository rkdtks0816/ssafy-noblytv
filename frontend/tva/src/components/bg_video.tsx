import BgVideoS from './bg_video_styles';

function BgVideo() {
  return (
    <div>
      <BgVideoS controls>
        <source src="src/assets/advertisement.mp4" type="video/mp4" />
      </BgVideoS>
    </div>
  );
}

export default BgVideo;
