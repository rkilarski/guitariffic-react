import { GuitarChart } from './types/GuitarChart';
import { GuitarChartData } from './GuitarChartData';

export class GuitarChartDatabase {
    private constructor() { }
    static addChart(chart: GuitarChart) { }
    static updateChart(chart: GuitarChart) { }
    static deleteChart(chart: GuitarChart) { }

    static getChart(id: number): GuitarChart {
        return new GuitarChart();
    }

    static getCharts(value?: any): GuitarChart[] {
        //console.log('searching ' + value);
        const charts = GuitarChartData.createDb().charts;
        if (!value) {
            return charts;
        } else {
            var newCharts: GuitarChart[];
            newCharts = [];

            for (let chart of charts) {
                if (chart.name.toUpperCase().indexOf(value.toUpperCase()) > -1) {
                    newCharts.push(chart);
                }
            }
            return newCharts;
        }
    }
}
