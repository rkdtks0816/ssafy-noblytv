import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
import manageAuthToken from '../../utils/manageAuthToken';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AddBtn from '../../components/AddBtn/AddBtn';
import { PATH_COMMUNITY, PATH_SIGN_IN } from '../../constants/constants';
import CommunityCard from '../../components/CommunityCard/CommunityCard';

function Community() {
  const navigate = useNavigate();
  useEffect(() => {
    manageAuthToken({
      handleNavigate: () => navigate(PATH_SIGN_IN, { state: PATH_COMMUNITY }),
    });
  }, [navigate]);

  return (
    <div>
      <Header />
      <CommunityCard />
      <AddBtn />
      <Footer />
    </div>
  );
}

export default Community;
