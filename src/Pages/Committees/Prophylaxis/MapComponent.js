import React, { useEffect } from "react";
// Import the map's CSS directly if possible, or include it in your global styles
// import "./mapStyles.css";

const MapComponent = () => {
  useEffect(() => {
    // Dynamically load the map's JavaScript to ensure it's executed at the right time
    const script = document.createElement("script");
    script.src = "./Map_Flashop/map.js"; // Adjust the path to the map's JavaScript file
    script.async = true;
    document.body.appendChild(script);

    // Clean up by removing the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="mapDiv" style={{ width: "100%", height: "520px" }}>
      {" "}
      {/* Adjust the size as needed */}{" "}
    </div>
  );
};

export default MapComponent;
