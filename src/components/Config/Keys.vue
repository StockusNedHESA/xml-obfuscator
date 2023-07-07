<script setup lang="ts">
const {Data} = defineProps(["Data"])
</script>

<template>
  <div id="keys" class="tabcontent" style="display: block;">
    <p>Key - Element name</p>
    <p>Replace - Value to be replace followed by a 0 (allowing increements)</p>
    <div class="flex">
      <h3 style="padding-left: 4rem;">Key</h3>
      <h3 style="padding-left: 7rem;">Replace</h3>
      <h3>Delete</h3>
    </div>
    <div class="keys">
      <div v-for="(keys, index) in Data.value.config.keys" class="flex list" :key="index">
        <input type="text" placeholder="Key" v-model="keys.key"/>
        <input type="text" placeholder="Replace" v-model="keys.replace"/>
        <button @click="() => Data.value.config.keys.splice(index, 1)">X</button>
      </div>
    </div>
    <div class="absolute left">
      <div class="insert">
        <h3>Insert Key</h3>
        <button @click="() => Data.value.config.keys.push({})">Insert</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.keys {
  padding: 0 1rem;
}

#keys .flex {
  justify-content: space-around;
}

#keys .flex input[type="text"] {
  margin-bottom: 0.2rem;
}

.insert h3 {
  margin-bottom: 0;
}
</style>