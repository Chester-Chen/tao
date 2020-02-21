<template>
    <div class="">
          <van-stepper @plus="onPlus" @minus="onMinus" min="4" v-model="value"/>
    </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { Stepper } from "vant";
import { mapGetters } from "vuex";

Vue.use(Stepper);

export default {
    data() {
        return {
            value: 1

        }
    },
    components: {},
    methods: {
        onPlus(value) {
            this.$emit('onPlus', value);
        },
        onMinus(value) {
            this.$emit('onMinus', value);

        }
    },
    computed: {
  
   

    }
}
</script>

<style lang="scss" scoped>

</style>
