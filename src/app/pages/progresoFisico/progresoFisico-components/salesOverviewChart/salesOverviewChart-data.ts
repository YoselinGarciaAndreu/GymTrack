import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis, ApexGrid, ApexPlotOptions } from 'ng-apexcharts';

export interface SalesOverviewChart {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    grid: ApexGrid;
}

export const salesOverviewChartData: SalesOverviewChart = {
    series: [
        {
            name: 'Masa muscular',
            data: [30, 31, 31, 32, 33, 34, 34.5, 35],
            color: '#f76672',
        },
        {
            name: 'Grasa corporal',
            data: [24, 24, 23, 21, 21, 20, 19.5, 17],
            color: '#fa896b',
        },
    ],
    chart: {
        type: 'bar',
        height: 390,
        offsetX: -15,
        toolbar: { show: true },
        foreColor: '#adb0bb',
        fontFamily: 'inherit',
        sparkline: { enabled: false },
    },
    dataLabels: { enabled: false },
    plotOptions: {
        bar: { horizontal: false, columnWidth: '35%', borderRadius: 4 },
    },
    xaxis: {
        type: 'category',
        categories: [
            '1/08', '8/08', '15/08', '22/08', '29/08', '05/09', '12/09', '19/09',
        ],
        labels: {
            style: { cssClass: 'grey--text lighten-2--text fill-color' },
        },
    },
    yaxis: {
        show: true,
        min: 0,
        max: 50,
        tickAmount: 4,
        labels: {
            style: {
                cssClass: 'grey--text lighten-2--text fill-color',
            },
        },
    },
    grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        strokeDashArray: 3,
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    stroke: {
        show: true,
        width: 3,
        lineCap: 'butt',
        colors: ['transparent'],
    },
    tooltip: { theme: 'light' },
    legend: { show: false },
};
