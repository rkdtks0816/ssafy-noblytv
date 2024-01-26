import FlexBoxStyle from './styles/FlexBoxStyle';
import LeftBox from './LeftBox';
import SeperationLine from './SeperationLine';
import RightBox from './RightBox';

function FlexBox() {
  return (
    <FlexBoxStyle>
      <LeftBox />
      <SeperationLine />
      <RightBox />
    </FlexBoxStyle>
  );
}

export default FlexBox;
