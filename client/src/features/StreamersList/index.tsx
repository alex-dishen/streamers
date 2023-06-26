import StreamerItem from 'features/StreamerItem';
import { ListProps } from 'features/StreamersList/types';
import { StyledList } from 'features/StreamersList/styles';

const StreamersList = ({ values }: ListProps) => {
  return (
    <StyledList>
      {values.map(value => (
        <StreamerItem key={value.streamer_id} value={value} />
      ))}
    </StyledList>
  );
};

export default StreamersList;
