<template>
  <div>
      <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
        <h1 class="h02">{{ title }}</h1>
        <template v-if="$i18n.locale == 'en'"> Japanese text only </template>
        <template v-else>
          <p>課題名をクリックすると、研究・成果の概要が表示されます。</p>

          <h2 class="h03">特定共同研究課題一覧</h2>

          

          <h2 class="h03 mt3">一般共同研究課題一覧</h2>

          <template v-for="(item, i) in data">

            <div :key="item.year" class="mb2">

              <h3 class="h04">{{item.year}}</h3>

              <table class="table04">
                <tr>
                  <th width="20%">No.</th>
                  <th>課題名</th>
                </tr>
                <tr v-for="(obj, j) in item.data">
                  <td>{{obj.no}}</td>
                  <td>
                    <template v-if="obj['研究の概要']">
                      <nuxt-link :to="localePath({name: 'collaboration-kyoten-year-seika', params: {year: item.year}, hash: `#${obj.no}`})">{{obj["研究課題名"]}}</nuxt-link>
                    </template>
                    <template v-else>
                      {{obj["研究課題名"]}}
                    </template>
                    
                  </td>
                </tr>
              </table>

            </div>

          </template>
        </template>
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
  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t(
    'これまでに実施された特定共同研究・一般共同研究の研究課題'
  )

  head() {
    const title = this.title
    return {
      title,
    }
  }

  currentFiscalYear: any = process.env.currentFiscalYear

  async asyncData({ payload, app, $axios, $context, }: any) {
    if (payload) {
      return payload
    } else {
      const currentFiscalYear = app.context.env.currentFiscalYear
      const res = []

      for(let year = currentFiscalYear - 1; year >= 2010; year--){
        try {
          const data = await $axios.$get(
            process.env.BASE_URL +
              '/assets/json/collaboration/kyoten/' +
              year +
              '.json'
          )

          res.push({
            year,
            data,
          })
        } catch (err) {}
      }

      return {
        data: res,
      }
    }
  }

  mounted(){
    console.log(this.data)
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
        text: this.$t('共同利用・共同研究拠点の活動について'),
        name: 'collaboration-kyoten'
      }
    ]
  }
}
</script>
