import React from "react";

("use strict");

const e = React.createElement;

class MapComponent extends React.Component {
  componentDidMount() {
    const { FlaMap, map_cfg } = this.props; // Assuming FlaMap and map_cfg will be passed as props
    this.mapRef = new FlaMap(map_cfg);
    this.mapRef.draw("map");
  }

  render() {
    return e("div", { id: "map" });
  }
}

export default MapComponent; // Make MapComponent available for import
