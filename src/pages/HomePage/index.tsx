import { useHomePage } from 'pages/HomePage/useHomePage';
import { HomePageProps } from 'pages/HomePage/types';
import { HomePageWrapper } from 'pages/HomePage/styles';

const HomePage = ({}: HomePageProps) => {
  useHomePage();

  return <HomePageWrapper></HomePageWrapper>;
};

export default HomePage;
