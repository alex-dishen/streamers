import { useState } from 'react';
import { useHomePage } from 'pages/HomePage/useHomePage';
import List from 'components/List';
import { MockData, Platforms } from 'pages/HomePage/constants';
import {
  HomePageWrapper,
  Header,
  ListWrapper,
  Hr,
  SubmitButton,
  StyledForm,
  FormTop,
} from 'pages/HomePage/styles';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import DropDown from 'components/DropDown';

const HomePage = () => {
  useHomePage();
  const [platform, setPlatform] = useState('Twitch');

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
      <StyledForm onSubmit={e => e.preventDefault()}>
        <FormTop>
          <Input
            type="text"
            title="Name"
            placeHolder="What's his/her name?"
            isRequired
          />
          <DropDown
            title="Platform"
            setOption={setPlatform}
            optionName={platform}
            options={Platforms}
          />
        </FormTop>
        <TextArea
          title="Description"
          placeHolder="Can you describe the streamer?"
          isRequired
        />
        <SubmitButton type="submit">Add New Streamer</SubmitButton>
      </StyledForm>
    </HomePageWrapper>
  );
};

export default HomePage;
