import Form from 'features/Form';
import StreamersList from 'features/StreamersList';
import { useHomePage } from 'pages/Home/useHomePage';
import { HomePageWrapper, Header, ListWrapper } from 'pages/Home/styles';
import { StreamerContext } from 'contexts/StreamerContext';

const Home = () => {
  const { streamers, setStreamers } = useHomePage();

  return (
    <HomePageWrapper>
      <Header>
        <h1>Who is your favorite streamer?</h1>
        <p>Gather them all in one place</p>
      </Header>
      <StreamerContext.Provider value={{ streamers, setStreamers }}>
        <ListWrapper>
          <p>Your streamers</p>
          <StreamersList values={streamers} />
        </ListWrapper>
        <Form />
      </StreamerContext.Provider>
    </HomePageWrapper>
  );
};

export default Home;
