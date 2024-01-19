import { HeaderBg, SeniorName, SeniorTitle, NoticeIcon } from './styles/header_styles';

const MyComponent = () => {
  return (
    <div>
      <HeaderBg>
        <SeniorName>이세종</SeniorName>
        <SeniorTitle>어르신</SeniorTitle>
        <NoticeIcon></NoticeIcon>
      </HeaderBg>
    </div>
  );
};

export default MyComponent;
