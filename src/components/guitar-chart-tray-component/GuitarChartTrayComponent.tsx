import React from "react";

import { GuitarChartComponent } from "../guitar-chart-component/GuitarChartComponent";
import { GuitarChart } from "../../types/GuitarChart";

interface Props {
  charts: GuitarChart[];
}

export const GuitarChartTrayComponent = React.memo((props: Props) => {
  const charts = props.charts;
  if (!charts) {
    return <div>No Charts Available</div>;
  }
  const chartHtml = charts.map((chart, step) => {
    return <GuitarChartComponent key={chart.name + step} chart={chart} />;
  });
  return <div>{chartHtml}</div>;
});
