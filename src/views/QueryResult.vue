<template>
  <div style="margin-top: 20px">
    <van-cell-group inset title="应缴金额">
      <van-cell title="合计（元）:" :value="amountShould"/>
    </van-cell-group>
    <van-cell-group inset title="已缴金额">
      <van-cell title="合计（元）:" :value="amountPaid"/>
    </van-cell-group>
    <van-divider/>
    <van-form @submit="paySubmit" validate-trigger="onSubmit">
      <van-cell-group inset title="应缴金额">
        <van-field
            v-model="amountPay"
            label="金额"
            placeholder="请输入您的缴纳金额"
            :rules="[{ validator: validatorMoneyAmount}]"

        />
      </van-cell-group>

      <div style="margin: 20px;">
        <van-button round block type="default" native-type="submit">
          确认缴费
        </van-button>
      </div>
    </van-form>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const amountShould = ref(0)
const amountPaid = ref(0)
const amountPay = ref(0)
const paySubmit = () => {

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
  margin-top: 40px;
}

.amount {
  padding-left: 18px;
  color: #323233;
  font-size: 14px;
  line-height: 20px;
}
</style>
