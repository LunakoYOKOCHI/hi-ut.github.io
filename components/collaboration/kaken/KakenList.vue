<template>
  <div>

    <div v-for="(item, i) in data" :key="item.type" class="mb2">

      <h3 class="h04">{{mapping[item.type]}}</h3>

      <ul>

        <template v-for="(obj, j) in item.data">
          <li  :key="j" v-if="obj.end >= currentFiscalYear">
            <template v-if="obj.kaken">
              <a :href="`https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-${obj.kaken}/`">{{obj.title}}</a>
            </template>
            <template v-else>
              {{obj.title}}
            </template>
            （{{obj.start}}～{{obj.end}}年度）
            <p v-if="obj.url2"><a :href="obj.url2">プロジェクトのページへ</a></p>
          </li>
        </template>

      </ul>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
  },
})
export default class LangSelectComponent extends Vue {
  currentFiscalYear: any = process.env.currentFiscalYear

  mapping: any = {
    "S": "基盤研究(S)",
    "A": "基盤研究(A)",
    "B": "基盤研究(B)",
    "C": "基盤研究(C)",
    "hoga": "挑戦的萌芽研究",
    "wakate_b": "若手研究(B)",
    "wakate" : "若手研究",
    "start" : "研究活動スタート支援"
  }

  @Prop()
  data!: any[]

  
}
</script>
