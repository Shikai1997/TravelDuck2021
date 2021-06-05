<template>
  <section :class="$style.home">
    <header>
      <h1>this is home page</h1>
      <h2>暫時這樣吧~看起來有個東東，還有可愛的伊布</h2>
      <img :src="require('@/assets/images/gif/Eevee.gif')" alt="">
    </header>
    <div :class="$style.container">
      <img :src="require('@/assets/images/gif/Eevee.gif')" alt="">
      <h2>G米大神操刀資料庫，敬請期待</h2>
      <h2>業界最強實力，台灣資料庫論壇主席</h2>
      <button>這裡去看一下詳情頁吧!</button><br>
      <button>或者點這顆?</button><br>
      <button>還是這顆應該也不錯</button><br>
      <button>也許你應該回去點看看第一顆</button><br>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" module>
  @import '@/assets/scss/pages/_home.scss';
</style>