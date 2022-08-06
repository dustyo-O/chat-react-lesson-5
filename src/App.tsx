import React, { useState } from 'react';
import { ImageRecongnition } from './components/ImageRecognition/ImageRecognition';
import { Popup } from './components/Popup/Popup';
import { TextInput } from './components/TextInput/TextInput';

function App() {
  const [url, setUrl] = useState('https://avatars.dzeninfra.ru/get-zen_doc/3229639/pub_62e3b0adb26655565fcd486e_62e3b14a0416b068e1274230/scale_1200');
  const [displayRecognition, setDisplayRecongnition] = useState(true);

  const handleNewUrlClick = () => {
    setUrl('https://bigpicture.ru/wp-content/uploads/2019/07/4326471_large-990x664.jpg');
  };

  const handleDeleteClick = () => {
    setDisplayRecongnition(prev => !prev);
  };

  const handleImageChange = (url: string) => {
    setUrl(url)
  }

  return (
    <div className="App">
      <TextInput onChange={handleImageChange} />
      {displayRecognition && <ImageRecongnition url={url} />}
      <button onClick={handleNewUrlClick}>Сменить картинку</button>
      <button onClick={handleDeleteClick}>Удалить</button>
      <Popup content="задонать коту!"/>
    </div>
  );
}

export default App;
