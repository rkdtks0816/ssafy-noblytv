import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import manageAuthToken from '../../utils/manageAuthToken';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AddBtn from '../../components/SmallBtn/Addbtn';

function Community() {
  const navigate = useNavigate();
  useEffect(() => {
    manageAuthToken({ handleNavigate: navigate, targetUrl: '/sign-in' });
  }, [navigate]);

  return (
    <div>
      <Header />
      <Card />
      <AddBtn />
      <Footer />
    </div>
  );
}

export default Community;
