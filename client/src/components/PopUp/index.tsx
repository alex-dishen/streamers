import { useStreamerContext } from 'contexts/StreamerContext';
import { PopUpWrapper } from 'components/PopUp/styles';

const PopUp = () => {
  const { errorMessage } = useStreamerContext();

  return <PopUpWrapper>{errorMessage}</PopUpWrapper>;
};

export default PopUp;
