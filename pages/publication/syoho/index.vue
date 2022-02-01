<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{ title }}</h1>

      <nuxt-content class="mb1" :document="document" />

      <ul>
        <li v-for="i of latestSyohoVol" :key="i">
          <nuxt-link
            :to="
              localePath({
                name: 'publication-syoho-vol',
                //params: { vol: 'syoho' + $utils.zfill(latestSyohoVol - i + 1, 4)},
                params: { vol: latestSyohoVol - i + 1},
              })
            "
          >
            東京大学史料編纂所報第{{ latestSyohoVol - i + 1 }}号（{{$utils.calcYearFromSyohoVol(latestSyohoVol - i + 1)}}）
          </nuxt-link>
        </li>
      </ul>
    </LayoutPublication>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutPublication,
  },
})
export default class about extends Vue {
  baseUrl: any = process.env.BASE_URL

  async asyncData({ $content, app, params }: any): Promise<any> {
    const document = await $content(
      `${app.i18n.locale}/publication/syoho/index`
    ).fetch()
    return { document }
  }

  title: any = this.$t('所報')

  head() {
    const title = this.title
    return {
      title,
    }
  }

  breadcrumbs: any[] = [
    {
      text: this.$t('編纂・研究・公開'),
      name: 'publication',
    },
  ]


  latestSyohoVol: any = process.env.latestSyohoVol
}
</script>
