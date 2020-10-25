<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Main from '@/components/Main.vue'

@Component({
  components: {
    Main,
  },
})
export default class App extends Vue {

}
</script>

<style>
@media screen and (min-width: 1400px) {
  body {
    background-color: #5d5d5d;
  }

  #app {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border: 1px solid black;
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media print {
  #app {
    padding-left: 20px;
    padding-right: 20px;
  }
}

#app {
  font-family: "Arial";
}
</style>
