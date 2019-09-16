import React from "react";

import { GuitarChartRenderService } from "../../GuitarChartRenderService";
import { GuitarChart } from "../../types/GuitarChart";

import "./GuitarChartComponent.scss";

interface Props {
  chart: GuitarChart;
}

export const GuitarChartComponent = React.memo((props: Props) => {
  const [canvas, setCanvas] = React.useState<
    React.RefObject<HTMLCanvasElement>
  >(React.createRef());

  React.useEffect(() => {
    if (canvas.current) {
      GuitarChartRenderService.getCanvas(canvas.current, props.chart);
    }
  });

  return <canvas className="guitarchart" ref={canvas} />;
});
