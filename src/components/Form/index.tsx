import { useState } from 'react';
import Input from 'components/Input';
import DropDown from 'components/DropDown';
import TextArea from 'components/TextArea';
import { FormProps } from 'components/Form/types';
import {
  FormBody,
  FormTop,
  StyledForm,
  SubmitButton,
} from 'components/Form/styles';

const Form = ({ options }: FormProps) => {
  const [platform, setPlatform] = useState('Twitch');

  return (
    <StyledForm onSubmit={e => e.preventDefault()}>
      <FormBody>
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
            options={options}
          />
        </FormTop>
        <TextArea
          title="Description"
          placeHolder="Can you describe the streamer?"
          isRequired
        />
        <SubmitButton type="submit">Add New Streamer</SubmitButton>
      </FormBody>
    </StyledForm>
  );
};

export default Form;
