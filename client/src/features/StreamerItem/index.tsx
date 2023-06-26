import { IMAGES } from 'constants';
import { useNavigate } from 'react-router-dom';
import { useStreamerItem } from 'features/StreamerItem/useStreamerItem';
import { StreamerItemProps } from 'features/StreamerItem/types';
import {
  CrossButton,
  GlowingImage,
  Image,
  Option,
  OptionBody,
  Rating,
} from 'features/StreamerItem/styles';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';

const StreamerItem = ({ value }: StreamerItemProps) => {
  const { onVoteClick, onDelete } = useStreamerItem();
  const navigate = useNavigate();

  return (
    <Option>
      <CrossButton
        onClick={() => {
          onDelete(value.streamer_id);
        }}
      >
        <Cross />
      </CrossButton>
      <OptionBody
        onClick={() => {
          navigate(`/streamer/${value.streamer_id}`, {
            state: { streamer: value },
          });
        }}
      >
        <Image src={IMAGES[value.picture_index]} />
        <GlowingImage src={IMAGES[value.picture_index]} />
        <p>{value.name}</p>
      </OptionBody>
      <Rating>
        <p
          onClick={() =>
            onVoteClick(value.streamer_id, 'upvotes', value.upvotes + 1)
          }
        >
          👍 {value.upvotes || ''}
        </p>
        <p
          onClick={() =>
            onVoteClick(value.streamer_id, 'downvotes', value.downvotes + 1)
          }
        >
          👎 {value.downvotes || ''}
        </p>
      </Rating>
    </Option>
  );
};

export default StreamerItem;
