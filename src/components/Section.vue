<template>
    <div>
        <h3><b>{{ title }}</b></h3>
        <hr class="tick-line"/>
        <div class="content">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Section extends Vue {
    @Prop({required: true}) readonly title!: string
}
</script>

<style scoped>
.tick-line {
     border-top: 2px solid; 
     margin-top: -10px;
}
.content {
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>