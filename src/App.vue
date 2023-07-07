<script setup lang="ts">
import XmlViewer from './components/XmlViewer.vue';
import Config from './components/Config/index.vue'

import Storage from './lib/storage'
Storage.init()

</script>

<template>
  <div class="seperator">
    <Config :Data="Storage.data" />
    <XmlViewer :Data="Storage.data" />
  </div>
</template>