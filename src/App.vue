<template>
  <div :class="$style.layout">
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import axios from "axios";
import Navigation from "@/components/layout/navigation.vue";
import Footer from "@/components/layout/footer.vue";
export default {
  components: {
    Navigation,
    Footer,
  },
  mounted() {
    axios
      .get("http://18.191.222.23/api/example")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/layout/_layout.scss";
</style>
