<template>
  <img v-if="user.themeInfo?.loginLogo" :src="fileURL" alt="" height="45px" class="mr-8" />
  <template v-else>
    <img src="@/assets/logo/logo.svg" :height="height" /><h1>智能问答助手</h1>
  </template>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import useStore from '@/stores'
defineOptions({ name: 'LogoFull' })

defineProps({
  height: {
    type: String,
    default: '36px'
  }
})
const { user } = useStore()
const isDefaultTheme = computed(() => {
  return user.isDefaultTheme()
})

const fileURL = computed(() => {
  if (user.themeInfo?.loginLogo) {
    if (typeof user.themeInfo?.loginLogo === 'string') {
      return user.themeInfo?.loginLogo
    } else {
      return URL.createObjectURL(user.themeInfo?.loginLogo)
    }
  } else {
    return ''
  }
})
</script>
<style lang="scss" scoped>
.custom-logo-color {
  path {
    fill: var(--el-color-primary);
  }
}
</style>
