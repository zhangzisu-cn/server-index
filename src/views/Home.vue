<template>
  <v-row justify="center">
    <v-col cols="12" lg="6">
      <v-card>
        <v-list>
          <v-list-item v-for="(service, i) in vars.services" :key="i" :href="service.link">
            <v-list-item-avatar tile size="24">
              <v-img contain :src="service.icon" v-if="service.icon"/>
              <v-icon v-else>mdi-cog</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ service.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import vars from '@/vars'

@Component
export default class Home extends Vue {
  vars = vars
}
</script>
