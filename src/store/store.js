import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'

Vue.use( Vuex );

export const store = new Vuex.Store({

    state: {
        holdingTool: [
            
        ],
        addedTools: [
            
        ]
    },
    actions: {
        handleMouseDown: ( context, payload ) => {
            context.commit( 'handleMouseDown', payload );
        },
        handleMouseUp: context => {
            context.commit( 'handleMouseUp' );
        }
    },
    mutations: {
        updateField,
        handleMouseDown: ( state, payload ) => {
            state.holdingTool = [ payload ];
        },
        handleMouseUp: state => {
            if( state.holdingTool.length > 0 ){
                var holdingTool = state.holdingTool.pop();
                state.addedTools.push( { name: holdingTool.name, value: holdingTool.value } );
            }
        }
    },
    getters: {
        getField,
        //addedTools: state => {
        //    return state.addedTools;
        //},
        //holdingTool: state => {
        //    return state.holdingTool;
        //}
    }

});