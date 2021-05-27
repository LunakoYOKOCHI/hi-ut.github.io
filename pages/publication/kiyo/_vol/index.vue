<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{ $t('研究紀要') }}</h1>
      <h2 class="h03">{{ title }}</h2>

      <table class="table04 mt2">
        <tbody>
          <tr>
            <td>{{ '標題' }}</td>
            <td>{{ '著者名' }}</td>
            <td>{{ '掲載ページ' }}</td>
          </tr>

          <template v-for="(obj, key) in data">
            <tr :key="`th-${key}`">
              <th>{{ key }}</th>
              <th></th>
              <th></th>
            </tr>

            <tr v-for="(item, key2) in obj" :key="`th-${key}-${key2}`">
              <td>
                <template v-if="item.url">
                  <a :href="item.url">{{ item.title }}</a>
                </template>
                <template v-else-if="item.id">
                  <nuxt-link
                    :to="
                      localePath({
                        name: 'publication-syoho-vol-slug',
                        params: {
                          vol,
                          slug: item.id,
                        },
                      })
                    "
                    >{{ item.title }}
                  </nuxt-link>
                </template>
                <template v-else>
                  {{ item.title }}
                </template>
              </td>
              <td>{{ item.creator }}</td>
              <td>{{ item.page }}</td>
            </tr>
          </template>
        </tbody>
      </table>
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
  async asyncData({ app }: any) {
    const slug = app.context.params.vol
    const vol = Number(slug.replace('kiyo', ''))

    const syohoList_ = await import(
      `~/static/assets/json/publication/kiyo/${vol}.json`
    )
    const syohoList = syohoList_.default

    const map: any = {}

    for (const obj of syohoList) {
      const head = obj.head
      if (!map[head]) {
        map[head] = []
      }
      map[head].push(obj)
    }

    return {
      vol,
      data: map,
    }
  }

  get title() {
    const vol = this.$data.vol
    const year = this.$utils.calcYearFromKiyoVol(vol)
    return `東京大学史料編纂所研究紀要第${vol}号（${year}）`
  }

  breadcrumbs: any[] = [
    {
      text: this.$t('編纂・研究・公開'),
      name: 'publication',
    },
    {
      text: this.$t('研究紀要'),
      name: 'publication-kiyo',
    },
  ]

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
