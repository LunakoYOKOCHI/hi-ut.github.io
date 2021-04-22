<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>

    <p>1990 年度より所報から研究報告の部分を分離独立して発刊。毎年度発行。<br />申込書は<a
        :href="this.baseUrl + '/publication/moshikomi20201228.pdf'"
        >こちら</a
      >。
    </p>

    <ul>

      <li v-for="i of latestKiyoVol" :key="i">
          <nuxt-link
            :to="
              localePath({
                name: 'publication-kiyo-vol',
                params: { vol: 'kiyo' + ('0000' + (latestKiyoVol - i + 1)).slice(-4) },
              })
            "
          >
            東京大学史料編纂所紀要第{{ latestKiyoVol - i + 1 }}号
          </nuxt-link>
        </li>

        <!--

      <li v-for="(value, index) in items" :key="index">
        <a :href="getUrl(value)">東京大学史料編纂所紀要第{{ value }}号</a>
      </li>

      -->
    </ul>
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
  title: any = this.$t('研究紀要')

  baseUrl: any = process.env.BASE_URL

  latestKiyoVol: any = 30

  head() {
    const title = this.title
    return {
      title,
    }
  }

  get items(): number[] {
    const items = []
    for (let i = 29; i >= 1; i--) {
      items.push(i)
    }
    return items
  }

  getUrl(value: number) {
    const index = ('0000' + value).slice(-4)
    return (
      'https://www.hi.u-tokyo.ac.jp/publication/kiyo/kiyo' + index + '.html'
    )
  }
}
</script>
