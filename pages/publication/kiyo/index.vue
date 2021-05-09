<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>

    <p>1990 年度より所報から研究報告の部分を分離独立して発刊。毎年度発行。<br />申込書は<a
       href="https://www.hi.u-tokyo.ac.jp/publication/moshikomi20201228.pdf"
        >こちら</a
      >。
    </p>

    <ul>

      <li v-for="i of latestKiyoVol" :key="i">
          <nuxt-link
            :to="
              localePath({
                name: 'publication-kiyo-vol',
                params: { vol: 'kiyo' + $utils.zfill(latestKiyoVol - i + 1, 4) },
              })
            "
          >
            東京大学史料編纂所紀要第{{ latestKiyoVol - i + 1 }}号
          </nuxt-link>
        </li>
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

  latestKiyoVol: any = process.env.latestKiyoVol

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
