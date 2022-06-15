<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="col-md-12">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-6">
                <h5 class="card-category">Penjualan Tiket</h5>
              </div>
              <div class="col-6 text-right">
                <h5 class="card-category">
                  {{ $moment().format("dddd, Do MMMM YYYY") }}
                </h5>
                <vue-time
                  :show-date="showDate"
                  :show-day="showDay"
                  :show-time="showTime"
                  :options="options"
                ></vue-time>
              </div>
            </div>

            <h2 class="card-title">
              <i class="tim-icons icon-calendar-60 text-info"></i> Tiket Wisata
            </h2>

            <h1 class="card-body text-center mt-3 mb-5">Rp 10.000</h1>

            <div class="container">
              <div class="row">
                <div class="col text-center">
                  <base-button type="info" class="btn-fill" @click="print">
                    Print
                  </base-button>
                </div>
              </div>
            </div>
          </template>

          <div class="card-footer m-0 pt-0">
            <div class="stats">
              <i class="tim-icons icon-single-02 text-success"></i> Admin :
              {{ admin }}
            </div>
          </div>
        </card>
        <card id="printMe" style="visibility: hidden"> Tiket Wisata KEKW </card>
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import moment from "moment";
export default {
  middleware: ["check-auth", "auth"],
  data() {
    return {
      admin: "",
      showDate: true,
      showDay: true,
      showTime: true,
      options: {
        timeZone: "Asia/Jakarta",
      },
    };
  },
  methods: {
    print() {
      // Pass the element id here
      this.$htmlToPaper("printMe", null, () => {
        console.log("Printing completed or was cancelled!");
      });
    },
  },
  async beforeMount() {
    let cookieadmin = Cookie.get("username");
    this.admin = cookieadmin;
  },
};
</script>

<style>
</style>