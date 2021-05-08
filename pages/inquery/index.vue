<template>
  <div>
    <LayoutExchange :title="title" :index="0" :breadcrumbs="[]">
      <h1 class="h02">{{ title }}</h1>

      <nuxt-content :document="document" />
    </LayoutExchange>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutExchange from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutExchange,
  },
})
export default class about extends Vue {
  async asyncData({ $content, app, params }: any): Promise<any> {
    const slug = params.slug
    const document = await $content(
      `${app.i18n.locale}/inquery`,
      slug || 'index'
    ).fetch()
    return { document }
  }

  get title() {
    return this.$t('お問い合わせ')
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
