import { atom } from 'recoil';

const userInfo = atom({
  key: 'userInfo',
  default: {
    token: '',
    email: '',
    kakaoId: '',
    userName: '',
  },
});

export default userInfo;
