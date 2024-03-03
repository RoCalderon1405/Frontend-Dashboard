import React from "react";

import { ResponsiveChoropleth } from "@nivo/geo";
import { useSelector } from "react-redux";

import { tokens } from "../themeSettings";
import { mockGeographyData as data } from "../data/data";
import { geoFeatures } from "../data/GeoFeatures";

const GraficaGeo = ({ isDashboard }) => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  const colors = tokens(colorMode);
  
  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fontSize: 18,
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: { stroke: colors.grey[100] },
            text: colors.grey[100],
          },
        },
        text: {
          fill: colors.grey[100],
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      //   colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: colors.grey[400],
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GraficaGeo;
