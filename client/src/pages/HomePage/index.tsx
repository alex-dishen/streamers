import Form from 'features/Form';
import List from 'components/List';
import { useHomePage } from 'pages/HomePage/useHomePage';
import { Platforms } from 'pages/HomePage/constants';
import { HomePageWrapper, Header, ListWrapper } from 'pages/HomePage/styles';
import { deleteStreamer, getAllStreamers } from 'api/streamersAPI';

const HomePage = () => {
  const { streamers, setStreamers } = useHomePage();

  const handleDelete = async (id?: string) => {
    const response = await deleteStreamer(id);

    if (response) getAllStreamers(setStreamers);
  };

  return (
    <HomePageWrapper>
      <Header>
        <h1>Who is your favorite streamer?</h1>
        <p>Gather them all in one place</p>
      </Header>
      <ListWrapper>
        <p>Your streamers</p>
        <List
          values={streamers}
          onClick={console.log}
          onDelete={handleDelete}
        />
      </ListWrapper>
      <Form options={Platforms} setData={setStreamers} />
    </HomePageWrapper>
  );
};

export default HomePage;
