<template>
    <div class="">
          <van-stepper @plus="onPlus" @minus="onMinus" v-model="value"/>
    </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { Stepper } from "vant";

Vue.use(Stepper);

export default {
    data() {
        return {
            value: 1,

        }
    },
    components: {},
    methods: {
        onPlus(value) {
            // alert(value);
            this.$emit('onPlus', value);
        },
        onMinus(value) {
            this.$emit('onMinus', value);

        }
    }
}
</script>

<style lang="scss" scoped>

</style>
