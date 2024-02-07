import React from 'react';
import BgVideo from './BgVideo';

interface BgVideoComponentProps {
  currentMode: string;
}

const BgVideoComponent: React.FC<BgVideoComponentProps> = React.memo(
  ({ currentMode }) => <BgVideo currentMode={currentMode} />,
);

export default BgVideoComponent;
