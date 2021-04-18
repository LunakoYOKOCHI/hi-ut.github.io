<template>
  <LayoutNews :title="title">
    <News :year="year" />
  </LayoutNews>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class news extends Vue {
  baseUrl: string = process.env.BASE_URL || ''

  get title() {
    return String(this.year) + this.$t('年度のニュース')
  }

  get year(){
    let year:any = this.$route.params.year
    if (!year) {
      const currentYear = new Date().getFullYear()
      const currentMonth = new Date().getMonth() + 1
      year = currentMonth < 4 ? currentYear - 1 : currentYear
    }
    return year
  }
}
</script>
