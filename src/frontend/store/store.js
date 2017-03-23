import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export const store = new Vuex.Store({
    actions: actions,
    getters: getters,
    mutations: mutations,
    state: {}
});

/*
if (module.hot) {
    module.hot.accept(['./getters', './actions', './mutations'], () => {
        store.hotUpdate({
            getters: require('./getters'),
            actions: require('./actions'),
            mutations: require('./mutations')
        });
    });
}
*/
