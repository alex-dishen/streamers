import { ListProps } from 'components/List/types';
import {
  StyledList,
  Option,
  CrossButton,
  Image,
  GlowingImage,
  Rating,
  OptionBody,
  PenButton,
} from 'components/List/styles';
import { ReactComponent as Pen } from 'assets/icons/pen.svg';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';

const List = ({ value, onClick }: ListProps) => {
  return (
    <StyledList>
      {value.map(({ id, name, picture, upVotes, downVotes }) => (
        <Option key={id} onClick={onClick}>
          <CrossButton>
            <Cross />
          </CrossButton>
          <OptionBody>
            <Image src={picture} alt="" />
            <GlowingImage src={picture} alt="" />
            <p>{name}</p>
            <Rating>
              <p>👍 {upVotes}</p>
              <p>👎 {downVotes || ''}</p>
            </Rating>
          </OptionBody>
          <PenButton>
            <Pen />
          </PenButton>
        </Option>
      ))}
    </StyledList>
  );
};

export default List;
