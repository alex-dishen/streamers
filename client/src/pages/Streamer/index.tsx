import { IMAGES, PAGES, PlatformIcons } from 'constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { StateT } from 'pages/Streamer/types';
import {
  StreamerWrapper,
  HomeButton,
  StreamerDetails,
  Image,
  BlurredImage,
  Rating,
  Description,
  PlatformLine,
} from 'pages/Streamer/styles';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';

const Streamer = () => {
  const { state }: StateT = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, description, platform, picture_index, upvotes, downvotes } =
    state.streamer;

  return (
    <StreamerWrapper>
      <div>
        <HomeButton onClick={() => navigate(PAGES.HOME)}>
          <ArrowLeft />
          Home
        </HomeButton>
        <StreamerDetails>
          <Image src={IMAGES[picture_index]} />
          <BlurredImage src={IMAGES[picture_index]} />
          <p>Hi, my name is {name} 👋</p>
          <PlatformLine>I'm a {PlatformIcons[platform]} streamer</PlatformLine>
          <Description>
            <p>Here is a bit more about me:</p>
            <p>{description}</p>
          </Description>
          <Rating>
            <p>This is how my audience rates me:</p>
            <div>
              <p>👍 {upvotes || ''}</p>
              <p>👎 {downvotes || ''}</p>
            </div>
          </Rating>
        </StreamerDetails>
      </div>
    </StreamerWrapper>
  );
};

export default Streamer;
