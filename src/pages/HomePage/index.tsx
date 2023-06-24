import { useHomePage } from 'pages/HomePage/useHomePage';
import { HomePageProps } from 'pages/HomePage/types';
import { HomePageWrapper, Header } from 'pages/HomePage/styles';

const HomePage = ({}: HomePageProps) => {
  useHomePage();

  return (
    <HomePageWrapper>
      <Header>
        <h1>Who is your favorite streamer?</h1>
        <p>Gather them all in one place</p>
      </Header>
    </HomePageWrapper>
  );
};

export default HomePage;
