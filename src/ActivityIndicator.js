import React from 'react';
import Spinner from '@xkit/spinner';

// todo: props.size
// todo: props.color
const ActivityIndicator = () => {
  return (
    <Spinner
      styles={{
        primaryColor: '#ac884c'
      }}
    />
  );
};

export default ActivityIndicator;
