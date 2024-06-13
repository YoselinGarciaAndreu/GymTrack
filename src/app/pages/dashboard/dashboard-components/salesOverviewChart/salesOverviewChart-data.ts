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
            data: [],
            color: '#f76672',
        },
        {
            name: 'Grasa corporal',
            data: [],
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
            "14/6/2024", "14/6/2024", "14/6/2024", "14/6/2024", "14/6/2024", "14/6/2024", "14/6/2024"
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
