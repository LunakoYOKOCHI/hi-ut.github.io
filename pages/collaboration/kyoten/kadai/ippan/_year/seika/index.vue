<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{ title }}</h1>
      <div
        v-for="(item, key) in data"
        :key="key"
        class="mb3"
        :id="$utils.convKyotenKadaiIppanId(item.no)"
      >
        <h2 class="h03">一般共同研究 研究課題　{{ item['研究課題名'] }}</h2>

        <table class="table04">
          <tbody>
            <tr>
              <th width="20%">研究経費</th>
              <td colspan="2">{{ item['研究経費'] }}</td>
            </tr>
            <tr>
              <th>研究組織</th>
              <td width="20%">研究代表者</td>
              <td>{{ item['研究代表者'] }}</td>
            </tr>
            <tr v-if="item['所外共同研究者']">
              <th></th>
              <td>所外共同研究者</td>
              <td>{{ item['所外共同研究者'] }}</td>
            </tr>
            <tr v-if="item['所内共同研究者']">
              <th></th>
              <td>所内共同研究者</td>
              <td>{{ item['所内共同研究者'] }}</td>
            </tr>
            <tr v-if="item['研究協力者']">
              <th></th>
              <td>研究協力者</td>
              <td>{{ item['研究協力者'] }}</td>
            </tr>
            <tr>
              <th width="20%">研究の概要</th>
              <td
                colspan="2"
                v-html="item['研究の概要'].split('\n').join('<br/>')"
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
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

  title: any =
    this.$route.params.year + '年度に実施された一般共同研究の研究概要（成果）'

  head() {
    const title = this.title
    return {
      title,
    }
  }

  async asyncData({ app }: any) {
    const year = app.context.route.params.year

    const ippanList_ = await import(
      `~/static/assets/json/collaboration/kyoten/ippan/${year}.json`
    )
    const ippanList = ippanList_.default

    return {
      data: ippanList,
    }
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
        //text: this.$t('共同利用・共同研究拠点の活動について'),
        text: this.$t('共同利用・共同研究拠点'),
        name: 'collaboration-kyoten',
      },
    ]
  }
}
</script>
