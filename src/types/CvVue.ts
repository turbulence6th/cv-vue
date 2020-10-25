import { Vue } from 'vue-property-decorator'

export default class CvVue extends Vue {
    link(href: string, value: string) {
        return `<a href="${href}" style="color:#0d0d0d">${value}</a>`
    }

    bold(value: string) {
        return `<b>${value}</b>`
    }
}