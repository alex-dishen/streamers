import { PAGES } from 'constants';
import { SorryWrapper, StyledLink, Text } from 'components/NotFound/styles';

const Sorry = () => (
  <SorryWrapper>
    <Text>Sorry, we couldn't find the streamer</Text>
    <Text>😔</Text>
    <StyledLink to={PAGES.HOME}>Get Home</StyledLink>
  </SorryWrapper>
);

export default Sorry;
