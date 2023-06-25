import { InputProps } from 'components/Input/types';
import { InputWrapper, StyledInput } from 'components/Input/styles';
import { Star } from 'styles';

const Input = ({ type, title, placeHolder, isRequired }: InputProps) => {
  const lowerCaseTitle = title.toLowerCase();

  return (
    <InputWrapper>
      <label htmlFor={lowerCaseTitle}>
        {title}
        {isRequired ? <Star>*</Star> : ''}
      </label>
      <StyledInput
        type={type}
        id={lowerCaseTitle}
        name={lowerCaseTitle}
        placeholder={placeHolder}
        autoComplete="off"
        required={isRequired}
      />
    </InputWrapper>
  );
};

export default Input;
