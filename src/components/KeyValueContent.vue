<template>
    <div>
        <table> 
            <colgroup>
                <col span="1" class="col-left"/>
                <col span="1" class="col-right"/>
            </colgroup>
            <tr v-for="row in data" :key="row.key">
                <td v-html="row.key"/>
                <td v-html="row.value"/>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Pair from '@/types/Pair'

@Component
export default class KeyValueContent extends Vue {
    @Prop({required: true}) readonly data!: Array<Pair>
}
</script>

<style scoped>
table {
    width: 100%;
}
.col-left {
    width: 20%;
}
.col-right {
    width: 80%;
}
</style>