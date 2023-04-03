<template>
  <div>
    <headbar />
    <sidebar :head-list="headList" />
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

interface ArrItemType {
  title: string
  subtitle: string
  image: string
  url: string
}

const list: ArrItemType[] = hotData.list

const headList = ref<any[]>([hotData, newData])
</script>
