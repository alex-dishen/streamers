import { Platforms } from 'constants';
import { FormEvent, useState } from 'react';
import { createStreamer } from 'api/streamersAPI';
import { useStreamerContext } from 'contexts/StreamerContext';
import { returnRandomNumber } from 'features/Form/helpers';
import { ResponseT } from 'types';
import { handleError } from 'helpers';

export const useForm = () => {
  const { streamers, setStreamers, setShowError, setErrorMessage } =
    useStreamerContext();
  const [platform, setPlatform] = useState(Platforms[0].name);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const resetToDefaults = () => {
    setPlatform(Platforms[0].name);
    setName('');
    setDescription('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setShowLoader(true);

    const streamerData = {
      name: name,
      platform: platform,
      description: description,
      picture_index: returnRandomNumber(),
      upvotes: 0,
      downvotes: 0,
    };

    const response = (await createStreamer(streamerData)) as ResponseT;

    if (response.status !== 200) {
      setShowLoader(false);

      return handleError(response.response.data, setErrorMessage, setShowError);
    }

    resetToDefaults();
    setStreamers([...streamers, response.data[0]]);
    setShowLoader(false);
  };

  return {
    name,
    platform,
    showLoader,
    description,
    setName,
    setPlatform,
    setDescription,
    handleSubmit,
  };
};
