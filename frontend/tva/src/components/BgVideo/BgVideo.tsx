import BgVideoS from './BgVideoStyle';

function BgVideo() {
  return (
    <div>
      <BgVideoS controls>
        <source
          src="src/assets/Samsung_social_contribution.mp4"
          type="video/mp4"
        />
      </BgVideoS>
    </div>
  );
}

export default BgVideo;
