<template>
  <div>
    slug
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'
// import axios from 'axios'

@Component({
  components: {
    LayoutPublication,
  },
})
export default class about extends Vue {

  get lang() {
    return this.$i18n.locale
  }

  title: any = this.$t('編纂・研究・公開') // (this.$route.params.year || this.latestFiscalYear) + '年度出版物'

  // title2: any = this.$t('編纂・研究・公開')

  breadcrumbs: any[] = []  

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
