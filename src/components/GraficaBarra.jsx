import React from "react";
import { ResponsiveBar } from "@nivo/bar";

import { mockBarData as data } from "../data/data";
import { useSelector } from "react-redux";
import { tokens } from "../themeSettings";

const GraficaBarra = ({ isDashboard = false }) => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  const colors = tokens(colorMode);
  return (
    <ResponsiveBar
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
      keys={["Cajas", "Carpetas", "Expedientes", "Incidencias"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: colorMode === "dark" ? "paired" : "category10" }}
      // Popout hover
      tooltip={({ id, value, color }) => (
        <div
          style={{
            padding: 12,
            color,
            background: "#222222",
          }}
        >
          <span>Personalizable </span>
          <br />
          <strong>
            {id}: {value}
          </strong>
        </div>
      )}
      //

      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 90,
        // Configurar el axis bottom
        // legend: isDashboard ? undefined : "Unidad",

        legendPosition: "middle",
        legendOffset: 50,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // Configurar el axis left
        legend: isDashboard ? undefined : "Cantidad",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={20}
      labelTextColor={colors.grey[900]}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 2,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Gráfica de barras"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default GraficaBarra;
