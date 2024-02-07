import { ChildModalVideoBG } from './ChildModalStyles';

function StreamingModal() {
  const streamUrl = 'http://192.168.100.245:5000/video_feed';

  return (
    <ChildModalVideoBG>
      <img src={streamUrl} alt="비디오 스트림" style={{ width: '100%' }} />
    </ChildModalVideoBG>
  );
}

export default StreamingModal;
