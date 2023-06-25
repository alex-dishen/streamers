import { TextAreaProps } from 'components/TextArea/types';
import { TextAreaWrapper, StyledTextArea } from 'components/TextArea/styles';
import { Star } from 'styles';

const TextArea = ({ title, placeHolder, isRequired }: TextAreaProps) => {
  const lowerCaseTitle = title.toLowerCase();

  return (
    <TextAreaWrapper>
      <label htmlFor={lowerCaseTitle}>
        {title}
        {isRequired ? <Star>*</Star> : ''}
      </label>
      <StyledTextArea
        id={lowerCaseTitle}
        name={lowerCaseTitle}
        placeholder={placeHolder}
        required={isRequired}
      />
    </TextAreaWrapper>
  );
};

export default TextArea;
