<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{$t("編纂・出版")}}</h1>

      <template v-for="(obj, key) in years">
        <nuxt-link
          v-if="obj.year != -1"
          :key="key"
          class="mr1"
          :to="localePath(obj.to)"
          >{{ obj.year }}年度</nuxt-link
        >
      </template>

      <h2 class="h03 mt1">{{title}}</h2>

      <div v-for="(obj, key) in data" :key="key" class="mt2">
        <template v-if="key !== '本所'">
          <ul>
            <li v-for="(item, key2) in obj" :key="key2">
              <template v-if="item.id">
                <nuxt-link :to="localePath({name: 'publication-syoho-vol-slug', params: {vol: item['所報Vol'], slug: item.id}})">
                  {{item.title}}
                </nuxt-link>
                
              </template>
              <template v-else>
                {{item.title}}
              </template>
              <a v-if="item.buy" class="ml2" :href="item.buy">購入</a>
            </li>
          </ul>
          <div class="text-right">{{`以上${key}より販売中`}}</div>
        </template>
        <template v-else>
          <ul>
            <li v-for="(item, key2) in obj" :key="key2">
              <template v-if="item['所報Vol']">
                <nuxt-link :to="localePath({name: 'publication-syoho-vol', params: {vol: $utils.zfill(item['所報Vol'], 4)}})">
                  {{item.title}}
                </nuxt-link>
                
              </template>
              <template v-else>
                <nuxt-link :to="localePath({name: 'publication-kiyo-vol', params: {vol: $utils.zfill(item['紀要Vol'], 4)}})">
                  {{item.title}}
                </nuxt-link>
              </template>
            </li>
          </ul>
          <div class="text-right">本所事務部財務・研究支援チーム（tel03-5841-5946　fax03-5841-5956）にて頒布中</div>
        </template>
      </div>

      <figure class="mt2">
        <img :src="'/assets/img/publication/pub_list.gif'" />
      </figure>
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

   async asyncData({params}: any) {
    
    const year = params.year

    const data_ = await import(`~/static/assets/json/publication/list/${year}.json`)
    const data: any[] = data_.default

    const map: any = {}
    for(const obj of data){
      const publisher = obj.publisher
      if(!map[publisher]){
        map[publisher] = []
      }
      map[publisher].push(obj)
    }

    /*

    const map: any = {}

    for(const obj of facultyList){
      const id = obj.slug
      obj.list_flag = obj.list_flg === "-1" ? false : true
      obj.name_ja = obj.surname + " " + obj.forename
      obj.name_kana = obj.surname_kana + " " + obj.forename_kana
      obj.name_en = obj.surname_en + " " + obj.forename_en
      map[obj.slug] = obj
    }

    return {
      people: map,
      organizationMap,
      facultyList
    }

    */

    return {data: map, year}
  }

  get title(): any {
    return this.$data.year + "年度出版物"
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }

  latestFiscalYear: any = process.env.publicationLatestFiscalYear

  get syohoVol(){
    return this.$utils.calcSyohoVolFromYear(this.$data.year)
  }

  get kiyoVol(){
    return this.$utils.calcKiyoVolFromYear(this.$data.year)
  }

  get years() {
    const years = []

    for (let i = this.latestFiscalYear; i >= 2006; i--) {
      years.push({
        year: i,
        to: {
          name: 'publication-list-year',
          params: {
            year: i,
          },
        },
      })
    }

    return years
  }
}
</script>
