import React from "react";

import { GuitarChart } from "../../types/GuitarChart";
import { GuitarChartDatabase } from "../../GuitarChartDatabase";
import { GuitarChartTrayComponent } from "../guitar-chart-tray-component/GuitarChartTrayComponent";
import { SearchElementComponent } from "../search-element-component/SearchElementComponent";

import "./GuitarChartSidebarComponent.scss";

export const GuitarChartSidebarComponent = React.memo(() => {
  const [charts, setCharts] = React.useState<GuitarChart[]>([]);
  const [searchVal, setSearchVal] = React.useState("");

  //Initial paint
  React.useEffect(() => {
    setCharts(GuitarChartDatabase.getCharts());
  }, []);

  //When search value changes...
  React.useEffect(() => {
    const newCharts = GuitarChartDatabase.getCharts(searchVal);
    setCharts(newCharts);
  }, [searchVal]);

  return (
    charts && (
      <span id="chart-tray">
        <SearchElementComponent search={(val: string) => setSearchVal(val)} />
        <GuitarChartTrayComponent charts={charts} />
      </span>
    )
  );
});
