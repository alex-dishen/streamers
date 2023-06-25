import Form from 'features/Form';
import StreamersList from 'components/StreamersList';
import { useHomePage } from 'pages/Home/useHomePage';
import { Platforms } from 'pages/Home/constants';
import { HomePageWrapper, Header, ListWrapper } from 'pages/Home/styles';

const Home = () => {
  const { streamers, setStreamers, handleDelete, handleVoteClick } =
    useHomePage();

  return (
    <HomePageWrapper>
      <Header>
        <h1>Who is your favorite streamer?</h1>
        <p>Gather them all in one place</p>
      </Header>
      <ListWrapper>
        <p>Your streamers</p>
        <StreamersList
          values={streamers}
          onClick={console.log}
          onDelete={handleDelete}
          voteClick={handleVoteClick}
        />
      </ListWrapper>
      <Form options={Platforms} setData={setStreamers} />
    </HomePageWrapper>
  );
};

export default Home;
