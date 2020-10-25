<template>
    <div class="head-content">
        <div class="container">
            <div class="leftThing" v-show="institution">
                <b>{{ institution }}</b>
            </div>
            <div class="rightThing" v-show="date">
                {{ date }}
            </div>
        </div>
        <div class="container">
            <div class="leftThing" v-show="mission">
                {{ mission }}
            </div>
            <div class="rightThing" v-show="location">
                {{ location }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Section from '@/components/Section.vue'

@Component
export default class Content extends Vue {
    @Prop({required: false}) readonly institution?: string
    @Prop({required: false}) readonly mission?: string
    @Prop({required: false}) readonly date?: string
    @Prop({required: false}) readonly location?: string
}
</script>

<style scoped>
.head-content {
    margin-top: 20px;
}
.container {
    height: 100%;
    width: 100%;
    display: flex;
}
.leftThing {
    width: 70%;
}
.rightThing {
    width: 30%;
    text-align: right;
}
</style>