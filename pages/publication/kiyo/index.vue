<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>

    <nuxt-content class="mb1" :document="document" />
    
    <ul>

      <li v-for="i of latestKiyoVol" :key="i">
          <nuxt-link
            :to="
              localePath({
                name: 'publication-kiyo-vol',
                params: { vol: latestKiyoVol - i + 1 },
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

  async asyncData({ $content, app, params }: any): Promise<any> {
    const document = await $content(
      `${app.i18n.locale}/publication/kiyo/index`
    ).fetch()
    return { document }
  }


  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
