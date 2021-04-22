<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>
    <template v-if="$i18n.locale == 'en'"> Japanese text only </template>
    <template v-else>
      <h2 class="h03">各種研究成果物</h2>

      <table class="table04">
        <thead>
          <tr>
            <th>成果物</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in items" :key="key">
            <td>
              <a :href="item.href">{{ item.label }}</a>
            </td>
            <td>{{ item.description }}</td>
          </tr>
        </tbody>
      </table>

      <h2 class="h03 mt2">東京大学史料編纂所研究成果報告書</h2>

      <div v-for="(item, year) in data" :key="item.year" class="mt2">

        <h3 class="h04">{{item.year}} 年度</h3>

        <table class="table04">
          <thead>
            <tr>
              <th width="10%">番号</th>
              <th width="35%">書名</th>
              <th width="35%">研究費名</th>
              <th width="20%">責任者</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, key) in item.data" :key="key">
              <td>
                {{row.no}}
              </td>
              <td v-html="row.title">
              </td>
              <td>
                {{row.grant}}
              </td>
              <td>
                {{row.resp}}
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </template>
  </LayoutPublication>
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
  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t('各種成果')

  

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return payload
    } else {
      const latestReportVol: any = 2018
      
      const res = []

      for(let year = latestReportVol; year >= 2008 ; year--){
        try {
          const data = await $axios.$get(process.env.BASE_URL+"/assets/json/collaboration/" + year + ".json")
          res.push({
            year,
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

  items: any[] = [
    {
      label: '入来院家文書',
      description: '',
      href: this.baseUrl + '/iriki-j.html',
    },
    {
      label: '『日本関係海外史料目録』（全14冊）の画像の試験公開',
      description:
        '1997年度科学研究費『WWWサーバによる日本史データベースのマルチメディア化と公開に関する研究』（代表者：加藤友康）より',
      href: this.baseUrl + '/personal/yokoyama/hensan/microfilm.htm',
    },
    {
      label: '続通信全覧文久元年分検索ページ',
      description:
        '試用版：1996年度特定研究経費「幕末維新期の対外関係史料の収集・分析」による',
      href: this.baseUrl + '/personal/yokoyama/sample.htm',
    },
    {
      label: '通信全覧・続通信全覧所収オランダ往復書翰目録検索データベース',
      description:
        '試用版；400 anniversary',
      href: this.baseUrl + '/personal/yokoyama/hensan/list01.html',
    },
    {
      label: '『通航一覧』琉球国之部',
      description:
        '重点領域研究『沖縄の歴史情報研究』により作成',
      href: this.baseUrl + '/personal/tsuruta/kaidai.htm',
    },
    {
      label: '島津家本『琉球外国関係文書』',
      description:
        '重点領域研究『沖縄の歴史情報研究』により作成',
      href: this.baseUrl + '/personal/yokoyama/okinawa/frame.htm',
    },
    {
      label: '島津家本『琉球関係文書』',
      description:
        '(重点領域研究『沖縄の歴史情報研究』により作成）',
      href: this.baseUrl + '/collaboration/ryukyu.html',
    },
    {
      label: '錦絵Gallery',
      description:
        '常設版',
      href: this.baseUrl + '/personal/yokoyama/nishikie/cover.html',
    },
    {
      label: '古地図・絵図所在情報アンケートデータベース',
      description:
        '2006年度～2010年度科学研究費補助金基盤研究（A）『地図史料学の構築―前近代地図データ集積・公開のために― 』による',
      href: 'https://wwwap.hi.u-tokyo.ac.jp/ships/index_w91.jsp',
    },
    {
      label: '『電子くずし字字典データベース』『木簡画像データベース・木簡字典』連携検索',
      description:
        '史料編纂所『電子くずし字字典データベース』(研究代表　久留島典子教授)と奈良文化財研究所『木簡画像データベース・木簡字典』（研究代表　渡辺晃弘都城発掘調査部史料研究室長）の連携検索',
      href: 'https://clioapi.hi.u-tokyo.ac.jp/ships/ZClient/W34/',
    },
  ]
}
</script>