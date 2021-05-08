<template>
  <Layout :title="title">
    <News :newsList="newsList" />
  </Layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Layout from '~/components/layout/LayoutNews.vue'
import News from '~/components/news/News.vue'

@Component({
  components: {
    Layout,
    News
  },
})
export default class news extends Vue {
  get title() {
    return String(this.$data.year) + this.$t('年度のニュース')
  }

  async asyncData({params}: any) {
    const year = params.year || process.env.currentFiscalYear
    const newsList_ = await import(`~/static/assets/json/news/${year}.json`)
    const newsList = newsList_.default
    return {year, newsList}
  }
}
</script>
