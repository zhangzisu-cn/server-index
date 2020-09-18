<template>
  <v-app>
    <v-app-bar app dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"/>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list nav>
        <v-list-item href="https://zhangzisu.cn/" target="_blank">
          <v-list-item-avatar tile size="32">
            <v-img contain :src="require('@/assets/logo.svg')"/>
          </v-list-item-avatar>
          <v-list-item-content class="title">
            <v-list-item-title class="font-weight-bold">ZhangZisu.CN</v-list-item-title>
            <v-list-item-subtitle class="text-overline">Server Index</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-avatar tile size="32">
            <v-img contain :src="require('@/../custom/logo.svg')"/>
          </v-list-item-avatar>
          <v-list-item-content class="title">
            <v-list-item-title class="font-weight-bold">{{ vars.type }}</v-list-item-title>
            <v-list-item-subtitle class="text-overline">{{ vars.name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-avatar tile size="32">
              <v-icon>mdi-cog</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Apps</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(app, i) in vars.apps" :key="i" :to="'/app/' + app.id">
            <v-list-item-avatar tile size="32">
              <v-img contain :src="app.icon" v-if="app.icon"/>
              <v-icon v-else>mdi-cog</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ app.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <div id="z-bg">
      <!-- <v-img src="https://proxy.zhangzisu.cn/pximg/img-original/img/2019/04/09/21/13/01/74125498_p0.png" contain height="100%"/> -->
    </div>
    <v-footer dark app>
      <v-row justify="end" no-gutters>
        <v-col cols="12" sm="auto" class="text-right">
          <v-btn text disabled class="text-none" >
            &copy; {{ new Date().getFullYear() }} ZhangZisu
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn text href="https://github.com/zhangzisu-cn/server-index" target="_blank" v-on="on">
                <v-icon left>mdi-git</v-icon>
                {{ build.hash.substr(0, 7) }}
              </v-btn>
            </template>
            <span>{{ build.branch }}@{{ build.date }}</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import vars from '@/vars'

@Component
export default class App extends Vue {
  drawer = false

  build = {
    hash: GIT_HASH,
    branch: GIT_BRANCH,
    date: BUILD_DATE
  }

  vars = vars
}
</script>

<style lang="scss" scoped>
#z-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.title {
  letter-spacing: 0.0892857143em;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
  font-weight: 500;
}
</style>
