<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{ $t('所報') }}</h1>
      <h2 class="h03">{{ title }}</h2>

      <template v-if="vol < 57">
        <ListOld :data="data" :vol="vol"></ListOld>
      </template>
      <template v-else>
        <List :data="data" :vol="vol"></List>
      </template>
    </LayoutPublication>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'
import ListOld from '~/components/publication/syoho/ListOld.vue'
import List from '~/components/publication/syoho/List.vue'

@Component({
  components: {
    LayoutPublication,
    ListOld,
    List
  },
})
export default class about extends Vue {
  baseUrl: any = process.env.BASE_URL
  
  async asyncData({ app }: any) {
    const slug = app.context.params.vol
    const vol = Number(slug.replace('syoho', ''))

    const syohoList_ = await import(
      `~/static/assets/json/publication/syoho/${vol}.json`
    )
    const syohoList = syohoList_.default

    const map: any = {}

    for (const obj of syohoList) {
      const head = obj.head
      if (!map[head]) {
        map[head] = []
      }
      map[head].push(obj)
    }

    return {
      vol,
      data: map,
    }
  }

  get title() {
    const vol = this.$data.vol
    const year = this.$utils.calcYearFromSyohoVol(vol)
    return `東京大学史料編纂所報第${vol}号（${year}）`
  }

  breadcrumbs: any[] = [
    {
      text: this.$t('編纂・研究・公開'),
      name: 'publication',
    },
    {
      text: this.$t('所報'),
      name: 'publication-syoho',
    },
  ]

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
