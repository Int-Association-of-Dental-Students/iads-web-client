import React from "react";

class MapComponent extends React.Component {
  // componentDidMount() {
  //   const { FlaMap, map_cfg } = window; // Assuming FlaMap and map_cfg are globally available
  //   this.mapRef = new FlaMap(map_cfg);
  //   this.mapRef.draw("map");
  // }

  componentDidMount() {
    if (!window.FlaMap) {
      const script = document.createElement("script");
      script.src = "/IPMB_Map/map.js"; // Specify the URL to the script
      script.onload = () => {
        this.initializeMap();
      };
      document.head.appendChild(script);
    } else {
      this.initializeMap();
    }
  }

  initializeMap() {
    const { FlaMap, map_cfg } = window;
    this.mapRef = new FlaMap(map_cfg);
    this.mapRef.draw("map");
  }

  render() {
    return <div style={{ maxWidth: "800px", margin: "auto" }} id="map"></div>; // This div will hold the map
  }
}

export default MapComponent;
