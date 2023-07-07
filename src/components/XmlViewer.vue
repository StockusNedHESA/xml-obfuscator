<script setup lang="ts">
import XmlViewer from 'vue3-xml-viewer'
import ObfuscatorConstructor from '../lib/obfuscator'

import {useToast} from 'vue-toast-notification'

const toast = useToast()

import {ref, getCurrentInstance} from 'vue'

const instance = getCurrentInstance()

const {Data} = defineProps(['Data'])
const Obfuscator = new ObfuscatorConstructor(Data)

const xml = ref(Data.value.store.obfuscated);

function processFile(event: Event) {
  const target = event.target as HTMLInputElement;

  if (target && target.files?.length) {

    const reader = new FileReader()
    reader.onload = async event => {
      if (typeof event.target?.result !== 'string')
        return toast.error('Error parsing XML file')

      const output = Obfuscator.run(event.target?.result)

      Data.value.store.raw = event.target?.result;
      Data.value.store.obfuscated = output;
      Data.value.store.name = target.files![0].name.slice(0, -4).concat("_obfuscated.xml")

      xml.value = output
    }
    reader.onerror = _ => toast.error('Error parsing XML file')
    reader.readAsText(target.files![0])
  }
}

function viewFile(type: string) {
  xml.value = Data.value.store[type]
}

function download() {
  const blob = new Blob([Data.value.store.obfuscated], {type: 'text/xml'});

  const elem = window.document.createElement('a');
  elem.href = window.URL.createObjectURL(blob);
  elem.download = Data.value.store.name;

  document.body.appendChild(elem);
  elem.click();
  document.body.removeChild(elem);
}

function update() {
  const output = Obfuscator.run(Data.value.store.raw)

  Data.value.store.obfuscated = output;

  xml.value = output
  instance?.proxy?.$forceUpdate()
}

</script>

<template>
  <div class="item">
    <input @change="processFile" type="file" capture/>
    <XmlViewer class="preview" :xml="xml" theme="dark"/>
    <div class="flex buttons">
      <div class="view">
        <h3>View</h3>
        <button :disabled="!Data.value.store.raw" @click="() => viewFile('raw')">Original</button>
        <button @click="() => viewFile('obfuscated')">Obfuscated</button>
      </div>
      <div class="download">
        <h3>View</h3>
        <button @click="update" style="margin-right: 0.5rem">Update</button>
        <button @click="download">Download</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview {
  margin-top: 1rem;
  max-height: calc(63vh - 1.75rem);
  max-width: 60vw;
  overflow: auto;
  background-color: #242424;
  border-radius: 1rem;
  padding: 1rem;
}

.view > *:last-of-type {
  margin-left: 0.5rem;
}

.download {
  text-align: right;
}
</style>
