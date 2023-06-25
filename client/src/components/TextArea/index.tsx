import { TextAreaProps } from 'components/TextArea/types';
import { TextAreaWrapper, StyledTextArea } from 'components/TextArea/styles';
import { Star } from 'styles';

const TextArea = ({
  title,
  value,
  placeHolder,
  isRequired,
  onChange,
}: TextAreaProps) => {
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
        value={value}
        placeholder={placeHolder}
        required={isRequired}
        onChange={e => onChange(e.target.value)}
      />
    </TextAreaWrapper>
  );
};

export default TextArea;
