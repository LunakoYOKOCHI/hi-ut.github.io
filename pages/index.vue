<template>
  <div>
    <!-- InstanceBeginEditable name="toppage" -->
    <!-- v-if="lg" -->
    <div class="key-img">
      <!--  style="background-color: #e6e1d8" -->
      <img
        :src="baseUrl + '/assets/img/common/home.jpg'"
        width="1050px"
        height="202px"
        alt="東京大学史料編纂所 Historiographical Institute The University of Tokyo"
      />
    </div>
    <!-- InstanceEndEditable -->

    <div class="contents-wrap">
      <main id="main-contents" class="main-contents">
        <template v-if="lang === 'ja'">
          <News :isTop="true" :newsList="newsList" />
        </template>
        <template v-else>
          <nuxt-content :document="document" class="mt2 mb2"/>
          <!--
          <p class="mt2 mb1">
            Shiryo Hensan-jo (the Historiographical Institute, HI), the
            University of Tokyo, has as its primary objective, rather than
            historiography in general, analysis, compilation, and publication of
            historical source materials concerning Japan. The Institute has
            become a major center of Japanese historical research, and makes
            historical sources available through its
            <a href="https://hi.u-tokyo.ac.jp/en/library/">library</a>,
            <a href="https://hi.u-tokyo.ac.jp/en/publication/">publications</a>, and recently,
            <a href="https://wwwap.hi.u-tokyo.ac.jp/ships-e/">databases</a>.
          </p>
          -->
          <p class="mt2" v-if="lang !== 'en'">
            <ul>
              <li><nuxt-link :to="localePath({name : 'about-slug', params: {slug : 'index'}})">{{$t("所長挨拶")}}</nuxt-link></li>
              <li><nuxt-link :to="localePath({name : 'about-slug', params: {slug : 'history'}})">{{$t("沿革")}}</nuxt-link></li>
              <li><nuxt-link :to="localePath({name : 'about-slug', params: {slug : 'mission'}})">{{$t("事業")}}</nuxt-link></li>
            </ul>
          </p>
        </template>

        <!-- InstanceEndEditable -->
      </main>
      <div id="sidebar">
        <aside>
          <!-- InstanceBeginEditable name="sub" -->
          <nav>
            <h2>{{ $t('組織') }}</h2>
            <ul>
              <li>
                <a :href="getHiPath('kodai')">{{ $t('古代史料部門') }}</a>
              </li>
              <li>
                <a :href="getHiPath('chusei')">{{ $t('中世史料部門') }}</a>
              </li>
              <li>
                <a :href="getHiPath('kinsei')">{{ $t('近世史料部門') }}</a>
              </li>
              <li>
                <a :href="getHiPath('komo')">{{ $t('古文書古記録部門') }}</a>
              </li>
              <li>
                <a :href="getHiPath('tokushu')">{{ $t('特殊史料部門') }}</a>
              </li>
              <li>
                <a :href="getHiPath('gazo')">{{
                  $t('画像史料解析センター')
                }}</a>
              </li>
              <li>
                <a :href="getHiPath('cdps')">{{
                  $t('前近代日本史情報国際センター')
                }}</a>
              </li>
              <li>
                <a :href="getHiPath('gijyutu')">{{
                  $t('技術部・史料保存技術室')
                }}</a>
              </li>
              <li>
                <a :href="getHiPath('library')">{{
                  $t('図書部')
                }}</a>
              </li>
              <!--
              <li>
                <a :href="getHiPath('ir')">{{ $t('IR・広報室') }}</a>
              </li>
              -->
              <li v-if="lang === 'ja' || lang === 'en'">
                <nuxt-link :to="localePath({ name: 'faculty' })">{{
                  $t('教員一覧')
                }}</nuxt-link>
              </li>
              <li v-if="lang === 'ja'">
                <nuxt-link :to="localePath({ name: 'collaboration-kyoten' })">{{
                  $t('共同利用・共同研究拠点')
                }}</nuxt-link>
              </li>
              <li v-if="lang === 'en'">
                <nuxt-link :to="localePath({ name: 'collaboration' })">{{
                  $t('共同研究')
                }}</nuxt-link>
              </li>
            </ul>
          </nav>

          <p class="mt2">
            <a href="https://www.u-tokyo.ac.jp/">
              <img
                :src="baseUrl + '/assets/img/common/utlogo.jpeg'"
                style="height: 60px"
                alt="東京大学基金"
              />
            </a>
          </p>

          <p class="mt2">
            <a href="https://utf.u-tokyo.ac.jp/project/pjt10">
              <img
                :src="baseUrl + '/assets/img/common/btn_kihu.png'"
                style="height: 90px"
                alt="東京大学基金"
              />
            </a>
          </p>

          <div class="mt2 mb2">
            <a href="https://twitter.com/UTokyo_HI" target="_blank">
              <img :src="baseUrl + '/assets/img/common/twitter.svg'" width="40px" height="40px"/>
            </a>
          </div>
        </aside>
      </div>
    </div>

    <div v-if="lang === 'ja' && false" class="foot-link" style="background: white">
      <div class="inner">
        <!--
        <a class="btn01 v1" href="https://clioteam.hi.u-tokyo.ac.jp/share/"
          >共同研究に<br />
          参加されている皆様へ</a
        >--><!-- <nuxt-link class="btn01 v1" :to="localePath({ name: 'faq-slug' })"
          >よくあるご質問</nuxt-link
        ><a class="btn01 v1" href="https://cliocyb.hi.u-tokyo.ac.jp/start.html"
          >所内用サイト</a
        > -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import News from '~/components/news/News.vue'

@Component({
  components: {
    News,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''

  lang: string = this.$i18n.locale

  get lg(): boolean {
    return this.$store.getters.getLg
  }

  set lg(value) {
    this.$store.commit('setLg', value)
  }

  //newsList: any[] = []
  //year: any = process.env.newsLatest

  /*
  async created(){
    const year = this.year
    console.log({year})
    const url = `https://www.hi.u-tokyo.ac.jp/assets/json/news/${year}.json`
      const {data} = await this.$axios.get(url)
      this.newsList = data
  }
  */

  
  async asyncData({$content, app}: any) {
    const document = await $content(
      `${app.i18n.locale}/about`,
      'index'
    ).fetch()

    const year: any = process.env.newsLatest
    const newsList_ = await import(`~/static/assets/json/news/${year}.json`)
    const newsList = JSON.parse(JSON.stringify(newsList_.default))
    
    //前年度の記事を取得
    const newsList2 = await import(`~/static/assets/json/news/${year - 1}.json`)
    for(const news of JSON.parse(JSON.stringify(newsList2.default))){
      newsList.push(news)
    }

    return {year, newsList, document}
  }

  head() {
    const title =
      this.$i18n.locale === 'ja'
        ? '東京大学史料編纂所'
        : 'Historiographical Institute The University of Tokyo'
    return {
      titleTemplate: null,
      title,
    }
  }

  getHiPath(data: string) {
    if (data.includes('hi.u-tokyo.ac.jp')) {
      return data
    }

    return this.baseUrl + '/' + (this.lang === 'en' ? 'en/' : '') + data + '/'
  }
}
</script>
