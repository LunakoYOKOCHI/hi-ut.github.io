<template>
  <section class="top-topics">
    <h2 class="h01" v-if="isTop">
      News &amp; Topics
      <nuxt-link
        class="list"
        style="text-decoration: none"
        :to="localePath({ name: 'news-year' })"
        >{{ $t('一覧') }}</nuxt-link
      >
    </h2>

    <div class="page-link" :class="isTop ? 'c4' : ''">
      <ul>
        <li v-if="isTop"><a @click="select = 'latest'">{{ $t('新着一覧') }}</a></li>
        <li><a @click="select = 'news'">{{ $t('news') }}</a</li>
        <li><a @click="select = 'event'">{{ $t('event') }}</a> </li>
        <li><a @click="select = 'data'">{{ $t('data') }}</a> </li>
      </ul>
    </div>


    <div :class="isTop ? 'data' : ''"> <!-- style="height: 700px" -->

      <template v-for="(newsMap, key) in newsList">

        <dl :key="key" v-if="select === 'latest' || select === newsMap.tag">
          
          <dt class="mb1">
            {{ newsMap.date }}
            <!-- <span class="chip1">{{ newsMap.featured }}</span> -->
            <span class="chip2">{{ $t(newsMap.tag) }}</span>
          </dt>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <dd>
            <span class="fc1">{{ newsMap.featured }}</span> <span v-html="newsMap.content"></span>
          </dd>
          
        </dl>

      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import axios from 'axios'

@Component({
  components: {},
})
export default class NewsComponent extends Vue {
  @Prop({ default: false })
  isTop!: boolean

  @Prop()
  year!: number

  newsList: any[] = []

  baseUrl: string = process.env.BASE_URL || ''

  lang: string = this.$i18n.locale

  select: string = "latest"

  async mounted() {
    const prefix =
      this.baseUrl + '/assets/json/news/' + (this.lang === 'ja' ? '' : 'en/')
      //'/assets/json/news/' + (this.lang === 'ja' ? '' : 'en/')
      //'~/json/news/' + (this.lang === 'ja' ? '' : 'en/')
    
    try {
      
      const res = await axios.get(prefix + this.year + '.json')
      
      //const res = await this.$axios.$get(prefix + 2020 + '.json')
      this.newsList = res.data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
</script>
