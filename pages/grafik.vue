<template>
  <div class="row">
    <div class="col-lg-9">
      <card type="chart">
        <template slot="header">
          <div class="row">
            <div class="col-sm-6">
              <h5 class="card-category">Grafik</h5>
              <h2 class="card-title">Data Kunjungan Perjam</h2>
            </div>
            <div class="col-sm-6 d-flex d-sm-block">
              <div
                class="btn-group btn-group-toggle"
                :class="isRTL ? 'float-left' : 'float-right'"
                data-toggle="buttons"
              >
                <label
                  v-for="(option, index) in blueBarChartCategories"
                  :key="option.name"
                  class="btn btn-sm btn-primary btn-simple"
                  :class="{ active: blueBarChart.activeIndex === index }"
                  :id="index"
                >
                  <input
                    type="radio"
                    @click="initChartPerjam(index)"
                    name="options"
                    autocomplete="off"
                    :checked="blueBarChart.activeIndex === index"
                  />
                  <span class="d-none d-sm-block">{{ option.name }}</span>
                  <span class="d-block d-sm-none">
                    <i :class="option.icon"></i>
                  </span>
                </label>
              </div>
            </div>
            <div class="chart-area">
              <bar-chart
                style="height: 100%"
                :chart-data="blueBarChart.chartData"
                :gradient-stops="blueBarChart.gradientStops"
                :extra-options="blueBarChart.extraOptions"
              >
              </bar-chart>
            </div>
          </div>
        </template>
      </card>
    </div>
    <div class="col-lg-3">
      <card type="chart">
        <template slot="header">
          <div class="row">
            <div class="col-sm-12">
              <h5 class="card-category">Jam Tersibuk</h5>
              <h2 class="card-title">18 : 00</h2>
              <div class="card-body">
                <h1 class="mb-1 mt-2">16</h1>
                <h5>Rata-Rata Kunjungan</h5>
                <h1 class="mb-1 mt-5">300</h1>
                <h5>Total Kunjugan</h5>
              </div>
            </div>
          </div>
        </template>
      </card>
    </div>

    <div class="col-lg-9">
      <card type="chart">
        <template slot="header">
          <div class="row">
            <div class="col-sm-6">
              <h5 class="card-category">Grafik</h5>
              <h2 class="card-title">Data Kunjungan Perhari</h2>
            </div>
            <div class="col-sm-6 d-flex d-sm-block">
              <div
                class="btn-group btn-group-toggle"
                :class="isRTL ? 'float-left' : 'float-right'"
                data-toggle="buttons"
              >
                <label
                  v-for="(option, index) in blueBarChartCategories"
                  :key="option.name"
                  class="btn btn-sm btn-primary btn-simple"
                  :class="{ active: blueBarChart.activeIndex === index }"
                  :id="index"
                >
                  <input
                    type="radio"
                    @click="initChartPerjam(index)"
                    name="options"
                    autocomplete="off"
                    :checked="blueBarChart.activeIndex === index"
                  />
                  <span class="d-none d-sm-block">{{ option.name }}</span>
                  <span class="d-block d-sm-none">
                    <i :class="option.icon"></i>
                  </span>
                </label>
              </div>
            </div>
            <div class="chart-area">
              <line-chart
                style="height: 100%"
                :chart-data="greenLineChart.chartData"
                :gradient-stops="greenLineChart.gradientStops"
                :extra-options="greenLineChart.extraOptions"
              >
              </line-chart>
            </div>
          </div>
        </template>
      </card>
    </div>
    <div class="col-lg-3">
      <card type="chart">
        <template slot="header">
          <div class="row">
            <div class="col-sm-12">
              <h5 class="card-category">Hari Tersibuk</h5>
              <h2 class="card-title">Sabtu</h2>
              <div class="card-body">
                <h1 class="mb-1 mt-2">150</h1>
                <h5 style="margin-top: 7px">Rata-Rata Kunjungan</h5>
                <h1 class="mb-1 mt-5">15,000</h1>
                <h5 style="margin-top: 7px">Total Kunjugan</h5>
              </div>
            </div>
          </div>
        </template>
      </card>
    </div>

    <div class="col-12">
      <card type="chart">
        <template slot="header">
          <div class="row">
            <div class="col-sm-6">
              <h5 class="card-category">Grafik</h5>
              <h2 class="card-title">Kunjungan Bulanan</h2>
            </div>
          </div>
          <div class="chart-area">
            <line-chart
              style="height: 100%"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :gradient-colors="bigLineChart.gradientColors"
              :gradient-stops="bigLineChart.gradientStops"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </div>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import * as chartConfigs from "@/components/Charts/config";
import TaskList from "@/components/Dashboard/TaskList";
import config from "@/config";
import { Table, TableColumn } from "element-ui";
import moment from "moment";

let harini = moment().format("dddd, DD-MMM-YYYY");

let chartPerjamData = [
  [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
  [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
];

let chartPerjamLabels = [
  "08.00",
  "09.00",
  "10.00",
  "11.00",
  "12.00",
  "13.00",
  "14.00",
  "15.00",
  "16.00",
  "17.00",
  "18.00",
  "19.00",
  "20.00",
];

let chartPerjamDatasetOptions = {
  fill: true,
  borderColor: config.colors.info,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
};

let bigChartData = [
  [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
  [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
  [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
];
let bigChartLabels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
let bigChartDatasetOptions = {
  fill: true,
  borderColor: config.colors.primary,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
  pointBackgroundColor: config.colors.primary,
  pointBorderColor: "rgba(255,255,255,0)",
  pointHoverBackgroundColor: config.colors.primary,
  pointBorderWidth: 20,
  pointHoverRadius: 4,
  pointHoverBorderWidth: 15,
  pointRadius: 4,
};

export default {
  middleware: ["check-auth", "auth"],
  name: "dashboard",
  components: {
    LineChart,
    BarChart,
    TaskList,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  data() {
    return {
      datePicker: new Date(),
      datahariini: harini,
      tableData: [
        {
          id: 1,
          name: "Dakota Rice",
          salary: "$36.738",
          country: "Niger",
          city: "Oud-Turnhout",
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,789",
          country: "Curaçao",
          city: "Sinaai-Waas",
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Baileux",
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Overland Park",
        },
        {
          id: 5,
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kärnten",
        },
      ],
      bigLineChart: {
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              ...bigChartDatasetOptions,
              data: bigChartData[0],
            },
          ],
          labels: bigChartLabels,
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: [],
      },
      purpleLineChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: [
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
            "Minggu",
          ],
          datasets: [
            {
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0],
      },
      greenLineChart: {
        extraOptions: chartConfigs.greenChartOptions,
        chartData: {
          labels: [
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
            "Minggu",
          ],
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.danger,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [30, 27, 60, 12, 12, 50, 65],
            },
          ],
        },
        gradientColors: [
          "rgba(66,134,121,0.15)",
          "rgba(66,134,121,0.0)",
          "rgba(66,134,121,0)",
        ],
        gradientStops: [1, 0.4, 0],
      },
      blueBarChart: {
        activeIndex: 0,
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          datasets: [
            {
              ...chartPerjamDatasetOptions,
              data: chartPerjamData[0],
            },
          ],
          labels: chartPerjamLabels,
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
    };
  },
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    blueBarChartCategories() {
      return [
        { name: "Rata-Rata Kunjungan", icon: "tim-icons icon-single-02" },
        {
          name: "Total Kunjungan",
          icon: "tim-icons icon-gift-2",
        },
      ];
    },
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            ...bigChartDatasetOptions,
            data: bigChartData[index],
          },
        ],
        labels: bigChartLabels,
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
    calcDate(hari) {
      let nowDate = moment();
      let pickDate = moment(nowDate, "YYYY-MM-DD");
      return pickDate;
    },
    initChartPerjam(index) {
      let chartData = {
        datasets: [
          {
            ...chartPerjamDatasetOptions,
            data: chartPerjamData[index],
          },
        ],
        labels: chartPerjamLabels,
      };
      this.blueBarChart.chartData = chartData;
      this.blueBarChart.activeIndex = index;
    },
  },
  mounted() {
    this.initBigChart(0);
  },
};
</script>
<style></style>