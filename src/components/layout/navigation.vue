<template>
  <nav :class="$style.navigation">
    <img
      :class="$style.logo"
      :src="require('@/assets/images/side.jpg')"
      alt=""
    />
    <h2>看啥子?不許看</h2>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@import "@/assets/scss/layout/_navigation.scss";
</style>
