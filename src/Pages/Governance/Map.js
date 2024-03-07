import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import axios from "axios";
import "./Map.scss";

function Map() {
  const [processedData, setProcessedData] = useState({});
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    position: { x: 0, y: 0 },
  });

  useEffect(() => {
    axios
      .get("https://infinite-wildwood-83288.herokuapp.com/api/orgmember")
      .then((res) => {
        const data = res.data.reduce((acc, member) => {
          acc[member.country] = member.delegate1.name;
          return acc;
        }, {});
        setProcessedData(data);
      })
      .catch((error) => {
        console.error("Error fetching organization members:", error);
      });
  }, []);

  function handleMouseMove(geography, evt) {
    const countryName = geography.properties.name;
    const delegateName = processedData[countryName];
    if (delegateName) {
      setTooltip({
        visible: true,
        content: `Country: ${countryName} | Delegate: ${delegateName}`,
        position: { x: evt.clientX, y: evt.clientY },
      });
    }
  }

  function handleMouseLeave() {
    setTooltip({ visible: false, content: "", position: { x: 0, y: 0 } });
  }

  return (
    <div>
      <ComposableMap className="map-container">
        <Geographies geography="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json">
          {({ geographies }) =>
            geographies.map((geography) => (
              <Geography
                key={geography.rsmKey}
                geography={geography}
                onMouseMove={(evt) => handleMouseMove(geography, evt)}
                onMouseLeave={handleMouseLeave}
                style={{
                  default: {
                    fill: "#C6C6C6",
                    outline: "none",
                  },
                  hover: {
                    fill: "#3E1893",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            left: `${tooltip.position.x}px`,
            top: `${tooltip.position.y}px`,
          }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
}

export default Map;
