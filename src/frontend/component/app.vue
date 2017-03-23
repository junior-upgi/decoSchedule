<template lang="html">
    <div class="container-fluid">
        <div
            v-if="!pOPrintMode"
            class="row" style="margin-left:10px;">
            <div
                class="page-header" style="margin-top:15px;">
                <h2 style="margin-top:0px;">
                    <span style="white-space:nowrap;">統義玻璃股份有限公司</span>
                    <small style="white-space:nowrap;">玻璃瓶加工進度</small>
                </h2>
            </div>
        </div>
        <!--
        <div class="row">
            <sidebar v-if="(activeView!=='login') && (!pOPrintMode)">
            </sidebar>
            <div :is="activeView"></div>
        </div>
        -->
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { store } from '../store/store.js';

export default {
    name: 'app',
    store: store,
    components: {},
    computed: {
        ...mapGetters({})
    },
    methods: {
        ...mapActions({}),
        ...mapMutations({})
    },
    created: function() { }
};

</script>

<style>
@import "./bower_components/bootstrap/dist/css/bootstrap.min.css";
@import "./bower_components/bootstrap/dist/css/bootstrap-theme.min.css";
body {
    overflow-x: hidden;
}
</style>
