<script setup lang="ts">
import {reset} from '../../lib/storage'

import Keys from './Keys.vue'
import Randomize from './Randomize.vue'
import Removed from './Removed.vue'

const {Data} = defineProps(['Data'])

function openTab(evt: Event, type: string) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let content of tabcontent) {
    (content as HTMLElement).style.display = "none";
  }

  const tablinks = document.getElementsByClassName("tablinks");
  for (let link of tablinks) {
    link.classList.remove("active")
  }

  (document!.getElementById(type) as HTMLElement).style.display = "block";
  (evt.target as HTMLElement).classList.add("active");
}
</script>

<template>
  <div class="item config">
    <div class="tab">
      <button class="tablinks" @click="(e) => openTab(e, 'keys')">Keys</button>
      <button class="tablinks" @click="(e) => openTab(e, 'randomise')">Randomize</button>
      <button class="tablinks" @click="(e) => openTab(e, 'remove')">Remove</button>
    </div>

    <Keys :Data="Data"/>
    <Randomize :Data="Data"/>
    <Removed :Data="Data"/>

    <div class="absolute right">
      <div class="flex" style="text-align: right;">
        <div>
          <h3>Reset to Default</h3>
          <button @click="reset">Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>