import Cookies from 'js-cookie';
import {
  CommunityBoxS,
  CommunityCardS,
  CommunityHeaderS,
  CommunityWriterS,
  CommunityVideoS,
} from './CommunityStyle';
import AddBtn from '../../components/AddBtn/AddBtn';

function Community() {
  const oldUsername = Cookies.get('oldUsername');

  return (
    <CommunityBoxS>
      <CommunityCardS>
        <CommunityHeaderS>
          <CommunityWriterS>{oldUsername}</CommunityWriterS>
        </CommunityHeaderS>
        <CommunityVideoS controls>
          <source src="/src/assets/2024-02-01_summary.mp4" type="video/mp4" />
        </CommunityVideoS>
      </CommunityCardS>
      <CommunityCardS>
        <CommunityHeaderS>
          <CommunityWriterS>{oldUsername}</CommunityWriterS>
        </CommunityHeaderS>
        <CommunityVideoS controls>
          <source src="/src/assets/2024-02-02_summary.mp4" type="video/mp4" />
        </CommunityVideoS>
      </CommunityCardS>
      <AddBtn />
    </CommunityBoxS>
  );
}

export default Community;
