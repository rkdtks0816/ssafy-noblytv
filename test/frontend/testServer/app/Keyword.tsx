import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBtnStyle from "../../../aws/frontend/src/components/BackBtn/BackBtnStyle";
import BgImgStyle from "../../../aws/frontend/src/components/BgImg/BgImgStyle";
import FlexBoxStyle from "../../../aws/frontend/src/components/FlexBox/FlexBoxStyle";
import InputBoxStyle from "../../../aws/frontend/src/components/InputBox/InputBoxStyle";
import LargeBtnStyle from "../../../aws/frontend/src/components/LargeBtn/LargeBtnStyle";
import MenuTitleStyle from "../../../aws/frontend/src/components/MenuTitle/MenuTitleStyle";
import ListBox from "../../../aws/frontend/src/components/ListBox/ListBox";
import medicationList from "./medicationList";

function Keyword() {
  const navigate = useNavigate();

  const [inputText, setInputText] = useState<string>("");
  const [searchedMedications, setSearchedMedications] = useState<string[]>([]);

  useEffect(() => {
    // 처음에는 모든 약물 목록을 보여줍니다.
    setSearchedMedications(medicationList);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;

    // 약물 목록에서 검색어와 일치하는 약물만 필터링합니다.
    const filteredMedications = medicationList.filter((medication) =>
      medication.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchedMedications(filteredMedications);
    setInputText(searchText);
  };

  const handleBackBtn = () => {
    navigate("/cummunity");
  };

  const handleSubmit = () => {
    navigate("/cummunity");
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>우리 어르신은요...</MenuTitleStyle>
          <InputBoxStyle
            value={inputText}
            placeholder="약 이름을 입력하세요."
            style={{ marginTop: "30px" }}
            onChange={handleInputChange}
          />
          <ListBox searchedMedications={searchedMedications} />
        </FlexBoxStyle>
        <FlexBoxStyle>
          <LargeBtnStyle
            style={{ marginBottom: "10vh" }}
            onClick={handleSubmit}
          >
            다음
          </LargeBtnStyle>
        </FlexBoxStyle>
      </BgImgStyle>
    </div>
  );
}

export default Keyword;
