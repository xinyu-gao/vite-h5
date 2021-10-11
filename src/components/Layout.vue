<script lang="ts">
//

export default {
  name: 'Layout'
  // components: {
  //   [NavBar.name]: NavBar
  // }
}
</script>

<script lang="ts" setup>
import { router } from '@/routes'
import { NavBar } from 'vant/es/nav-bar'
import 'vant/es/button/style'
const onClickLeft = () => {
  router.go(1)
}
</script>

<template>
  <div>
    <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
    />
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
