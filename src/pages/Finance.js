import React, { useContext } from "react";

const Finance = () => {
  const webpageUrl = `https://metatinder-wallet.vercel.app/`;

  const iframeStyles = {
    width: "100%",
    height: "100%",
    border: "none",
    margin: 0,
    padding: 0,
  };

  const containerStyles = {
    width: "117%",
    height: "100vh",
    overflow: "hidden",
  };

  return (
    <div style={containerStyles}>
      <iframe
        src={webpageUrl}
        title="Embedded Website"
        style={iframeStyles}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Finance;