import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const data = [
  { name: "Afghanistan", text: "Text to show for Afghanistan" },
  { name: "Albania", text: "Text to show for Albania" },
  { name: "Algeria", text: "Text to show for Algeria" },
  { name: "Brazil", text: "Text to show for Brazil" },
  // Add more countries here
];

function Map() {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  function handleHover(geography) {
    const countryName = geography.properties.name;
    const countryData = data.find((item) => item.name === countryName);
    if (countryData != null) {
      setHoveredCountry(countryData.text);
    } else {
      setHoveredCountry(null);
    }
  }

  return (
    <div>
      <ComposableMap className="map-container">
        <Geographies geography="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json">
          {({ geographies }) =>
            geographies.map((geography) => {
              const countryName = geography.properties.name;
              const countryData = data.find(
                (item) => item.name === countryName
              );
              return (
                <Geography
                  key={geography.rsmKey}
                  geography={geography}
                  onMouseEnter={() => handleHover(geography)}
                  onMouseLeave={() => setHoveredCountry(null)}
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
                  data-tip={hoveredCountry}
                  data-for={countryName} // added this line
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {data.map(({ name, text }) => (
        <Tooltip id={name} key={name}>
          {text}
        </Tooltip>
      ))}
    </div>
  );
}

export default Map;
