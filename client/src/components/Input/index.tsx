import { InputProps } from 'components/Input/types';
import { InputWrapper, StyledInput } from 'components/Input/styles';
import { Star } from 'styles';
import { useState } from 'react';

const Input = ({
  type,
  title,
  value,
  placeHolder,
  isRequired,
  onChange,
}: InputProps) => {
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
        value={value}
        placeholder={placeHolder}
        autoComplete="off"
        required={isRequired}
        onChange={e => onChange(e.target.value)}
      />
    </InputWrapper>
  );
};

export default Input;
