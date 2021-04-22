<template>
  <div>
    <v-container class="my-5">
      <Layout :title="title" :index="2" :breadcrumbs="breadcrumbs">
        <h1 class="h02">{{ title }}</h1>

        <KakenList :data="data"></KakenList>

        <h3 class="h04">研究成果公開促進費（データベース）</h3>

        <ul>
          <li>古文書目録データベース</li>
          <li>史料編纂所所蔵和漢古書書誌画像データベース</li>
          <li>東京大学史料編纂所歴史情報処理システム</li>
          <li>『編年史料綱文』データベース</li>
          <li>日本中世古文書フルテキストデータベース</li>
          <li>日本史史料書誌統合データベース</li>
          <li>日本古文書ユニオンカタログ</li>
          <li>古記録フルテキストデータベース</li>
        </ul>

        <h3 class="h04">
          中核的研究拠点形成プログラム「前近代日本史料の構造と情報資源化の研究」
          (The Japan Memory Project)2000-04 年
        </h3>

        <p>
          世界各国では、歴史資料の情報化とネットワーク公開が推進されています。わが国でも、学術審議会が「人文科学の古典籍の電子化とアーカイブの推進、並びに世界に向けての公開」の必要性が強調されています。一方、歴史研究は、１）史料収集、２）史料の生成・保管の過程と、その結果生ずる史料群秩序の復原、３）史料読解、４）史料を構成する諸要素への分解と再結合、５）史料に基づく歴史文脈の理解という諸段階を経て遂行されます。これらの過程に、コンピュータを利用して、より正確でより説得力のある研究を生み出していくことを目的としたのが、「前近代日本史料の構造と情報資源化の研究」です。歴史史料を、コンピュータ上で事件、個人、物体などの諸要素に分解して、データベースを通じて歴史的文脈として再結合する方法を研究し、実用化しました。また、これらの日本史史料を国際的に利用するための国際共同研究も取り組みました。
        </p>

        <p>
          本研究により、史料編纂所の多くの史料がコンピュータで掌握可能となり、史料編纂所の史料収集事業、史料集編纂事業の電子化が促進されました。
        </p>
      </Layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Layout from '~/components/layout/Layout.vue'
import KakenList from '~/components/collaboration/kaken/KakenList.vue'

@Component({
  components: {
    Layout,
    KakenList,
  },
})
export default class about extends Vue {
  //baseUrl: string = process.env.BASE_URL || ''
  //title: any = this.$t('共同研究')

  head() {
    const title = this.title
    return {
      title,
    }
  }

  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t('科学研究費補助金による共同研究（研究期間終了分）')
  currentFiscalYear: any = process.env.currentFiscalYear

  mapping: any = {
    COE: '中核的研究拠点（COE）形成基礎研究費',
    sosei: '学術創成研究費',
    S: '基盤研究(S)',
    A: '基盤研究(A)',
    B: '基盤研究(B)',
    C: '基盤研究(C)',
    hoga: '挑戦的萌芽研究',
    wakate_a: '若手研究(A)',
    wakate_b: '若手研究(B)',
    wakate: '若手研究',
    wakate_start: '若手研究(スタートアップ)',
    start: '研究活動スタート支援',
    shorei: '奨励研究',
    tokutei: '特定領域研究',
  }

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return payload
    } else {
      const types = [
        'COE',
        'sosei',
        'S',
        'A',
        'B',
        'C',
        'hoga',
        'wakate_b',
        'wakate',
        'start',
      ]

      const res = []

      for (let type of types) {
        try {
          const data = await $axios.$get(
            process.env.BASE_URL +
              '/assets/json/collaboration/kaken/' +
              type +
              '.json'
          )

          //const data = JSON.parse(fs.readFileSync("static/assets/json/collaboration/kaken/" + type + ".json"))

          res.push({
            type,
            data,
          })
        } catch (err) {
          console.log({ err })
        }
      }

      return {
        data: res,
      }
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
    ]
  }
}
</script>
