import React, { useEffect, useState, useRef } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import axios from "axios";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

function Map() {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [orgMembers, setOrgMembers] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const tooltipRef = useRef(null);
  const tooltipInstance = useRef(null);

  useEffect(() => {
    axios
      .get("https://infinite-wildwood-83288.herokuapp.com/api/orgmember")
      .then((res) => {
        setOrgMembers(res.data);
        setProcessedData(
          res.data.map((member) => ({
            name: member.country,
            text: member.delegate1.name,
          }))
        );
      });
  }, []);

  useEffect(() => {
    if (tooltipRef.current && !tooltipInstance.current) {
      tooltipInstance.current = tippy(tooltipRef.current, {
        content: "",
        arrow: true,
        delay: [500, 0],
        placement: "top",
      });
    }
  }, []);

  function handleHover(geography) {
    const countryName = geography.properties.name;
    const countryData = processedData?.find(
      (item) => item.name === countryName
    );
    if (countryData != null) {
      setHoveredCountry(countryData.text);
      tooltipInstance.current.setContent(countryData.text);
      tooltipInstance.current.show();
    } else {
      setHoveredCountry(null);
      tooltipInstance.current.hide();
    }
  }

  return (
    <div>
      <ComposableMap className="map-container">
        <Geographies geography="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json">
          {({ geographies }) =>
            geographies.map((geography) => {
              const countryName = geography.properties.name;
              const countryData = processedData?.find(
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
                  ref={tooltipRef}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {hoveredCountry}
    </div>
  );
}

export default Map;
