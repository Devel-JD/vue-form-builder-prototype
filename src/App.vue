<template>
  <div id="app">
    <FormBuilder></FormBuilder>
    <FormToolbar></FormToolbar>
  </div>
</template>

<script>
  import FormBuilder from './components/formBuilder.vue'
  import FormToolbar from './components/formToolbar.vue'

  export default {
    components: {
      'FormBuilder': FormBuilder,
      'FormToolbar': FormToolbar
    },
    name: 'app',
    data () {
      return {
        
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
