import { images } from 'constants';
import { ListProps } from 'components/StreamersList/types';
import {
  StyledList,
  Option,
  CrossButton,
  Image,
  GlowingImage,
  Rating,
} from 'components/StreamersList/styles';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';

const StreamersList = ({ values, onClick, onDelete, voteClick }: ListProps) => (
  <StyledList>
    {values.map(({ streamer_id, name, upvotes, downvotes, picture_index }) => (
      <Option key={streamer_id} onClick={onClick}>
        <CrossButton
          onClick={() => {
            onDelete(streamer_id);
          }}
        >
          <Cross />
        </CrossButton>
        <Image src={images[picture_index]} alt="" />
        <GlowingImage src={images[picture_index]} alt="" />
        <p>{name}</p>
        <Rating>
          <p onClick={() => voteClick(streamer_id, 'upvotes', ++upvotes)}>
            👍 {upvotes || ''}
          </p>
          <p onClick={() => voteClick(streamer_id, 'downvotes', ++downvotes)}>
            👎 {downvotes || ''}
          </p>
        </Rating>
      </Option>
    ))}
  </StyledList>
);

export default StreamersList;
