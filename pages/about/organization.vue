<template>
  <LayoutAbout :title="title">
    <h1 class="h02">{{ title }}</h1>

    <div v-if="lang === 'ja'" class="text-right mb05">
      副所長は技術部長・図書部長を兼務する
    </div>

    <figure class="mb1">
      <img :src="baseUrl + '/assets/img/about/about_hi_soshiki_hi-def.png'" />
    </figure>

    <h2 id="keisai" class="h03 mt-10">{{ $t('常勤職員数') }}</h2>

    <p class="text-right" style="text-align: right">
      {{
        lang === 'ja' ? compiledDate + '現在' : 'Compiled in ' + compiledDate
      }}
    </p>

    <table class="table02" style="text-align: center">
      <tbody>
        <tr>
          <th colspan="2">{{ $t('教員等') }}</th>
        </tr>
        <tr>
          <td>{{ $t('教授') }}</td>
          <td>{{ numbers.教授.all }} ({{ numbers.教授.women }})</td>
        </tr>
        <tr>
          <td>{{ $t('准教授') }}</td>
          <td>{{ numbers.准教授.all }} ({{ numbers.准教授.women }})</td>
        </tr>
        <tr>
          <td>{{ $t('助教') }}</td>
          <td>{{ numbers.助教.all }} ({{ numbers.助教.women }})</td>
        </tr>
        <tr>
          <td>{{ $t('特任助教') }}</td>
          <td>{{ numbers.特任助教.all }} ({{ numbers.特任助教.women }})</td>
        </tr>
        <tr>
          <td>{{ $t('特任研究員') }}</td>
          <td>{{ numbers.特任研究員.all }} ({{ numbers.特任研究員.women }})</td>
        </tr>
        <tr>
          <td>
            <b>{{ $t('合計') }}</b>
          </td>
          <td>
            <b>{{ sum.sum1.all }} ({{ sum.sum1.women }})</b>
          </td>
        </tr>
        <tr>
          <th colspan="2">{{ $t('職員等') }}</th>
        </tr>
        <tr>
          <td>{{ $t('事務職員・技術職員・学術支援職員') }}</td>
          <td>{{ numbers["事務職員・技術職員・学術支援職員"].all }} ({{ numbers["事務職員・技術職員・学術支援職員"].women }})</td>
        </tr>
        <tr>
          <th colspan="2">{{ $t('合計') }}</th>
        </tr>
        <tr>
          <td colspan="2">
            <b>{{ sum.sum2.all }} ({{ sum.sum2.women }})</b>
          </td>
        </tr>
      </tbody>
    </table>

    <p class="mt-4 text-right" style="text-align: right; margin-top: 16px">
      ※（ ）{{ $t('女性教職員、内数') }}
    </p>
  </LayoutAbout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutAbout from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutAbout,
  },
})
export default class about extends Vue {
  baseUrl: any = process.env.BASE_URL
  title: any = this.$t('組織')

  lang: any = this.$i18n.locale

  compiledDate: any = process.env.compiledDateOfStaff

  async asyncData() {
    const facultyList_ = await import(
      `~/static/assets/json/faculty/facultyList.json`
    )
    const facultyList = facultyList_.default

    const staffMap_ = await import(
      `~/static/assets/json/faculty/staffMap.json`
    )
    const staffMap = staffMap_.default

    return { facultyList, staffMap }
  }

  get numbers(){
    const facultyList = this.$data.facultyList

    const numbers: any = {}

    for(const obj of facultyList){
      const position = obj.position
      const sex = obj.sex

      if(!numbers[position]){
        numbers[position] = {
          all: 0,
          women: 0
        }
      }

      numbers[position].all += 1

      if(sex === "f"){
        numbers[position].women += 1
      }
    }

    const staffMap: any = this.$data.staffMap

    for(let key in staffMap){
      numbers[key] = staffMap[key]
    }

    return numbers
  }

  get sum() {
    const numbers = this.numbers
    const sum1All =
      numbers.教授.all +
      numbers.准教授.all +
      numbers.助教.all +
      numbers.特任助教.all +
      numbers.特任研究員.all
    const sum1Women =
      numbers.教授.women +
      numbers.准教授.women +
      numbers.助教.women +
      numbers.特任助教.women +
      numbers.特任研究員.women
    return {
      sum1: {
        all: sum1All,
        women: sum1Women,
      },
      sum2: {
        all: sum1All + numbers["事務職員・技術職員・学術支援職員"].all,
        women: sum1Women + numbers["事務職員・技術職員・学術支援職員"].women,
      },
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
