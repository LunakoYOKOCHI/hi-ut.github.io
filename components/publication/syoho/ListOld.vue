<template>
  <table class="table04 mt2">
    <tbody>
      <tr>
        <td>{{ '標題' }}</td>
        <td>{{ '著者名' }}</td>
        <td>{{ '掲載ページ' }}</td>
      </tr>

      <template v-for="(obj, key) in data">
        <tr :key="`th-${key}`" :id="key === '史料採訪' ? 'saiho' : ''">
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
              <a :href="baseUrl + `/publication/syoho/${vol}/${item.id}/`">
                {{ item.title }}
              </a>
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
