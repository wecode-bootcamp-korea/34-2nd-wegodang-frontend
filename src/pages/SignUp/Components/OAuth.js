import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';

const OAuth = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/oauth';
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const code = new URL(window.location.href).searchParams.get('code');

  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload
      );

      fetch('http://3.39.233.205:8000/users/kakao', {
        headers: { Authorization: res.data.access_token },
      })
        .then(res => res.json())
        .then(result => {
          result.is_user
            ? navigate('/')
            : navigate('/sign-up-after', {
                state: {
                  id: result.result.kakao_id,
                  name: result.result.user_name,
                  email: result.result.email,
                },
              });
        });
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getToken();
  });

  return null;
};

export default OAuth;
