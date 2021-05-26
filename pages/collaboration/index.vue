<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>

    <template v-if="lang === 'ja'">
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
    </template>
    <template v-else>
      <h2 class="h03">Basis for joint use and collaborative research</h2>


      <p class="mtx">
      The Historiographical Institute of the University of Tokyo was authorized as a “research center of converting Japanese historical materials into research resources” by the Minister of Education, Culture, Sports, Science and Technology in June 2009. This reseach base is established for the purpose of conducting joint studies and research in collaboration with scholars in Japan and overseas on historical source materials related to Japan which exist in Japan and overseas, on the basis of research resources which have been collected by the Historiographical Institute, thereby facilitating comprehensive and systematic accumulation and joint use of research resources and improving the quality of historical materials studies and Japanese historical studies.
      </p>
      <p class="mtx">
      There are two types of joint research projects at this research base; one is specific joint research projects, for which the research agenda is determined specifying each of the five areas: ancient materials, medieval materials, early modern materials, overseas materials or composite materials, and researchers are publicly sought; and the other is general joint research projects, for which the research agenda is publicly sought. Both types of joint research projects are adopted and determined through deliberations at the council, which includes external
      members.
      </p>
      <p class="mtx">
      Specified joint research projects conducted in FY 2018 are as follows:
      </p>
      <ul class="listIcon_dot mtx">
      <li class="mtx">
      Ancient materials: Historiographical reconsideration of basic books and records about the Heian period
      </li>
      <li class="mtx">
      Medieval materials: Study on the documents of the Kamo-wakeikazuchi Shrine
      </li>
      <li class="mtx">
      Early modern materials: Research on the Meiji-Ishin documents held by the Historiographical Institute
      </li><li class="mtx">
      Overseas materials: Comprehensive research on historical materials collected by Fr. Mario Marega held by Vatican Library
      </li>
      <li class="mtx">
      Composite materials: Comprehensive research on images of battle scenes of the Sengoku Period
      </li>
      </ul>
      <p class="mtx">
      General joint research projects were publicly sought and 20 themes were selected for FY 2018, with the participation of 94 members from outside of the institute.
      </p>

      <h2 class="h03">Announcement of results of joint use and collaborative research</h2>
      <p class="mtx">
      Regarding the results of our activities as a “research center of converting Japanese historical materials into research resources,” as well as posting reports on our website, each project holds symposiums, open lecture meetings, and other events for academic circles and local communities. On January 24, 2015, we held a symposium titled “New Transmission of Historical Material Information” to report on the activities in the current term (from FY 2010) of joint use and collaborative research and of the International Center for the Digitization of Premodern Japanese Sources, which serves as the foundation of joint use and collaborative research, and to confirm the future direction.
      </p>

    </template>
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

  lang: string = this.$i18n.locale

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
