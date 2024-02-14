import React from 'react';
import BgVideo from './BgVideo';

interface BgVideoComponentProps {
  currentMode: string;
}

function BgVideoSelector({ currentMode }: BgVideoComponentProps) {
  return <BgVideo currentMode={currentMode} />;
}

// 컴포넌트를 React.memo로 감싼 후 export
// React.memo는 컴포넌트의 props가 바뀌지 않으면 re-rendering 을 방지
const MemoizedBgVideoComponent = React.memo(BgVideoSelector);

export default MemoizedBgVideoComponent;
