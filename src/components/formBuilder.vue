<template>
  <div id="form-builder" v-on:mouseup="handleMouseUp">
    <el-row v-for="(tool, index) in addedTools" :key="index">
        <el-input v-if="tool.name === 'textfield'" v-model="tool.value"></el-input>
        <el-input v-if="tool.name === 'passwordbox'" v-model="tool.value" show-password></el-input>
        <el-button v-if="tool.name === 'button'" type="primary">{{ tool.name + ' ' + index }}</el-button>
        <el-radio v-if="tool.name === 'radio-group'" v-model="radio" v-bind:label="'Option ' + index"></el-radio>
    </el-row>
  </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapMultiRowFields } from 'vuex-map-fields';

    export default {
        computed: {
            ...mapMultiRowFields([ 'addedTools' ]),
        },
        data () {
            return {
                radio: '1'
            }
        },
        methods: {
            //handleMouseUp: function() {
            //    this.$store.dispatch( 'handleMouseUp' )
            //},
            ...mapMutations( [ 'handleMouseUp' ] ),
        },
    }
</script>

<style>
  #form-builder {
    background: grey;
    width: 70%;
    height: 500px;
    float: left;
    padding: 1em;
  }
  .el-row {
      margin-top: 0.5em;
  }
</style>
