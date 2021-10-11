<template>
  <div>
    <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
    <van-button type="primary" @click="toOther">To About</van-button>
  </div>
</template>

<script setup lang="ts">
import router from '@/routes'
// import { hello } from '@/apis/user'
import { userStore } from '@/stores/user'

const user = userStore()
console.log(user.getCounter)
user.plusOne()
console.log(user.getCounter)

function toOther() {
  // hello()
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  router.push('/about')
}
</script>

<style scoped lang="scss">
$green: #42b983;
a {
 color: $green;
}
</style>
