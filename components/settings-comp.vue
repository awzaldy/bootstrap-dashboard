<template>
  <div>
    <card>
      <div class="row">
        <div class="col-lg-6">
          <div class="col-md-12">
            <h3 slot="header" class="title">Tambahkan Admin Tiket</h3>
          </div>
          <form>
            <div class="col-md-12">
              <base-input
                type="text"
                label="Username"
                v-model="formTiket.username"
              >
              </base-input>
            </div>
            <div class="col-md-12">
              <base-input
                type="email"
                label="Alamat Email"
                v-model="formTiket.email"
              >
              </base-input>
            </div>
            <div class="col-md-12">
              <base-input
                type="password"
                label="Password"
                v-model="formTiket.password"
              >
              </base-input>
            </div>
            <div class="col-md-12 mt-4">
              <base-button type="info" class="btn-fill" @click="onSubmit">
                Masuk
              </base-button>
            </div>
          </form>
        </div>
      </div>
    </card>
    <card>
      <div class="row">
        <div class="col-lg-6">
          <div class="col-md-12">
            <h3 slot="header" class="title">Tambahkan Admin Dashboard</h3>
          </div>
          <form>
            <div class="col-md-12">
              <base-input
                type="text"
                label="Username"
                v-model="formDashboard.username"
              >
              </base-input>
            </div>
            <div class="col-md-12">
              <base-input
                type="email"
                label="Alamat Email"
                v-model="formDashboard.email"
              >
              </base-input>
            </div>
            <div class="col-md-12">
              <base-input
                type="password"
                label="Password"
                v-model="formDashboard.password"
              >
              </base-input>
            </div>
            <div class="col-md-12 mt-4">
              <base-button type="info" class="btn-fill" @click="onSubmit2">
                Masuk
              </base-button>
            </div>
          </form>
        </div>
      </div>
    </card>
  </div>
</template>
<script>
export default {
    data() {
        return {
      formTiket: {
        email: "",
        password: "",
        username: "",
        role: "AdminTiket",
        uid: "",
      },
      formDashboard: {
        email: "",
        password: "",
        username: "",
        role: "AdminDashboard",
        uid: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("daftarAdmin", this.formTiket);
    },
    onSubmit2() {
      this.$store.dispatch("daftarAdmin", this.formDashboard);
    },
  },
};
</script>
<style></style>

