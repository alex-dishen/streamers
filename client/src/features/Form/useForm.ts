import { FormEvent, useState } from 'react';
import { createStreamer, getAllStreamers } from 'api/streamersAPI';
import { returnRandomNumber } from 'features/Form/helpers';
import { FormProps } from 'features/Form/types';

export const useForm = ({ options, setData }: FormProps) => {
  const [platform, setPlatform] = useState(options[0].name);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const resetToDefaults = () => {
    setPlatform(options[0].name);
    setName('');
    setDescription('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const streamerData = {
      name: name,
      platform: platform,
      description: description,
      picture_index: returnRandomNumber(),
      upvotes: 0,
      downvotes: 0,
    };

    const response = await createStreamer(streamerData);
    resetToDefaults();

    if (response.status === 200) getAllStreamers(setData);
  };

  return {
    name,
    platform,
    description,
    setName,
    setPlatform,
    setDescription,
    handleSubmit,
  };
};
