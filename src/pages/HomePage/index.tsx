import { useHomePage } from 'pages/HomePage/useHomePage';
import { HomePageProps } from 'pages/HomePage/types';
import {
  HomePageWrapper,
  Header,
  ListWrapper,
  Hr,
} from 'pages/HomePage/styles';
import List from 'components/List';
import { MockData } from './constants';

const HomePage = ({}: HomePageProps) => {
  useHomePage();

  return (
    <HomePageWrapper>
      <Header>
        <h1>Who is your favorite streamer?</h1>
        <p>Gather them all in one place</p>
      </Header>
      <ListWrapper>
        <p>Your streamers</p>
        <List value={MockData} onClick={console.log} />
      </ListWrapper>
      <Hr />
    </HomePageWrapper>
  );
};

export default HomePage;
