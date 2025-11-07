import React from 'react';
import MyAvatar from 'components/my-avatar';
const App = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen m-auto">
      <MyAvatar />
      <h2>I am a software developer based in Berlin</h2>
    </div>
  );
};
export default App;
