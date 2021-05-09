<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02 mb1">{{ title }}</h1>

      <div v-if="lang === 'ja'" class="mb2">
        <h2 class="h03">年度別出版物</h2>
        <ul>
          <template v-for="(obj, key) in years">
            <li :key="key">
              <nuxt-link
                v-if="obj.year != -1"
                class="mr-5"
                :to="localePath(obj.to)"
                >{{ obj.year }}年度</nuxt-link
              >
            </li>
          </template>
        </ul>

        <figure class="mt2">
          <img :src="baseUrl + '/assets/img/publication/pub_list.gif'" />
        </figure>
      </div>

      <p>
        <template v-if="lang === 'ja'">
          <!-- また、-->東京大学教員の著作を著者自らが語る広場「<a
            href="https://www.u-tokyo.ac.jp/biblioplaza/ja/search.php?q=&department=%E5%8F%B2%E6%96%99%E7%B7%A8%E7%BA%82%E6%89%80&category=&subcategory="
            >UTokyo BiblioPlaza</a
          >」もご確認ください。
        </template>
        <template v-else>
          <p>
            The Historiographical Institute has a full century of publishing
            experience, beginning with the Dai Nihon Shiryo series in 1901. It
            currently publishes multiple volumes of primary source materials
            each year. Some principle publications are
            <!-- described below. -->
            listed a right menu.
          </p>

          Please check out "<a
            href="https://www.u-tokyo.ac.jp/biblioplaza/en/search.php?q=&department=Historiographical&category=&subcategory="
            >UTokyo BiblioPlaza</a
          >, Books written by UTokyo professors".
        </template>
      </p>
    </LayoutPublication>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'
// import axios from 'axios'

@Component({
  components: {
    LayoutPublication,
  },
})
export default class about extends Vue {

  baseUrl: any = process.env.BASE_URL

  get lang() {
    return this.$i18n.locale
  }

  publicationLatestFiscalYear: any = process.env.publicationLatestFiscalYear

  title: any = this.$t('編纂・出版') // (this.$route.params.year || this.latestFiscalYear) + '年度出版物'

  // title2: any = this.$t('編纂・研究・公開')

  breadcrumbs: any[] = []

  year: any = this.$route.params.year || process.env.publicationLatestFiscalYear

  head() {
    const title = this.title
    return {
      title,
    }
  }

  get years() {
    const years = []

    for (let i = this.publicationLatestFiscalYear; i >= 2006; i--) {
      years.push({
        year: i,
        to: {
          name: 'publication-list-year',
          params: {
            year: i,
          },
        },
      })
    }

    return years
  }
}
</script>
