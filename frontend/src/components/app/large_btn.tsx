import { CSSProperties } from 'react';
import LargeBtnS from './styles/large_btn_style';

interface LargeBtnProps {
  largeBtnContents: string;
  pageUrl: string;
  // eslint-disable-next-line react/require-default-props
  style?: CSSProperties;
}

function LargeBtn({ largeBtnContents, pageUrl, style }: LargeBtnProps) {
  return (
    <LargeBtnS to={pageUrl} style={style}>
      {largeBtnContents}
    </LargeBtnS>
  );
}

export default LargeBtn;
