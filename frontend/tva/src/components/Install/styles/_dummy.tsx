import styled from 'styled-components';

const styles = styled.div`
  /* 초기 설정 */

  position: relative;
  width: 3840px;
  height: 2160px;

  background: #555555;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* flex-component */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 300px;

  position: absolute;
  width: 3350px;
  height: 1379px;
  left: 168px;
  top: 424px;

  /* left-component */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 266px;

  width: 1564px;
  height: 1379px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  /* manual-component */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 143px;

  width: 1564px;
  height: 773px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  /* 다음 절차를 따르세요 */

  width: 1035px;
  height: 130px;

  font-family: 'BM HANNA_TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 130px;
  line-height: 130px;
  /* identical to box height */

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  /* 카메라를 통해 QR 코드를 스캔하세요. 노블리 TV에서 로그인 하세요. 화면에 나온 단계를 따르세요. */

  width: 1564px;
  height: 500px;

  font-family: 'BM HANNA_TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 100px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  /* discription-component */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 50px;

  width: 1480px;
  height: 340px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  /* 또는 아래 Url에 접속하여 고유코드를 입력하세요. */

  width: 1480px;
  height: 80px;

  font-family: 'BM HANNA_TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 80px;
  /* identical to box height */

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  /* http//C103/TV */

  width: 532px;
  height: 80px;

  font-family: 'BM HANNA_TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 80px;
  /* identical to box height */

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  /* 고유코드 : 121l-17k3 */

  width: 638px;
  height: 80px;

  font-family: 'BM HANNA_TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 80px;
  /* identical to box height */

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;

  /* seperation-line */

  width: 1257.04px;
  height: 0px;

  border: 20px solid #ffffff;
  transform: rotate(-90deg);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  /* Right-component */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 226px;

  width: 1190px;
  height: 1326px;

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;

  /* qrcode_90511614_59b8124b185609a77ee63ba4b12c3626 1 */

  width: 1000px;
  height: 1000px;

  background: url(qrcode_90511614_59b8124b185609a77ee63ba4b12c3626.png);
  filter: drop-shadow(0px 4px 50px #ffffff);

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  /* QR코드 스캔하여 로그인 하세요 */

  width: 1190px;
  height: 100px;

  font-family: 'BM HANNA_TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 100px;
  /* identical to box height */

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export default styles;
