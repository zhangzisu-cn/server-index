<template>
  <iframe class="app-wrapper" :src="src">
  </iframe>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import vars from '@/vars'

@Component
export default class Home extends Vue {
  @Prop()
  id!: string

  src = ''

  @Watch('id', { immediate: true })
  _idChanged (cur: string): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.src = vars.apps.find(x => x.id === cur)!.link
  }
}
</script>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
