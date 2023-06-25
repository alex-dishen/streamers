import Form from 'features/Form';
import StreamersList from 'components/StreamersList';
import { useHomePage } from 'pages/HomePage/useHomePage';
import { Platforms } from 'pages/HomePage/constants';
import { HomePageWrapper, Header, ListWrapper } from 'pages/HomePage/styles';

const HomePage = () => {
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

export default HomePage;
