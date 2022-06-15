<template>
  <card>
    <div class="row">
      <div class="col-lg-6">
        <img src="@/assets/images/2.jpg" alt="" />
      </div>
      <div class="col-lg-6">
        <div class="col-md-12">
          <h3 slot="header" class="title">Enterbiner Creative</h3>
        </div>
        <form @submit.prevent="updateProfile">
          <div class="col-md-12">
            <base-input type="email" label="Alamat Email" v-model="email">
            </base-input>
          </div>
          <div class="col-md-12">
            <base-input type="password" label="Password" v-model="password">
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
</template>
<script>
import Cookie from "js-cookie";
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      uid: "",
    };
  },
  methods: {
    async onSubmit() {
      await this.$store
        .dispatch("authAdmin", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          let id = Cookie.get("uid");
          console.log("ini id dari cookie " + id);
          axios
            .get(process.env.baseUrl + "/DataAdmin/" + id + ".json")
            .then((res) => {
              let role = res.data.role;
              let username = res.data.username;
              Cookie.set("username", username);
              if (role === "AdminTiket") {
                this.$router.push({ path: `/tiket`, force: true });
              }
              if (role === "AdminDashboard") {
                this.$router.push({ path: `/dashboard`, force: true });
              }
            })
            .catch((e) => context.error(e));
        });
    },
  },
};
</script>
<style></style>
