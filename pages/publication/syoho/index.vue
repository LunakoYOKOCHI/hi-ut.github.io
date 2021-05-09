<template>
  <div>
    <!-- :head="title" 要検討 -->
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{ title }}</h1>
      <p>史料編纂所の諸業務に関する報告。1966 年度より毎年度発行。<br />申込書は<a
          href="https://www.hi.u-tokyo.ac.jp/publication/moshikomi20201228.pdf"
          >こちら</a
        >。
      </p>

      <ul v-if="false">
        <li v-for="i of latestSyohoVol" :key="i">
          <nuxt-link
            :to="
              localePath({
                name: 'publication-syoho-vol',
                params: { vol: 'syoho' + ('0000' + (latestSyohoVol - i + 1)).slice(-4) },
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
