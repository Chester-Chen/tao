<template>
    <div class="">
          <van-stepper v-model="value" />
    </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { Stepper } from "vant";

Vue.use(Stepper);

export default {
    data() {
        return {
            value: ''
        }
    },
    components: {},
    methods: {}
}
</script>

<style lang="scss" scoped>

</style>
