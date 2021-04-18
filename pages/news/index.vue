<template>
  <LayoutNews :title="title">
    <News />
    <!--
        <nuxt-link class="list" :to="localePath({ name: 'news' })">{{
          $t('一覧')
        }}</nuxt-link>
        -->

    <!--
    <section class="top-topics">
      <h2 class="h01">
        News &amp; Topics
        
      </h2>
      <div class="data2">
        <dl>
          <template v-for="(obj, index) in news">
            <span :key="index">
              <dt>
                {{ obj.date }}
                <span class="chip1">{{ obj.featured }}</span>
                <span class="chip2">{{ obj.tag }}</span>
              </dt>
              <dd>
                <span v-html="obj.content"></span>
              </dd>
            </span>
          </template>
        </dl>
      </div>
    </section>
    -->

    <News2 v-if="false" :items="items"></News2>
  </LayoutNews>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import News2 from '~/components/news/List.vue'

@Component({
  components: {
    News2,
  },
})
export default class news extends Vue {
  baseUrl: string = process.env.BASE_URL || ''

  //year: number = -1

  news: any[] = []

  get title() {
    return String(this.year) + this.$t('年度のニュース')
  }

  get year(){
    let year: any = this.$route.params.year
    if (!year) {
      const currentYear = new Date().getFullYear()
      const currentMonth = new Date().getMonth() + 1
      year = currentMonth < 4 ? currentYear - 1 : currentYear
    }
    return year
  }

  async created() {
    const results = await axios.get(this.baseUrl + '/assets/json/news/2020.json')
    const news = results.data
    this.news = news
  }
}
</script>
