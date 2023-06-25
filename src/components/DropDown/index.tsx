import { useDropDown } from 'components/DropDown/useDropDown';
import { DropDownProps } from 'components/DropDown/types';
import {
  DropDownWrapper,
  DropDownButton,
  DropDownOptions,
  DropDownItem,
} from 'components/DropDown/styles';
import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'assets/icons/chevron-up.svg';

const DropDown = ({ title, optionName, options, setOption }: DropDownProps) => {
  const { isShowOptions, dropDownRef, handleIsShowOptions } = useDropDown();

  return (
    <DropDownWrapper ref={dropDownRef} onClick={handleIsShowOptions}>
      <p>{title}</p>
      <DropDownButton type="button">
        {optionName} {isShowOptions ? <ChevronUp /> : <ChevronDown />}
      </DropDownButton>
      {isShowOptions && (
        <DropDownOptions>
          {options.map(({ id, name }) => (
            <DropDownItem
              key={id}
              onClick={() => setOption(name)}
              isHighlight={optionName === name}
            >
              {name}
            </DropDownItem>
          ))}
        </DropDownOptions>
      )}
    </DropDownWrapper>
  );
};

export default DropDown;
