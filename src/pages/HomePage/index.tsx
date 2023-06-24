import { useHomePage } from 'pages/HomePage/useHomePage';
import List from 'components/List';
import { MockData } from 'pages/HomePage/constants';
import {
  HomePageWrapper,
  Header,
  ListWrapper,
  Hr,
} from 'pages/HomePage/styles';
import Input from 'components/Input';
import TextArea from 'components/TextArea';

const HomePage = () => {
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
      <form onSubmit={e => e.preventDefault()}>
        <Input
          type="text"
          title="Name"
          placeHolder="What's his/her name?"
          isRequired
        />
        <TextArea
          title="Description"
          placeHolder="Can you describe the streamer?"
          isRequired
        />
      </form>
    </HomePageWrapper>
  );
};

export default HomePage;
