<script lang="ts">
import { NavBar, Button } from 'vant'
export default {
  name: 'Layout',
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button
  }
}

</script>

<script lang="ts" setup>
import { router } from '@/routes'
import 'vant/es/button/style'
const onClickLeft = () => {
  router.go(1)
}
</script>

<template>
  <div>
    <van-button>sds</van-button>
<!--    <van-nav-bar-->
<!--        title="标题"-->
<!--        left-text="返回"-->
<!--        right-text="按钮"-->
<!--        left-arrow-->
<!--        @click-left="onClickLeft"-->
<!--    />-->
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar{
    position: fixed;
    top: 0;
  }
}
</style>
