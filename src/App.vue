<template>
  <div :class="$style.mask">
    <!-- <Footer></Footer> -->
    <div :class="$style.loading">
      <img :src="require('@/assets/images/gif/Eevee.gif')" alt="" />
      <img :src="require('@/assets/images/gif/sylveon.gif')" alt="" />
      <img :src="require('@/assets/images/gif/Eevee.gif')" alt="" />
      <img :src="require('@/assets/images/gif/sylveon.gif')" alt="" />
      <img :src="require('@/assets/images/gif/Eevee.gif')" alt="" />
      <img :src="require('@/assets/images/gif/sylveon.gif')" alt="" />
    </div>
  </div>
</template>
<script>
// import Footer from "@/components/layout/footer.vue";
export default {
  components: {
    // Footer,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/layout/_layout.scss";
.mask {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
