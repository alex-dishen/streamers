import { StreamerContext } from 'contexts/StreamerContext';
import Form from 'features/Form';
import StreamersList from 'features/StreamersList';
import { useHomePage } from 'pages/Home/useHomePage';
import PopUp from 'components/PopUp';
import Error from 'components/Error';
import { HomePageWrapper, Header, ListWrapper } from 'pages/Home/styles';

const Home = () => {
  const {
    streamers,
    showError,
    errorMessage,
    isFailedToFetch,
    setShowError,
    setErrorMessage,
    setStreamers,
  } = useHomePage();

  return (
    <StreamerContext.Provider
      value={{
        streamers,
        showError,
        errorMessage,
        setShowError,
        setErrorMessage,
        setStreamers,
      }}
    >
      <HomePageWrapper>
        <Header>
          <h1>Who is your favorite streamer?</h1>
          <p>Gather them all in one place</p>
        </Header>
        {isFailedToFetch ? (
          <Error error={errorMessage} />
        ) : (
          <ListWrapper>
            <p>Your streamers</p>
            <StreamersList values={streamers} />
          </ListWrapper>
        )}
        <Form />
      </HomePageWrapper>
      {showError && <PopUp />}
    </StreamerContext.Provider>
  );
};

export default Home;
