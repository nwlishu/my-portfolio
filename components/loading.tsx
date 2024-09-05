// components/LoadingScreen.js

import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 500);
  }, []);

  return (
    <>
      <div className="loadingScreen">
        <div className="loadingContent">
          <p>
            LOADING <span>{progress}%</span>
          </p>
        </div>
        <div className="progressBar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
