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
          <p class="mt2 mb1">
            Shiryo Hensan-jo (the Historiographical Institute, HI), the
            University of Tokyo, has as its primary objective, rather than
            historiography in general, analysis, compilation, and publication of
            historical source materials concerning Japan. The Institute has
            become a major center of Japanese historical research, and makes
            historical sources available through its
            <a href="library">library</a>,
            <nuxt-link :to="localePath({ name: 'publication' })"
              >publications</nuxt-link
            >, and recently,
            <a href="https://wwwap.hi.u-tokyo.ac.jp/ships-e/">databases</a>.
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
                <nuxt-link :to="localePath({ name: 'faculty' })">{{
                  $t('教員一覧')
                }}</nuxt-link>
              </li>
              <li v-if="lang === 'ja'">
                <nuxt-link :to="localePath({ name: 'collaboration-kyoten' })">{{
                  $t('共同利用・共同研究拠点')
                }}</nuxt-link>
              </li>
              <li>
                <a :href="getHiPath('gijyutu')">{{
                  $t('技術部・史料保存技術室')
                }}</a>
              </li>
              <li>
                <a :href="getHiPath('ir')">{{ $t('IR・広報室') }}</a>
              </li>
            </ul>
          </nav>

          <p class="mt2">
            <a href="https://utf.u-tokyo.ac.jp/project/pjt10">
              <img
                :src="baseUrl + '/assets/img/common/btn_kihu.png'"
                height="114px"
                width="184px"
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

    <div v-if="lang === 'ja'" class="foot-link" style="background: white">
      <div class="inner">
        <a class="btn01 v1" href="https://clioteam.hi.u-tokyo.ac.jp/share/"
          >共同研究に<br />
          参加されている皆様へ</a
        ><nuxt-link class="btn01 v1" :to="localePath({ name: 'faq-slug' })"
          >よくあるご質問</nuxt-link
        ><a class="btn01 v1" href="https://cliocyb.hi.u-tokyo.ac.jp/start.html"
          >所内用サイト</a
        >
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

  async asyncData() {
    const year = process.env.currentFiscalYear
    const newsList_ = await import(`~/static/assets/json/news/${year}.json`)
    const newsList = newsList_.default
    return {year, newsList}
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
