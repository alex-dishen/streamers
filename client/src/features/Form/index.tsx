import Input from 'components/Input';
import DropDown from 'components/DropDown';
import TextArea from 'components/TextArea';
import { FormProps } from 'features/Form/types';
import {
  FormBody,
  FormTop,
  StyledForm,
  SubmitButton,
} from 'features/Form/styles';
import { useForm } from './useForm';

const Form = ({ options, setData }: FormProps) => {
  const {
    name,
    platform,
    description,
    setName,
    setPlatform,
    setDescription,
    handleSubmit,
  } = useForm({ options, setData });

  return (
    <StyledForm
      style={{ backdropFilter: 'blur(15px)' }}
      onSubmit={handleSubmit}
    >
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
            options={options}
          />
        </FormTop>
        <TextArea
          title="Description"
          placeHolder="Can you describe the streamer?"
          isRequired
          value={description}
          onChange={setDescription}
        />
        <SubmitButton type="submit">Add New Streamer</SubmitButton>
      </FormBody>
    </StyledForm>
  );
};

export default Form;
