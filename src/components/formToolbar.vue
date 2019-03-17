<template>
  <div id="form-toolbar">
    <ul>
        <li v-for="tool in availableTools" v-on:mousedown="handleMouseDown( tool )">{{ tool.name }}</li>
    </ul>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import { mapMultiRowFields } from 'vuex-map-fields';

  export default {
    methods: {
        //handleMouseDown: function( tool ) {
        //    this.$store.dispatch('handleMouseDown', tool );
        //}
        ...mapMutations( [ 'handleMouseDown' ] ),
    },
    data () {
        return {
            availableTools: [
                { name: 'textfield', value: '' },
                { name: 'passwordbox', value: '' },
                { name: 'button', value: '' },
                { name: 'radio-group', value: '' }
            ]
        }
    }
  }
</script>

<style>
  #form-toolbar {
    background: red;
    width: 20%;
    height: 500px;
    float: right;
    padding: 1em;
  }

  ul {
      margin: 0; padding: 0;
  }

  li {
      list-style: none;
      background: green;
      width: 100%;
      padding: 0.5em 0;
      cursor: pointer;
      margin: 0.5em auto;
      color: white;
  }

  li:hover {
      background: lightgreen;
      color: black;
  }
</style>
