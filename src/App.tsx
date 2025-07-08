import React from 'react';
import MyAvatar from 'components/my-avatar';
import IkeAvatar from './components/ike-avatar';
import EliadAvatar from 'components/eliad-avatar';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-center text-4xl font-bold py-8">CSS Friends</h1>
      <div className="flex flex-wrap gap-6 justify-around items-center flex-grow pt-4">
        <MyAvatar />
        <IkeAvatar />
        <div className="pb-4">
          <EliadAvatar />
        </div>
      </div>
    </div>
  );
};
export default App;
