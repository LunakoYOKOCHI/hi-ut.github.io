<template>
  <section class="top-topics">
    <h2 class="h01" v-if="isTop">
      News &amp; Topics
      <nuxt-link
        class="list"
        style="text-decoration: none"
        :to="localePath({ name: 'news-year' })"
        >{{ $t('一覧') }}</nuxt-link
      >
    </h2>

    <div class="page-link" :class="isTop ? 'c4' : ''">
      <ul>
        <li v-if="isTop"><a style="cursor: pointer;" @click="select = 'latest'">{{ $t('新着一覧') }}</a></li>
        <li><a style="cursor: pointer;" @click="select = 'news'">{{ $t('news') }}</a</li>
        <li><a style="cursor: pointer;" @click="select = 'event'">{{ $t('event') }}</a> </li>
        <li><a style="cursor: pointer;" @click="select = 'data'">{{ $t('data') }}</a> </li>
      </ul>
    </div>


    <div :class="isTop ? 'data' : ''"> <!-- style="height: 700px" -->
      <template v-for="(newsMap, key) in newsList_">
        <dl :key="key" v-if="select === 'latest' || select === newsMap.tag">
          <dt class="mb1">
            <span>{{ newsMap.date }}</span>
            <span class="chip2">{{ $t(newsMap.tag) }}</span>
          </dt>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <dd>
            <span :style="getColor(newsMap.featured)">{{ newsMap.featured }}</span> <span v-html="newsMap.content"></span>
          </dd>
        </dl>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import axios from 'axios'

@Component({
  components: {},
})
export default class NewsComponent extends Vue {
  @Prop({ default: false })
  isTop!: boolean

  @Prop()
  newsList!: any[]

  lang: string = this.$i18n.locale

  select: string = "latest"

  get newsList_(){
    let newsList = this.newsList

    if(this.isTop){
      const newsList2 = []
      
      for(let item of newsList){

        if(item.top === "1"){
          newsList2.push(item)
        }
      }

      newsList = newsList2
    } else {
      newsList.sort(function(a,b){
        if(a.date < b.date ) return 1;
        if(a.date > b.date ) return -1;
        return 0;
      });
    }
    

    return newsList
  }

  getColor(value: any){
    if(value === "New!"){
      return "color: #ff0101;"
    } else if(value === "Update!"){
      return "color: #5cc2d0;"
    } else if(value === "【募集終了】"){
      return "font-weight: bold;"
    }
    return ""
  }
}
</script>
