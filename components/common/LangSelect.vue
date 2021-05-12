<template>
  <ul
    class="lang-select"
    @click="isOpenLanguageSelection = !isOpenLanguageSelection"
  >
    <li>
      <span>Language</span>
      <VueSlideToggle :duration="500" :open="isOpenLanguageSelection">
        <ul class="child">
          <template v-for="(value, label) in langMap">
            <li v-if="lang !== label">
              <a :href="getUrl(label)">{{value}}</a>
            </li>
          </template>
        </ul>
      </VueSlideToggle>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

// tslint:disable-next-line:no-var-requires
const { VueSlideToggle } = require('vue-slide-toggle')

@Component({
  components: {
    VueSlideToggle,
  },
})
export default class LangSelectComponent extends Vue {
  isOpenLanguageSelection: boolean = false

  langMap: any = process.env.langMap

  baseUrl: string = process.env.BASE_URL || ''

  get lang() {
    return this.$i18n.locale
  }

  getUrl(label: string){
    return this.baseUrl + '/' + (label === this.$i18n.defaultLocale ? '' : label + "/")
  }
}
</script>
