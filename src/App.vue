<template>
  <div>
    <v-app v-if="!isMainPage()">
      <v-app-bar app color="deep-orange" dark>
        <v-toolbar-title>
          <router-link to="/">
            <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="@/assets/images/main/logo.svg" transition="scale-transition" />
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text rounded to="/products">Products</v-btn>
        <v-btn text rounded to="/signup">Signup</v-btn>
      </v-app-bar>
      <v-content>
        <router-view />
      </v-content>
    </v-app>
    <router-view v-else />
  </div>
</template>

<script>
import MainPage from '@/views/MainPage.vue'

export default {
  data: () => ({
    //
  }),
  methods: {
    isMainPage() {
      var isMain = false;
      if (window.location.pathname === "/") {
        isMain = true;
      }
      return isMain;
    }
  }
};
</script>
