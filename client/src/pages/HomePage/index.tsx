import Form from 'components/Form';
import List from 'components/List';
import { useHomePage } from 'pages/HomePage/useHomePage';
import { Platforms } from 'pages/HomePage/constants';
import { HomePageWrapper, Header, ListWrapper } from 'pages/HomePage/styles';

const HomePage = () => {
  const { streamers } = useHomePage();

  return (
    <HomePageWrapper>
      <Header>
        <h1>Who is your favorite streamer?</h1>
        <p>Gather them all in one place</p>
      </Header>
      <ListWrapper>
        <p>Your streamers</p>
        <List value={streamers} onClick={console.log} />
      </ListWrapper>
      <Form options={Platforms} />
    </HomePageWrapper>
  );
};

export default HomePage;
