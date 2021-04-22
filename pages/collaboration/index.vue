<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>
    <template v-if="$i18n.locale == 'en'"> Japanese text only </template>
    <template v-else>
      <h2 class="h03">共同利用・共同研究拠点</h2>

      <p>
        <nuxt-link :to="localePath({ name: 'collaboration-kyoten' })"
          >共同利用・共同研究拠点の活動について</nuxt-link
        >
      </p>

      <h2 class="h03">科学研究費補助金による共同研究</h2>

      <div v-for="(item, i) in data" :key="item.type" class="mb2">

        <h3 class="h04">{{mapping[item.type]}}</h3>

        <ul>

          <template v-for="(obj, j) in item.data">
            <li  :key="j" v-if="obj.end >= currentFiscalYear">
              <template v-if="obj.kaken">
                <a :href="`https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-${obj.kaken}/`">{{obj.title}}</a>
              </template>
              <template v-else>
                {{obj.title}}
              </template>
              （{{obj.start}}～{{obj.end}}年度）
              <p v-if="obj.url2"><a :href="obj.url2">プロジェクトのページへ</a></p>
            </li>
          </template>

        </ul>

      </div>

      
      <template v-if="false">
        <ul>
          <li>
            <a
              href="https://www.hi.u-tokyo.ac.jp/collaboration/kaken/17H06117.html"
              >天皇家・公家文庫収蔵史料の高度利用化と日本目録学の進展―知の体系の構造伝来の解明―</a
            >（2017 ～ 2021年度）
          </li>
          <ul>
            <li>
              <a href="https://www.hi.u-tokyo.ac.jp/kodai/kinri-kuge-index.html"
                >プロジェクトページ</a
              >
            </li>
            <li>
              <a href="https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-17H06117/"
                >KAKEN</a
              >
            </li>
          </ul>
        </ul>

        <h3 class="h04">基盤研究 (A)</h3>

        <ul>
          <li>
            コンテキストに応じた人文科学データパッケージ化に関する研究（2020 ～
            2024年度）
          </li>
          <ul>
            <li>
              <a href="https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-20H00010/"
                >KAKEN</a
              >
            </li>
          </ul>
          
        </ul>
      </template>

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
  </LayoutPublication>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'

//const fs = require('fs')

@Component({
  components: {
    LayoutPublication,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t('共同研究')
  currentFiscalYear: any = process.env.currentFiscalYear

  mapping: any = {
    "S": "基盤研究(S)",
    "A": "基盤研究(A)",
    "B": "基盤研究(B)",
    "C": "基盤研究(C)",
    "hoga": "挑戦的萌芽研究",
    "wakate_b": "若手研究(B)",
    "wakate" : "若手研究",
    "start" : "研究活動スタート支援"
  }

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return payload
    } else {
      const types = ["S", "A", "B", "C", "hoga", "wakate_b", "wakate", "start"]

      const res = []

      for(let type of types){
        try {
          const data = await $axios.$get(process.env.BASE_URL+"/assets/json/collaboration/kaken/" + type + ".json")
          
          //const data = JSON.parse(fs.readFileSync("static/assets/json/collaboration/kaken/" + type + ".json"))
          
          res.push({
            type,
            data
          })
        } catch (err) {
          console.log({err})
        }
      }
      
      return {
        data : res
      }
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
