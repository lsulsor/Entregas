import React from 'react';
import { getMembers } from './api';

export const App: React.FunctionComponent = () => {
  React.useEffect(() => {
    getMembers().then((members) => {
      console.log({ members });
    });
  }, []);

  return <h1>05-Testing / 01 React</h1>;
};
