<template>
    <LayoutAbout :title="title" :index="7" :hideBreadcrumbs="true" :head="title">
      <h1 class="h02">{{ title }}</h1>
      <nuxt-content :document="document" />
    </LayoutAbout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutAbout from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutAbout,
  },
})
export default class about extends Vue {
  async asyncData({ $content, app, params }: any): Promise<any> {
    const slug = params.slug

    const document = await $content(
      `${app.i18n.locale}/db`,
      slug || 'index'
    ).fetch()

    return { document }
  }

  get title(): any {
    return this.$t("データベース検索")//this.$t((this as any).document.title)
  }

  get breadcrumbs(): any[] {
    return []
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
