<template>
  <div>
    <headbar />
    <sidebar :head-list="headList" @submit="clickSide" />
    <mainbar :list="list" />
    <footbar />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import headbar from '@/components/head-bar.vue'
import sidebar from '@/components/side-bar.vue'
import mainbar from '@/components/main-bar.vue'
import footbar from '@/components/foot-bar.vue'
import hotData from '@/assets/jsons/hot'
import newData from '@/assets/jsons/new'
import mirrorData from '@/assets/jsons/mirror'
import photoData from '@/assets/jsons/photo'
import utilData from '@/assets/jsons/util'
import docmentData from '@/assets/jsons/docment'

const list = ref<any>(photoData.list)

const headList = ref<any[]>([
  hotData,
  newData,
  mirrorData,
  photoData,
  utilData,
  docmentData
])

const clickSide = (data: any) => {
  list.value = headList.value[data].list
}
</script>
