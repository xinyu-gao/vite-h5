<template>
  <div>
    <p class="prompt">请填写您的身份信息</p>
    <van-form @submit="onSubmit" validate-trigger="onSubmit">
      <div class="cell-group">
        <van-cell-group inset>
          <van-field
              v-model="citizenName"
              label="姓名"
              placeholder="请输入您的姓名"
              :rules="[{ validator: validatorCitizenName}]"
          />
        </van-cell-group>
      </div>
      <div class="cell-group">
        <van-cell-group inset>
          <van-field
              v-model="citizenID"
              label="身份证号"
              placeholder="请输入您的身份证号码"
              :rules="[{ validator: validatorCitizenID}]"
          />
        </van-cell-group>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="default" native-type="submit">
          查 询
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { queryOrder } from '@/apis/query'
import { router } from '@/routes'
import { validatorCitizenName, validatorCitizenID } from '@/utils/validate'

const citizenName = ref('高新雨')
const citizenID = ref('220323199906231618')
const onSubmit = () => {
  const params: queryParams = {
    citizenName: citizenName.value,
    citizenID: citizenID.value
  }
  console.log(params)
  router.push('/query_result')
  // queryOrder(params)
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
}

</script>

<style scoped lang="scss">

.prompt {
  margin: 0;
  padding: 25px 18px 5px;
  color: #654646;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}

.cell-group {
  margin-top: 15px;
}

.query-button-div {
  margin-top: 30px;
  text-align: center;
}

</style>
