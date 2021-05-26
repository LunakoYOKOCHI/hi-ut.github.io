<template>
  <div>
    <template v-for="(item, i) in items" v-if="item.data.length > 0">
      <div :key="item.type" class="mb2">
        <h3 class="h04">{{ mapping[item.type] }}</h3>

        <ul>
          <template v-for="(obj, j) in item.data">
            <li
              :key="j"
              v-if="
                past
                  ? obj.end < currentFiscalYear
                  : obj.end >= currentFiscalYear
              "
            >
              <template v-if="obj.kaken">
                <a
                  :href="`https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-${obj.kaken}/`"
                  >{{ obj.title }}</a
                >
              </template>
              <template v-else>
                {{ obj.title }}
              </template>
              （{{ obj.start }}～{{ obj.end }}年度）
              <p v-if="obj.url2">
                <a :href="obj.url2">プロジェクトのページへ</a>
              </p>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class LangSelectComponent extends Vue {
  currentFiscalYear: any = process.env.currentFiscalYear

  mapping: any = process.env.kakenMap

  @Prop()
  data!: any[]

  @Prop({ default: false })
  past!: boolean

  // 条件に合致しないものを除外
  get items() {
    const past = this.past
    const currentFiscalYear = this.currentFiscalYear

    const data = this.data
    const items = []
    for (const item of data) {
      const arr = []
      for (const obj of item.data) {
        if (past ? obj.end < currentFiscalYear : obj.end >= currentFiscalYear) {
          arr.push(obj)
        }
      }

      arr.sort(function (a, b) {
        if (a.kaken < b.kaken) return 1
        if (a.kaken > b.kaken) return -1
        return 0
      })

      item.data = arr
      items.push(item)
    }

    return items
  }
}
</script>
