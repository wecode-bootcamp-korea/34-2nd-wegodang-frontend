import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Purchase from './pages/Purchase/Purchase';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import OAuth from './pages/SignUp/Components/OAuth';
import SignUpAfter from './pages/SignUp/Components/SignUpAfter';
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:category_id" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/oauth" element={<OAuth />} />
          <Route path="/sign-up-after" element={<SignUpAfter />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
