import React, {useEffect} from 'react';
import {
  isAndroid,
  isIOS
} from "react-device-detect";

function App() {

  useEffect(() => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.putatoeapp.application";
    }else if(isIOS) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.putatoeapp.application";
    } else{
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.putatoeapp.application";
    }
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;