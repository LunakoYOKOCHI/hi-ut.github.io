<template>
  <table class="table04 mt2">
    <tbody>
      <template v-for="(item, key) in data['undefined']">
        <tr :key="key">
          <td colspan="3">
            <template v-if="item.url">
              <a :href="item.url" target="_blank">{{ item.label }}</a>
            </template>
            <template v-else>
              {{ item.label }}
            </template>
          </td>
          <td>{{ item.page }}</td>
        </tr>

        <template v-if="item.children">
          <tr :key="key2" v-for="(item2, key2) in item.children">
            <template v-if="key2 == 0">
              <td :rowspan="item.children.length"></td>
            </template>
            <td>{{ item2.index }}</td>
            <td>
              <template v-if="item2.url">
                <a :href="item2.url" target="_blank">{{ item2.label }}</a>
                <template v-if="item2.repos">
                  <div>
                    （東京大学学術機関リポジトリ

                    <a
                      class="ml1"
                      v-for="(item3, key3) in item2.repos"
                      :key="key3"
                      :href="item3.url"
                      target="_blank"
                    >
                      {{ item3.label }}
                    </a>

                    ）
                  </div>
                </template>
              </template>
              <template v-else>
                {{ item2.label }}
              </template>
            </td>
            <td>{{ item2.page }}</td>
          </tr>
        </template>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class ListOld extends Vue {
  @Prop()
  data!: any[]

  @Prop()
  vol!: number

  baseUrl: any = process.env.BASE_URL
}
</script>
