<template>
  <div class="app-wrapper">
    <van-nav-bar
        title="缴费查询"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component"  class="app-body"/>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { router } from '@/routes'

const onClickLeft = () => {
  router.go(-1)
}

</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
}
</style>
