<template>
  <v-row justify="center">
    <v-col cols="12" lg="6">
      <v-card>
        <v-list>
          <v-list-item href="/qbt">
            <v-list-item-content>
              <v-list-item-title>qBittorrent</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="/syncthing">
            <v-list-item-content>
              <v-list-item-title>syncthing</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="/code">
            <v-list-item-content>
              <v-list-item-title>Code Server</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="/console">
            <v-list-item-content>
              <v-list-item-title>Cockpit</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
}
</script>
