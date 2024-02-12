import React from 'react';
import BgVideo from './BgVideo';

interface BgVideoComponentProps {
  currentMode: string;
}

function BgVideoComponent({ currentMode }: BgVideoComponentProps) {
  return <BgVideo currentMode={currentMode} />;
}

// 컴포넌트를 React.memo로 감싼 후 export
const MemoizedBgVideoComponent = React.memo(BgVideoComponent);

export default MemoizedBgVideoComponent;
