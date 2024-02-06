import BgVideoS from './BgVideoStyle';

interface BgVideoProps {
  muted: boolean;
  news: string;
  commercial: string;
}
function BgVideo({ muted, news, commercial }: BgVideoProps) {
  let videoSrc = 'src/assets/news.mp4';
  if (news) {
    videoSrc = 'src/assets/news_closing.mp4';
  } else if (commercial) {
    videoSrc = 'src/assets/advertisement_2.mp4';
  }

  return (
    <div>
      <BgVideoS controls autoPlay muted={muted} loop>
        <source src={videoSrc} type="video/mp4" />
      </BgVideoS>
    </div>
  );
}

export default BgVideo;
