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
            <td v-html="item.description"></td>
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
                {{row.番号}}
              </td>
              <td>
                <template v-if="row.url">
                  <a :href="row.url">{{row.書名}}</a>
                </template>
                <template v-else>
                  <span v-html="row.書名"></span>
                </template>
              </td>
              <td>
                {{row.研究費名}}
              </td>
              <td>
                {{row.責任者}}
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
  title: any = '各種成果'

  async asyncData() {

    const latestReportYear: any = process.env.latestReportYear
    
    const res = []

    for(let year = latestReportYear; year >= 2008 ; year--){
      try {
        const reportList_ = await import(`~/static/assets/json/collaboration/fruits/${year}.json`)
        const reportList = reportList_.default
        
        res.push({
          year,
          data: reportList
        })
      } catch (err) {
        console.log({err})
      }
    }
    
    return {
      data : res
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
      href: 'https://www.hi.u-tokyo.ac.jp/iriki-j.html',
    },
    {
      label: '『日本関係海外史料目録』（全14冊）の画像の試験公開',
      description:
        '1997年度科学研究費『WWWサーバによる日本史データベースのマルチメディア化と公開に関する研究』（代表者：加藤友康）より',
      href: 'https://www.hi.u-tokyo.ac.jp/personal/yokoyama/hensan/microfilm.htm',
    },
    {
      label: '続通信全覧文久元年分検索ページ',
      description:
        '試用版：1996年度特定研究経費「幕末維新期の対外関係史料の収集・分析」による',
      href: 'https://www.hi.u-tokyo.ac.jp/personal/yokoyama/sample.htm',
    },
    {
      label: '通信全覧・続通信全覧所収オランダ往復書翰目録検索データベース',
      description:
        '試用版；400 anniversary',
      href: 'https://www.hi.u-tokyo.ac.jp/personal/yokoyama/hensan/list01.html',
    },
    {
      label: '『通航一覧』琉球国之部',
      description:
        '重点領域研究『沖縄の歴史情報研究』により作成',
      href: 'https://www.hi.u-tokyo.ac.jp/personal/tsuruta/kaidai.htm',
    },
    {
      label: '島津家本『琉球外国関係文書』',
      description:
        '重点領域研究『沖縄の歴史情報研究』により作成',
      href: 'https://www.hi.u-tokyo.ac.jp/personal/yokoyama/okinawa/frame.htm',
    },
    {
      label: '島津家本『琉球関係文書』',
      description:
        '(重点領域研究『沖縄の歴史情報研究』により作成）',
      href: 'https://www.hi.u-tokyo.ac.jp/collaboration/ryukyu.html',
    },
    {
      label: '錦絵Gallery',
      description:
        '常設版',
      href: 'https://www.hi.u-tokyo.ac.jp/personal/yokoyama/nishikie/cover.html',
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
    {
      label: '応答型翻訳支援システム・CSVデータ',
      description:
        '応答型翻訳支援システムのCSVデータ（UTF-8形式; 4.7MB）です。利用条件：<a href="http://creativecommons.org/licenses/by/4.0/">CC BY</a>',
      href: 'https://hi-ut.github.io/assets/csv/outougata_20210802.csv',
      href2: "https://www.hi.u-tokyo.ac.jp/"
    }
  ]
}
</script>