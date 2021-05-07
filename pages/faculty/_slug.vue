<template>
  <div>
    <Layout :title="title" :index="0" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{ title }}</h1>

      <div class="scroll-table">
        <table class="table04 mt-10">
          <tbody>
            <tr>
              <th width="20%">{{ $t('氏名（かな）') }}</th>
              <td>
                <template v-if="person.rmap">
                  <a :href="rmap">{{ name }}</a>
                </template>

                <template v-else>
                  {{ name }}
                </template>
                <template v-if="lang === 'ja'">
                  （{{ person.name_kana }}）
                </template>
              </td>
            </tr>
            <tr>
              <th>{{ $t('所属') }}</th>
              <td>{{ $t(organizationMap[person.main]) }}</td>
            </tr>
            <tr>
              <th>{{ $t('職位・学位') }}</th>
              <td>{{ $t(gyoseki["【職位】"][0]) }}／{{ gyoseki["【学位】"][0] }}</td>
            </tr>
            <tr v-if="lang === 'ja' && gyoseki['【研究テーマ】'].length > 0">
              <th>{{ $t('研究テーマ') }}</th>
              <td>
                <ul>
                  <template v-for="(res, key) in gyoseki['【研究テーマ】']">
                    <!-- <li v-if="res[lang]" :key="key">{{ res[lang] }}</li> -->
                    <li>{{res}}</li>
                  </template>
                </ul>
              </td>
            </tr>

            <template v-for="(field, key2) in fields">

              <tr :key="key2" v-if="gyoseki['【'+field+'】'] && gyoseki['【'+field+'】'].length > 0">
                <th>{{ $t(field) }}</th>
                <td>
                  <ul>
                    <template v-for="(value, key) in gyoseki['【'+field+'】']">
                      <li v-if="value" :key="key">{{ value }}</li>
                    </template>
                  </ul>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Layout from '~/components/layout/Layout.vue'

@Component({
  components: {
    Layout,
  },
})
export default class about extends Vue {
  
  async asyncData({ params }: any) {
    const id = params.slug.split('gyoseki_')[1]

    const facultyList_ = await import(`~/static/assets/json/faculty/facultyList.json`)
    const facultyList = facultyList_.default

    const gyosekiList_ = await import(`~/static/assets/json/faculty/gyosekiList.json`)
    const gyosekiList= gyosekiList_.default

    const organizationMap: any = process.env.organizationMap

    let gyoseki: any = {}

    for(const obj of gyosekiList){
      if(obj.label === id){
        gyoseki = obj.value
      }
    }

    const map: any = {}

    for(const obj2 of facultyList){
      const obj: any = JSON.parse(JSON.stringify(obj2))
      const id = obj.slug
      obj.list_flag = obj.list_flg === "-1" ? false : true
      obj.also = [] //obj.also ? obj.also.split("|") : []
      obj.name_ja = obj.surname + " " + obj.forename
      obj.name_kana = obj.surname_kana + " " + obj.forename_kana
      obj.name_en = obj.surname_en + " " + obj.forename_en
      map[obj.slug] = obj
    }

    const people = map

    for(const obj of gyoseki){
      const label = obj["項目"]
      const value = obj["内容"]

      if(!map[label]){
        map[label] = []
      }
      if(value){
        map[label].push(value)
      }
    }

    return {
      gyoseki: map,
      id,
      people,
      organizationMap
    }

  }

  people: any = {}

  fields: string[] = ["著書・論文", "講演・報告", "史料編纂", "その他"]

  breadcrumbs: any[] = [
    {
      text: this.$t('ご案内'),
      name: 'about-slug',
    },
    {
      text: this.$t('教員一覧'),
      name: 'faculty',
    },
  ]

  lang: string = this.$i18n.locale || 'ja'

  get person() {
    const people = this.$data.people
    const slug = (this as any).id
    return people[slug] || {}
  }

  get test() {
    return ['論文1', '論文2']
  }

  get rmap() {
    return 'https://researchmap.jp/' + this.person.rmap + '?lang=' + this.lang
  }

  get name() {
    const person = this.person
    return this.lang === 'ja' ? person.name_ja : person.name_en
  }

  get title() {
    return this.$t('研究業績') + '（' + this.name + '）'
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
