import { IMAGES } from 'constants';
import { ListProps } from 'components/StreamersList/types';
import {
  StyledList,
  Option,
  CrossButton,
  Image,
  GlowingImage,
  Rating,
  OptionBody,
} from 'components/StreamersList/styles';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import { useNavigate } from 'react-router-dom';

const StreamersList = ({ values, onDelete, voteClick }: ListProps) => {
  const navigate = useNavigate();

  return (
    <StyledList>
      {values.map(value => (
        <Option key={value.streamer_id}>
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
                voteClick(value.streamer_id, 'upvotes', ++value.upvotes)
              }
            >
              👍 {value.upvotes || ''}
            </p>
            <p
              onClick={() =>
                voteClick(value.streamer_id, 'downvotes', ++value.downvotes)
              }
            >
              👎 {value.downvotes || ''}
            </p>
          </Rating>
        </Option>
      ))}
    </StyledList>
  );
};

export default StreamersList;
