import { useState, useEffect } from 'react';

// 입력값이 일정 시간 안정되면 최종값을 반환하는 useDebounce 훅 정의
function useDebounce<T>(value: T, delay: number): T {
  // debounceValue 상태 관리.
  const [debounceValue, setDebounceValue] = useState<T>(value);

  // value 값이 변경될 때마다 디바운스 로직 실행.
  useEffect(() => {
    // 지정된 지연 시간 후에 debounceValue 업데이트.
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    // 컴포넌트가 언마운트되거나 value/delay가 변경될 때 이전 타이머를 제거.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  // 최종적으로 디바운스된 값을 반환.
  return debounceValue;
}

export default useDebounce;
