<template>
  <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
    <h1 class="h02">{{ title }}</h1>
    <template v-if="$i18n.locale == 'en'"> Japanese text only </template>
    <template v-else>
      <nuxt-content :document="document" />

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

      <h2 class="h03 mt3">{{ year }}年度特定共同研究課題一覧</h2>

      <p>
        古代史料・中世史料・近世史料・海外史料・複合史料の各領域について、本所で設定した共同研究の柱および研究課題のもとに、所外から公募した共同研究員とともに研究を進めるものです。
      </p>

      <div class="scroll-table">
        <table class="table04">
          <tbody>
            <tr>
              <th width="10%">【領域】</th>
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
                （{{
                  Number(obj.data[0].end) - Number(obj.data[0].start) + 1
                }}年間）
              </td>
              <td>
                {{ obj.data[0]['代表者'] }}<br /><small>（代表者）</small><br />

                <span
                  v-html="
                    obj.data[0]['所内共同研究者'].split('\n').join('<br/>')
                  "
                ></span>
              </td>

              <td>
                <span
                  v-html="
                    obj.data[0]['所外共同研究員'].split('\n').join('<br/>')
                  "
                ></span>
              </td>

              <td>
                {{ formatMoney2Man(getMoney(obj)) }}
              </td>
            </tr>
            <tr>
              <td colspan="5" class="text-right">合計</td>
              <td>{{ sumTokutei }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="h03 mt3">{{ year }}年度一般共同研究課題一覧</h2>

      <p>
        所外の研究者(1名あるいは数名のグループ)から、共同研究の課題を公募し、本所の研究者と協力して研究を進めるものです。
      </p>

      <table class="table04">
        <tbody>
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
          <tr>
            <td colspan="4" class="text-right">合計</td>
            <td>{{ sumIppan }}</td>
          </tr>
        </tbody>
      </table>

      <h2 class="h03 mt3">
        これまでに実施された特定共同研究・一般共同研究の活動
      </h2>

      <p>
        これまでに実施された特定共同研究・一般共同研究の研究課題とその成果については、
        <nuxt-link :to="localePath({ name: 'collaboration-kyoten-kadai' })"
          >こちら</nuxt-link
        >をご覧ください。
      </p>
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
  title: any = this.$t('共同利用・共同研究拠点の活動について')

  head() {
    const title = this.title
    return {
      title,
    }
  }

  mapping: any = process.env.tokuteiMapping

  tokutei: any = []

  async asyncData({ $content, app }: any) {
    const res = []

    const year = process.env.kyotenLatest

    const mapping: any = process.env.tokuteiMapping
    for (const key in mapping) {
      try {
        const tokuteiList_ = await import(
          `~/static/assets/json/collaboration/kyoten/tokutei/${key}.json`
        )
        const tokuteiList = tokuteiList_.default

        res.push({
          key,
          data: tokuteiList,
        })
      } catch (err) {}
    }

    const ippanList_ = await import(
      `~/static/assets/json/collaboration/kyoten/ippan/${year}.json`
    )
    const ippanList = ippanList_.default

    // document

    const document = await $content(
      `${app.i18n.locale}/collaboration/kyoten`,
      'index'
    ).fetch()

    return {
      //mapping,
      year,
      tokutei: res,
      data: ippanList,
      document,
    }
  }

  created() {
    const res = this.$data.tokutei
    const arr = []
    for (const item of res) {
      const key = item.key
      const data = item.data

      const items = []
      for (const obj of data) {
        if (obj.end >= this.$data.year) {
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

  formatMoney2Man(money: number): string {
    return money / 10000 + '万円'
  }

  getMoney(obj: any): number {
    let value = -1
    for (let key in obj.data[0]) {
      if (key.includes('所要経費')) {
        const spl = this.$utils.split(obj.data[0][key])
        const year = spl[0]
        const money = spl[1]
        if (Number(year) === this.$data.year) {
          value = Number(money)
        }
      }
    }
    return value
  }

  get sumTokutei() {
    let sum = 0
    for (const obj of this.tokutei) {
      const value = this.getMoney(obj)
      sum += value
    }
    return this.formatMoney2Man(sum)
  }

  get sumIppan() {
    let sum = 0
    const data = this.$data.data
    for (const obj of data) {
      sum += Number(obj['研究経費'])
    }
    return sum.toLocaleString()
  }
}
</script>
