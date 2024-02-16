import { forwardRef } from 'react';
import { ChildModalProps } from '../../types/property';
import {
  ChildModalBg,
  ChildModalContent,
  ChildModalImg,
} from './ChildModalStyles';

// forwardRef를 사용하여 ref를 하위 컴포넌트로 전달할 수 있는 함수형 컴포넌트 ChildModal을 선언
const ChildModal = forwardRef<HTMLDivElement, ChildModalProps>(
  ({ content, isActive, isFullScreen }, ref) => {
    const getRightStyle = () => {
      if (isFullScreen) return '0'; // 전체 화면 모드일 경우 오른쪽 위치를 0으로 설정
      return isActive ? '3vw' : '-100%'; // 활성화 상태에 따라 오른쪽 위치를 조정
    };

    // content가 문자열이고 길이가 140자를 초과하면, 내용을 140자로 제한하고 '...' 추가
    const displayContent =
      typeof content === 'string' && content.length > 140
        ? `${content.substring(0, 140)}...`
        : content;

    return (
      // ref를 사용하여 DOM 요소에 직접 접근
      <div ref={ref}>
        <ChildModalBg
          isFullScreen={isFullScreen} // 전체 화면 여부에 따라 스타일을 조정
          style={{
            right: getRightStyle(), // getRightStyle 함수를 통해 결정된 오른쪽 위치를 스타일에 적용
          }}
        >
          <ChildModalContent>{displayContent}</ChildModalContent>
          <ChildModalImg />
        </ChildModalBg>
      </div>
    );
  },
);

export default ChildModal;
