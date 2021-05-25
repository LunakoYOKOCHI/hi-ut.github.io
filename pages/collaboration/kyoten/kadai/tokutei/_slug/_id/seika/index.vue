<template>
  <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
    <h1 class="h02">特定共同研究【{{category}}】{{ item["柱"] }}</h1>
    <template v-if="$i18n.locale == 'en'"> Japanese text only </template>
    <template v-else>
      <table class="table04">
        <tbody>
        <tr>
          <th width="20%">研究課題</th>
          <td colspan="2">{{item["研究課題"]}}</td>
        </tr>
        <tr>
          <th width="20%">研究期間</th>
          <td colspan="2">{{item.start}}～{{item.end}}年度</td>
        </tr>
        <tr>
          <th width="20%">研究経費</th>
          <td colspan="2">
            <ul>
              <li v-for="(text, key) in money" :key="key">{{text}}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th rowspan="3" width="20%">研究組織</th>
          <td width="20%">
            研究代表者
          </td>
          <td>
            {{item["代表者"]}}
          </td>
        </tr>
        <tr>
          <td>
            所内共同研究者
          </td>
          <td>
              {{item["所内共同研究者"]}}
          </td>
        </tr>
        <tr>
          <td>
            所外共同研究者
          </td>
          <td>
              {{item["所外共同研究員"]}}
          </td>
        </tr>

        <tr v-show="selectedYear">
          <th width="20%">研究の概要
            <p>
              <select v-model="selectedYear">
                <option :value="key" v-for="(value, key) in summary" :key="key">{{key}}</option>
              </select>
            </p>
          </th>
          <td colspan="2">
            <template v-if="summary[selectedYear]">
              <p>【{{selectedYear}}年度】</p>
              <p v-html="summary[selectedYear].split('\n').join('<br/>')"></p>
            </template>
          </td>
        </tr>
        </tbody>
      </table>
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

  selectedYear: any = ""
  summary: any = {}
  money: any = {}

  head() {
    const title = this.title
    return {
      title,
    }
  }

  async asyncData({ app }: any) {
    const slug = app.context.route.params.slug

    const tokuteiList_ = await import(`~/static/assets/json/collaboration/kyoten/tokutei/${slug}.json`)
    const tokuteiList = tokuteiList_.default

    let item = {}
    for(const obj of tokuteiList){
      if(obj.no === app.context.route.params.id){
        item = obj
        break
      }
    }

    return {
      item,
    }
  }

  get title() {
    return "研究成果：" + (this as any).item["研究課題"]
  }

  get category(){
    const mapping: any = process.env.tokuteiMapping
    return mapping[this.$route.params.slug]
  }

  created(){
    const item = (this as any).item
    const num = item.end - item.start
    
    
    const map: any = {}
    const money: any = {}
    let latest: any = ""
    for(let i = 0; i <= num; i++){
      //summary
      const value = item["研究の概要["+i+"]"]
      const spl = this.$utils.split(value)

      if(spl[0] !== ""){
        const year = Number(spl[0])
        const text = spl[1]

        map[year] = text

        //研究の概要があれば
        latest = year


        //money
        const value2 = item["所要経費["+i+"]"]
        const spl2 = this.$utils.split(value2)

        if(spl2[0] !== ""){
          const year2 = Number(spl2[0])
          const text2 = spl2[1]
          money[year2] = "（" + year2 + "年度）" + (Number(text2) / 10000) + "万円"
        }
      }

      
    }

    this.summary = map
    this.selectedYear = latest
    this.money = money
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
      {
        text: this.$t('共同利用・共同研究拠点'),
        name: 'collaboration-kyoten',
      },
      {
        text: this.$t('共同利用・共同研究拠点'),
        name: 'collaboration-kyoten',
      },
      {
        text: this.$t('これまでに実施された特定共同研究・一般共同研究の研究課題'),
        name: 'collaboration-kyoten-kadai',
      }
    ]
  }
}
</script>
