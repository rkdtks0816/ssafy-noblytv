import BgVideoS from './BgVideoStyle';

interface BgVideoProps {
  muted: boolean;
}
function BgVideo({ muted }: BgVideoProps) {
  return (
    <div>
      <BgVideoS controls autoPlay muted={muted} loop>
        <source src="src/assets/news.mp4" type="video/mp4" />
      </BgVideoS>
    </div>
  );
}

export default BgVideo;
