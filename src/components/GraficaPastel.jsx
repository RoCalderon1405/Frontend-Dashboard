import React from "react";
import { ResponsivePie } from "@nivo/pie";

import { tokens } from "../themeSettings";
import { mockPieData as data } from "../data/data";
import { useSelector } from "react-redux";

const GraficaPastel = ({isDashboard = false}) => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  const colors = tokens(colorMode);

  return (
    <ResponsivePie
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
      keys={["Cajas", "Carpetas", "Expedientes", "ExpRecibidos", "No. Hojas"]}
      indexBy="country"
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.4}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={true}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 5]],
      }}
      colors={{ scheme: colorMode === "dark" ? "paired" : "category10" }}
      // Popout hover
      tooltip={({ datum: { id, value, color } }) => (
        <div
          style={{
            padding: 12,
            color,
            background: colors.grey[900],
          }}
        >
          <span>Personalizable</span>
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
      labelTextColor={colors.grey[900]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: colors.greenAccent[200],
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Gráfica de pastel"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default GraficaPastel;
