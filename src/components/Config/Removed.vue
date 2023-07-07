<script setup lang="ts">

const {Data} = defineProps(["Data"])
</script>

<template>
  <div id="remove" class="tabcontent">
    <p>Remove - Element name to be removed</p>
    <div class="flex">
      <h3 style="padding-left: 7rem;">Key</h3>
      <h3 style="padding-left: 4rem;">Delete</h3>
    </div>
    <div class="remove">
      <div v-for="(_, index) in Data.value.config.remove" class="flex list" :key="index">
        <input type="text" placeholder="Remove key" v-model="Data.value.config.remove[index]"/>
        <button @click="() => Data.value.config.remove.splice(index, 1)">X</button>
      </div>
    </div>
    <div class="absolute left">
      <div class="insert">
        <h3>Insert Key</h3>
        <button @click="() => Data.value.config.remove.push('')">Insert</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.remove {
  padding: 0 1rem;
}

#remove .flex {
  justify-content: space-evenly;
}

#remove .flex input[type="text"] {
  margin-bottom: 0.2rem;
}

.insert h3 {
  margin-bottom: 0;
}
</style>