<template>
  <div>
    <!-- :head="title" 要検討 -->
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{ title }}</h1>
      <p>東京大学史料編纂所報掲載の史料調査に関する報告。</p>

      <ul>
        <li v-for="i of latestSyohoVol" :key="i" v-if="latestSyohoVol - i + 1 < 57">
          <nuxt-link
            :to="
              localePath({
                name: 'publication-syoho-vol',
                //params: { vol: 'syoho' + $utils.zfill(latestSyohoVol - i + 1, 4)},
                params: { vol: latestSyohoVol - i + 1},
                hash: '#saiho'
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

  title: any = this.$t('史料調査')

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

  /*
  get items(): number[] {
    const items: any = []
    for (let i = this.latest; i >= 1; i--) {
      items.push(i)
    }
    return items
  }
  */
}
</script>
