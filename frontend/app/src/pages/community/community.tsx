import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import manageAuthToken from '../../utils/manageAuthToken';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Community() {
  const navigate = useNavigate();
  useEffect(() => {
    manageAuthToken({ handleNavigate: navigate, targetUrl: '/sign-in' });
  }, [navigate]);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default Community;
