<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>
      <h2 class="h03">共同利用・共同研究拠点</h2>

      <p>
        <nuxt-link :to="localePath({ name: 'collaboration-kyoten' })"
          >共同利用・共同研究拠点の活動について</nuxt-link
        >
      </p>

      <h2 class="h03 mt3">科学研究費補助金による共同研究</h2>

      <p>研究期間終了分は<nuxt-link :to="localePath({name : 'collaboration-kaken'})">こちら</nuxt-link></p>

      <KakenList :data="data"></KakenList>
    

      <p class="mt3">
        <div class="flex col2">
        <figure>
      <img width="100%" :src="baseUrl + '/assets/img/collaboration/collabo_satsuei.jpeg'" />
      <figcaption>現地での史料撮影（島根県）</figcaption>
    </figure>
    <figure>
      <img width="100%" :src="baseUrl + '/assets/img/collaboration/collabo_chosa.jpeg'" />
      <figcaption>国立歴史民俗博物館との共同調査（新潟県）</figcaption>
    </figure>
    </div>

        </p>

       <h3 class="h04">学内部局との連携</h3>

       <p>史料編纂所では、1976 年より地震研究所と連携して、わが国前近代の地震に関する史料の調査・収集を行っています。歴史情報研究では、1984 年に大型計算機センターの指導を得て以来、大学院工学系研究科や情報基盤センターの研究者との共同研究を行っており、2007 年4 月からは工学系研究科から兼任准教授を迎えさらに連携を強化します。また、生産技術研究所の研究者とは、幕末の銀板写真や花押の研究で共同研究に取り組みました。2000 年にはシンポジウム「21 世紀の世界秩序 ―グローバル化と公共性―」を、東洋文化研究所・社会科学研究所・社会情報研究所（当時）とともに開催しました。この他にも文学部、農学部、工学部などの研究者とともに共同研究を進めてきました。</p>

  </LayoutPublication>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'
import KakenList from '~/components/collaboration/kaken/KakenList.vue'
//const fs = require('fs')

@Component({
  components: {
    LayoutPublication,
    KakenList
  },
})
export default class about extends Vue {
  title: any = this.$t('共同研究')
  currentFiscalYear: any = process.env.currentFiscalYear
  baseUrl: any = process.env.BASE_URL

  async asyncData() {
    const kakenMap: any = process.env.kakenMap
    const types: any[] = Object.keys(kakenMap)

    const res = []

    for (let type of types) {
      try {
        const kakenList_ = await import(`~/static/assets/json/collaboration/kaken/${type}.json`)
        const kakenList = kakenList_.default
        res.push({
          type,
          data: kakenList,
        })
      } catch (err) {
        console.log({ err })
      }
    }

    return {
      data: res,
    }
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
