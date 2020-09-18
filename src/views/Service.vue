<template>
  <iframe class="service-wrapper" :src="src">
  </iframe>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  @Prop()
  id!: string

  src = ''

  @Watch('id', { immediate: true })
  _idChanged (cur: string): void {
    this.src = '/' + cur
  }
}
</script>

<style scoped>
.service-wrapper {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
