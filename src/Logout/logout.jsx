import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
   
    localStorage.clear();
    sessionStorage.clear();

    
    navigate('/home');
  }, [navigate]);

  return null;
}

export default Logout;
