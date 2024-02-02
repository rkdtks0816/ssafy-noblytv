import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import manageAuthToken from '../../utils/manageAuthToken';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { PATH_COMMUNITY, PATH_SIGN_IN } from '../../constants/constants';
import GymnasticsCard from '../../components/GymnasticsCard/GymnasticsCard';

function Gymnastics() {
  const navigate = useNavigate();
  useEffect(() => {
    manageAuthToken({
      handleNavigate: () => navigate(PATH_SIGN_IN, { state: PATH_COMMUNITY }),
    });
  }, [navigate]);

  return (
    <div>
      <Header />
      <GymnasticsCard />
      <Footer />
    </div>
  );
}

export default Gymnastics;
