import { IMAGES, PAGES, PlatformIcons } from 'constants';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useStreamer } from './useStreamer';
import { StreamerProps } from './types';
import {
  StreamerWrapper,
  Rating,
  StreamerDetails,
  Image,
  BluredImage,
  Description,
} from './styles';

const Streamer = ({}: StreamerProps) => {
  useStreamer();
  const { state } = useLocation();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, description, platform, picture_index, upvotes, downvotes } =
    state.streamer;

  return (
    <StreamerWrapper>
      <Link to={PAGES.HOME}>Home</Link>
      <StreamerDetails>
        <Image src={IMAGES[picture_index]} />
        <BluredImage src={IMAGES[picture_index]} />
        <p>Hi, my name is {name} 👋</p>
        <p>I'm a {PlatformIcons[platform]} streamer</p>
        <Description>
          <p>Here is a bit more about me:</p>
          <p>{description}</p>
        </Description>
        <Rating>
          <p>This is how my audience rates me:</p>
          <div>
            <p>👍 {upvotes}</p>
            <p>👎 {downvotes}</p>
          </div>
        </Rating>
      </StreamerDetails>
    </StreamerWrapper>
  );
};

export default Streamer;
