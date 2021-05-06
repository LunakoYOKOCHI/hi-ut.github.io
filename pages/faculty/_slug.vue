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
              <td>{{ $t(organization[person.main]) }}</td>
            </tr>
            <tr>
              <th>{{ $t('職位・学位') }}</th>
              <td>{{ $t(gyoseki["【職位】"][0]) }}／{{ $t(gyoseki["【学位】"][0]) }}</td>
            </tr>
            <tr v-if="lang === 'ja'">
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
                    <li v-for="(value, key) in gyoseki['【'+field+'】']" :key="key">{{ value }}</li>
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
  
  async asyncData({ payload, params, $axios }: any) {
    let gyoseki: any = []
    let id = ""
    let people: any = {}
    let organization: any = {}
    if (payload) {
      /*
      return {
        id: payload.id,
        gyoseki: payload.gyoseki,
      }
      */
      id = payload.id
      gyoseki = payload.gyoseki
      people = payload.people
      organization = payload.organization
    } else {
      //const id = params.slug.split('gyoseki_')[1]
      //const gyoseki = await $axios.$get(process.env.BASE_URL + "/assets/json/faculty/" + id + ".json")
      id = params.slug.split('gyoseki_')[1]
      gyoseki = await $axios.$get(process.env.BASE_URL + "/assets/json/faculty/" + id + ".json")

      const people_ = await $axios.$get(
        process.env.BASE_URL +
          '/assets/json/faculty.json'
      )

      const map: any = {}

      for(const obj of people_){
        const id = obj.slug
        obj.list_flag = obj.list_flg === "-1" ? false : true
        obj.also = obj.also.split("|")
        obj.name_ja = obj.surname + " " + obj.forename
        obj.name_kana = obj.surname_kana + " " + obj.forename_kana
        obj.name_en = obj.surname_en + " " + obj.forename_en
        map[obj.slug] = obj
      }

      people = map

      organization = await $axios.$get(
        process.env.BASE_URL +
          '/assets/json/organization.json'
      )

      /*
      return {
        people: map,
        organization
      }
      */

      /*
      return {
        gyoseki,
        id
      }
      */
    }

    const map: any = {}

    for(const obj of gyoseki){
      const label = obj["項目"]
      const value = obj["内容"]

      if(!map[label]){
        map[label] = []
      }
      map[label].push(value)
    }

    return {
      gyoseki: map,
      id,
      people,
      organization
    }

  }

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

  //people: any = process.env.people

  //organization: any = process.env.organization

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
