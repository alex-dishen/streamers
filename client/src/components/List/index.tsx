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
import Panda from 'assets/images/panda.jpg';
import SpaceMan from 'assets/images/space_man.jpg';
import SleepingPanda from 'assets/images/sleeping_panda.jpg';
import Cat from 'assets/images/cat.jpg';
import Robot from 'assets/images/robot.jpg';
import Zebra from 'assets/images/zebra.jpg';

const List = ({ values, onClick, onDelete }: ListProps) => {
  const images = [Panda, SpaceMan, SleepingPanda, Cat, Robot, Zebra];

  return (
    <StyledList>
      {values.map(
        ({ streamer_id, name, upvotes, downvotes, picture_index }) => (
          <Option key={streamer_id} onClick={onClick}>
            <CrossButton
              onClick={() => {
                onDelete(streamer_id);
              }}
            >
              <Cross />
            </CrossButton>
            <OptionBody>
              <Image src={images[picture_index]} alt="" />
              <GlowingImage src={images[picture_index]} alt="" />
              <p>{name}</p>
              <Rating>
                <p>👍 {upvotes || ''}</p>
                <p>👎 {downvotes || ''}</p>
              </Rating>
            </OptionBody>
            <PenButton>
              <Pen />
            </PenButton>
          </Option>
        ),
      )}
    </StyledList>
  );
};

export default List;
