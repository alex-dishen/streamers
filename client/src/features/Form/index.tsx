import { Platforms } from 'constants';
import { CircularProgress } from 'react-cssfx-loading';
import Input from 'components/Input';
import DropDown from 'components/DropDown';
import TextArea from 'components/TextArea';
import { useForm } from 'features/Form/useForm';
import {
  FormBody,
  FormTop,
  StyledForm,
  SubmitButton,
} from 'features/Form/styles';
import { useTheme } from 'styled-components';

const Form = () => {
  const {
    name,
    platform,
    showLoader,
    description,
    setName,
    setPlatform,
    setDescription,
    handleSubmit,
  } = useForm();
  const theme = useTheme();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormBody>
        <FormTop>
          <Input
            type="text"
            title="Name"
            placeHolder="What's his/her name?"
            value={name}
            isRequired
            onChange={setName}
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
          value={description}
          onChange={setDescription}
        />
        {showLoader ? (
          <CircularProgress height="38px" color={theme.colors.blue[600]} />
        ) : (
          <SubmitButton type="submit">Add New Streamer</SubmitButton>
        )}
      </FormBody>
    </StyledForm>
  );
};

export default Form;
