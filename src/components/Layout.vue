<template>
  <div class="app-wrapper">
    <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
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

const onClickRight = () => {
  router.push('/about')
}
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
}
</style>
