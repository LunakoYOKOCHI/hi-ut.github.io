<template>
  
    <Layout :title="title">
      <h1 class="h02">{{ title }}</h1>
      <nuxt-content :document="document" />
    </Layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Layout from '~/components/layout/Layout.vue'

@Component({
  components: {
    Layout,
  },
})
export default class about extends Vue {
  async asyncData({ $content, app, params }: any): Promise<any> {
    const slug = params.slug
    const document = await $content(
      `${app.i18n.locale}/about`,
      slug || 'index'
    ).fetch()
    return { document }
  }

  get title(): any {
    return this.$t((this as any).document.title)
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
