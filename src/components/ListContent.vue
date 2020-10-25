<template>
    <div>
        <ul>
            <li v-for="row in data" :key="row" v-html="row"/> 
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ListContent extends Vue {
    @Prop({required: true}) readonly data!: Array<string>
}
</script>

<style scoped>
.container {
    height: 100%;
    width: 100%;
    display: flex;
}
.leftThing {
    width: 50%;
}
.rightThing {
    width: 50%;
    text-align: right;
}
</style>