import { useState, useRef } from 'react';
import useClickOutside from 'hooks/useClickOutside';

export const useDropDown = () => {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleIsShowOptions = () => setIsShowOptions(!isShowOptions);

  useClickOutside(isShowOptions, dropDownRef, handleIsShowOptions);

  return { isShowOptions, dropDownRef, handleIsShowOptions };
};
