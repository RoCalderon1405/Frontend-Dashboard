import React from "react";

import { ResponsiveLine } from "@nivo/line";
import { useSelector } from "react-redux";

import { tokens } from "../themeSettings";
import { mockLineData as data } from "../data/data";

const GraficaLineas = ({ isDashboard }) => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  const colors = tokens(colorMode);

  return (
    <ResponsiveLine
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
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
          },
        },
        text: {
          fontSize: 11,
          fill: colors.primary[100],
        },

        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            backgroundColor:colors.greenAccent[500],
            color: colors.primary[500],
          },
        },
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: isDashboard ? undefined : "Eje x",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: isDashboard ? undefined : "Eje Y",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={isDashboard ? { scheme: "category10" } : { scheme: "dark2" }}
      pointSize={10}
      pointColor={colors.blueAccent[900]}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      enableArea={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default GraficaLineas;
