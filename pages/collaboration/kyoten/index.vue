<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{ title }}</h1>
      <template v-if="$i18n.locale == 'en'"> Japanese text only </template>
      <template v-else>
        <p>
          東京大学史料編纂所は、前近代を中心とする多くの日本史史料を収集し、影写本や写真帳の形で、また、『大日本史料』や『大日本古文書』などの史料集の編纂・刊行を通じて、さらに近年ではさまざまなデータベースを開発することによって、これらを研究資源として多くの研究者の利用に供してきました。
          こうした基盤のもとに、本所は2009年6月、文部科学大臣より「日本史史料の研究資源化に関する研究拠点」として認定され、2010年度より活動を開始いたしました。
        </p>

        <p>
          この拠点は、研究資源とその利用手段のさらなる充実による日本史研究の発展を願う研究者コミュニティの要望にこたえるべく、これまでに蓄積してきた研究資源をもとに、国内外に存在する日本関係史料について、多くの研究者と連携して共同調査・共同研究をおこない、全体的・系統的な研究資源の蓄積と共同利用を促進し、史料学研究・日本史研究の質の向上を目指すことを目的とするものです。
        </p>

        <p>
          特定共同研究の共同研究員・一般共同研究の課題については、毎年公募を行ない、東京大学史料編纂所協議会の審議を経て、採択決定します。共同研究のご希望をお持ちの研究者は、ぜひご検討ください。
        </p>

        <p>
          これまでに実施された特定共同研究・一般共同研究の研究課題とその成果については、<nuxt-link
            :to="localePath({ name: 'collaboration-kyoten-kadai' })"
            >こちら</nuxt-link
          >をご覧ください。
        </p>

        <p>
          {{
            year
          }}年度の拠点の事業として、東京大学史料編纂所協議会の審議に基づき、以下の共同研究を採択決定し、活動を開始しました。
        </p>

        <!-- 
          <h2 class="h03">
            これまでに実施された特定共同研究・一般共同研究の活動
          </h2>

          <p>
            これまでに実施された特定共同研究・一般共同研究の研究課題とその成果については、
            <nuxt-link :to="localePath({ name: 'collaboration-kyoten-kadai' })"
              >こちら</nuxt-link
            >をご覧ください。
          </p>
          -->

        <h2 class="h03 mt3">{{ year }}年度特定共同研究課題一覧</h2>

        <p>
          古代史料・中世史料・近世史料・海外史料・複合史料の各領域について、本所で設定した共同研究の柱および研究課題のもとに、所外から公募した共同研究員とともに研究を進めるものです。
        </p>

        <table class="table04">
          <tr>
            <th>【領域】</th>
            <th width="20%">テーマ</th>
            <th width="20%">研究期間</th>
            <th width="20%">所内共同研究者</th>
            <th width="20%">所外共同研究員(所属)</th>
            <th>所要経費</th>
          </tr>
          <tr v-for="(obj, j) in tokutei">
            <td>【{{ mapping[obj.key] }}】</td>
            <td>{{ obj.data[0]['研究課題'] }}</td>

            <td>
              {{ obj.data[0].start }}～{{ obj.data[0].end }}年度<br />
              （{{ Number(obj.data[0].end) - Number(obj.data[0].start) + 1 }}年間）
            </td>
            <td>
              {{obj.data[0]['代表者']}}<br/><small>（代表者）</small><br/>

              <span
                v-html="obj.data[0]['所内共同研究者'].split('\n').join('<br/>')"
              ></span>
            </td>

            <td>
              <span
                v-html="obj.data[0]['所外共同研究員\n(所属)'].split('\n').join('<br/>')"
              ></span>
            </td>

            <td>
              <span
                v-html="obj.data[0]['所要経費'].split('\n').join('<br/>')"
              ></span>
            </td>
          </tr>
        </table>

        <h2 class="h03 mt3">{{ year }}年度一般共同研究課題一覧</h2>

        <p>
          所外の研究者(1名あるいは数名のグループ)から、共同研究の課題を公募し、本所の研究者と協力して研究を進めるものです。
        </p>

        <table class="table04">
          <tr>
            <th>No.</th>
            <th width="30%">課題名</th>
            <th width="30%">共同研究員<br />（○は研究代表者）</th>
            <th>所内共同研究者<br />（○は所内担当者）</th>
            <th>所要経費(円)</th>
          </tr>
          <tr v-for="(obj, j) in data">
            <td>{{ obj.no }}</td>
            <td>
              {{ obj['研究課題名'] }}
            </td>
            <td>
              ○{{ obj['研究代表者'] }}<br />
              <span
                v-html="obj['所外共同研究者'].split('\n').join('<br/>')"
              ></span>
            </td>
            <td>
              ○{{ obj['所内担当者'] }}<br />
              <span
                v-html="obj['所内共同研究者'].split('\n').join('<br/>')"
              ></span>
            </td>
            <td>
              {{ Number(obj['研究経費']).toLocaleString() }}
            </td>
          </tr>
        </table>
      </template>
    </LayoutPublication>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'

const year = 2021

@Component({
  components: {
    LayoutPublication,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t('共同利用・共同研究拠点の活動について')

  // year: number = 2021

  head() {
    const title = this.title
    return {
      title,
    }
  }

  mapping: any = {
    "kodai" : "古代史料領域",
    "chusei" : "中世史料領域"
  }

  tokutei: any = []

  async asyncData({ payload, app, $axios, $context }: any) {
    if (payload) {
      return payload
    } else {
      const keys = ['kodai', 'chusei']

      const res = []

      for (const key of keys) {
        try {
          const data = await $axios.$get(
            process.env.BASE_URL +
              '/assets/json/collaboration/kyoten/tokutei/' +
              key +
              '.json'
          )

          res.push({
            key,
            data,
          })
        } catch (err) {}
      }

      //const year2 = app.context.app

      //console.log({year2})

      //const year = 2021

      const data = await $axios.$get(
        process.env.BASE_URL +
          '/assets/json/collaboration/kyoten/ippan/' +
          year +
          '.json'
      )

      return {
        year,
        tokutei: res,
        data,
      }
    }
  }

  created() {
    const res = (this as any).tokutei
    const arr = []
    for (const item of res) {
      const key = item.key
      const data = item.data

      const items = []
      for (const obj of data) {
        if (obj.end >= year) {
          console.log(obj['研究課題'])
          items.push(obj)
        }
      }

      arr.push({
        key,
        data: items,
      })
    }

    this.tokutei = arr
  }

  get breadcrumbs(): any[] {
    return [
      {
        text: this.$t('編纂・研究・公開'),
        name: 'publication',
      },
      {
        text: this.$t('共同研究'),
        name: 'collaboration',
      },
    ]
  }
}
</script>
