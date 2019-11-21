<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-toolbar class="deep-orange">
          <v-toolbar-title class="white--text">
            <h4>Signup</h4>
          </v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-card-text class="pt-4">
            <div>
              <v-form v-model="valid" ref="form">
                <v-text-field
                  label="Enter your e-mail address"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="Enter your password"
                  v-model="password"
                  min="8"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'password' : 'text'"
                  :rules="passwordRules"
                  @click:append="showPassword = !showPassword"
                  counter
                  required
                ></v-text-field>
                <v-layout justify-space-between>
                  <v-btn @click="submit" :class=" { 'amber darken-4 white--text' : valid, disabled: !valid }"> Login </v-btn>
                  <a href>Forgot Password</a>
                </v-layout>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$refs.form.$el.submit();
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scope>
/* #app {
  background-image: url("https://images.unsplash.com/photo-1497733942558-e74c87ef89db?dpr=1&auto=compress,format&fit=crop&w=1650&h=&q=80&cs=tinysrgb&crop=");
  background-size: cover;
  overflow: hidden;
} */

.loginOverlay {
  background: rgba(33, 150, 243, 0.3);
}

.photoCredit {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
</style>