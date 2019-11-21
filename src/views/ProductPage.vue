<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <h3>제조사</h3>
        <v-btn-toggle v-model="companyList" tile color="deep-purple accent-3" group multiple>
          <v-btn value="samsung">삼성</v-btn>
          <v-btn value="apple">Apple</v-btn>
          <v-btn value="lg">LG</v-btn>
          <v-btn value="etc">기타</v-btn>
        </v-btn-toggle>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="4">
        <h3>할인 방법</h3>
        <v-overflow-btn
          height="40px"
          class="my-2"
          :items="support"
          label="더 좋은 방법"
          target="#dropdown-example"
        ></v-overflow-btn>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="3"
        class="pa-1 pt-5"
        v-for="(product, index) in productList"
        :key="index"
      >
        <product-card-component :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCardComponent from "../components/ProductCardComponent";
import axios from "axios";
export default {
  components: { ProductCardComponent },
  data() {
    return {
      companyList: ["samsung", "apple"],
      support: [
        {
          text: "복지포인트 사용",
          value: "welfare",
          callback: () => console.log("wel")
        },
        {
          text: "캐시백 환급",
          value: "cashbag",
          callback: () => console.log("cash")
        }
      ],
      products: []
    };
  },
  computed: {
    productList() {
      return this.products.filter(p => this.companyList.includes(p.brand));
    }
  },
  created() {
    axios
      .get("http://localhost:3000/cellphones") // Does a get request
      .then(response => {
        this.products = response.data; // For now, logs out the response
      })
      .catch(error => {
        console.log("There was an error:", error.response); // Logs out the error
      });
  }
};
</script>

<style>
</style>