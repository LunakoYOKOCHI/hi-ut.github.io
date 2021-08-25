<template>
  <div>
    <div class="key-common">
      <div class="inner">
        <p class="ttl">{{ $t(keyStr) }}</p>
      </div>
    </div>

    <div class="breadcrumb">
      <ul>
        <li v-for="(item, key) in items" :key="key">
          <template v-if="item.to">
            <nuxt-link :to="item.to">{{ item.text }}</nuxt-link>
          </template>
          <template v-else>
            {{ item.text }}
          </template>
        </li>
      </ul>
    </div>

    <div class="contents-wrap">
      <main id="main-contents" class="main-contents">
        <!-- InstanceBeginEditable name="main" -->
        <section>
          <slot />
        </section>
      </main>

      <div id="sidebar">
        <aside>
          <!-- InstanceBeginEditable name="sub" -->
          <nav>
            <h2>{{ $t(label) }}</h2>
            <ul>
              <template v-for="(obj, index) in menu">
                <li v-if="obj.lang.includes(lang)" :key="index">
                  <nuxt-link
                    :key="'parent_' + index"
                    :class="title == obj.label ? 'current' : ''"
                    :to="localePath(obj.to)"
                    exact
                  >
                    {{ $t(obj.label) }}
                  </nuxt-link>

                  <ul>
                    <template v-for="(obj2, index2) in obj.children">
                      <li v-if="obj2.lang.includes(lang)" :key="index2">
                        <template v-if="obj2.to">
                          <nuxt-link :key="index2" :to="localePath(obj2.to)">
                            {{ $t(obj2.label) }}
                          </nuxt-link>
                        </template>
                        <template v-else>
                          <a
                            :key="'parent_' + index"
                            :class="title == obj2.label ? 'current' : ''"
                            :href="obj2.href[lang]"
                            exact
                          >
                            {{ $t(obj2.label) }}
                          </a>
                        </template>
                      </li>
                    </template>
                  </ul>
                </li>
              </template>
            </ul>
          </nav>
          <!-- InstanceEndEditable -->
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class ComponentLayout extends Vue {
  @Prop()
  title!: string

  @Prop({ default: 0 })
  index!: number

  @Prop({ default: '' })
  head!: string

  @Prop({ default: () => [] })
  breadcrumbs!: any

  @Prop({ default: false })
  hideBreadcrumbs!: boolean

  baseUrl: string = process.env.BASE_URL || ''
  menuList: any = process.env.menuList

  get lang() {
    return this.$i18n.locale
  }

  get menu(): any {
    return this.menuList[this.index].children
  }

  get label(): any {
    return this.menuList[this.index].label
  }

  get keyStr(): string {
    return this.head || this.label
  }

  get items() {
    const items: any[] = [
      {
        text: 'HOME',
        disabled: false,
        to: this.localePath({
          name: 'index',
        }),
        exact: true,
      },
    ]

    if(!this.hideBreadcrumbs){
      const breadcrumbs = this.breadcrumbs
      if (breadcrumbs.length === 0) {
        const menu = this.menuList[this.index]
        items.push({
          text: this.$t(menu.label),
          to: this.localePath(menu.to),
        })
      } else  {
        for (let i = 0; i < breadcrumbs.length; i++) {
          const breadcrumb = breadcrumbs[i]
          if (breadcrumb.to) {
            items.push({
              text: breadcrumb.text, // 'HOME',
              disabled: false,
              to: breadcrumb.to,
              exact: true,
            })
          } else {
            items.push({
              text: breadcrumb.text, // 'HOME',
              disabled: false,
              to: this.localePath({
                name: breadcrumb.name, // 'index',
              }),
              exact: true,
            })
          }
        }
      }
    }

    items.push({
      text: this.title,
    })
    return items
  }
}
</script>
