import React from "react";

class MapComponent extends React.Component {
  componentDidMount() {
    const { FlaMap, map_cfg } = window; // Assuming FlaMap and map_cfg are globally available
    this.mapRef = new FlaMap(map_cfg);
    this.mapRef.draw("map");
  }

  render() {
    return <div style={{ maxWidth: "800px", margin: "auto" }} id="map"></div>; // This div will hold the map
  }
}

export default MapComponent;
