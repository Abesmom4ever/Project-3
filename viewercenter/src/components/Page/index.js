import React from 'react';
import PageContent from '../PageContent';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PostVideo from '../PostVideo';
import LogOut from '../LogOut';
import Videos from '../Videos';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'sign up':
        return <SignUp />;
      case 'sign in':
        return <SignIn />;
      case 'post video':
        return <PostVideo />;
      case 'log out':
        return <LogOut />;
      case 'videos list':
        return <Videos />;

      default:
        return <SignUp />;
    }
  };

  return (
    <section>
      <hr />      
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
