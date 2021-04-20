<template>
  <LayoutAbout :title="title">
    <h1 class="h02">{{ $t(title) }}</h1>

    <template v-if="lang == 'ja'">
      <h2 class="h03">ごあいさつ</h2>

      <figure>
        <img
          width="183"
          :src="baseUrl + '/assets/img/about/mes_img01.jpeg'"
          alt="本郷 恵子 / Keiko Hongo"
        />
        <figcaption>本郷 恵子（ほんごう　けいこ）</figcaption>
      </figure>

      <p class="mtx mt2">
        　東京大学史料編纂所は、古代から明治維新期にいたる前近代日本史関係の史料を対象とする研究所です。国内外に所在する各種史料を収集・分析して、日本史の基幹史料集として編纂・刊行し、学界および社会にひろく公開し、貢献することを使命としてきました。
      </p>

      <p class="mtx">
        　研究所の歴史は古く、江戸時代の和学講談所まで遡ります。これを引き継いで、1869（明治２）年に明治政府の修史事業が開始されます。その後、組織は帝国大学に移管され、史料集の編纂と研究という現在につながる方針が採用されました。1901（明治34）年には、最初の成果である『大日本史料』『大日本古文書』の、それぞれ第1冊を刊行し、以来、1200冊に迫る史料集を世に送り出しています。
      </p>

      <p class="mtx">
        　日本の歴史に関わる史料は、国内外に数多く伝来しています。これらを調査・収集することが、史料編纂に向けての最初のステップです。史料情報を記録するためには、影写・謄写等の書写や写真撮影等、史料の特性にあわせて当該の時代における最適の手段を採用してきました。近年ではデジタル技術によって、高精細の史料画像を組織的に蓄積・公開する仕組みを整えています。また史料編纂所では、複製史料のほかに、国宝『島津家文書』をはじめとする20万点以上の貴重な原本史料を所蔵しています。これらを次代に伝えるために修理をほどこすとともに、原本史料のみが持つ情報を解析し、保全と研究が一体となった研究事業を進めています。
      </p>

      <p class="mtx">
        　史料編纂所は、研究対象の拡大や、発信方法の革新にも積極的に取り組んできました。1997年に画像史料解析センターを開設し、絵巻や荘園絵図・古写真等の研究を本格化させました。2006年に前近代日本史情報国際センターを設立、1980年代から構築・進化させてきた歴史情報処理システムSHIPSの拡充とともに、歴史情報学という新たな分野を発進させました。在外日本関係史料の調査、海外への日本史情報の発信等、日本史の国際化事業を展開し、中国・韓国・ロシアその他、多様な地域の史料所蔵機関・編纂機関との連携も深めています。2009年には「日本史史料の研究資源化に関する研究拠点」に認定され、各地の研究者・博物館・自治体等と協力して共同研究を推進し、その成果を共同利用に供しています。さらに2019年より、日本学術振興会「人文学・社会科学データインフラストラクチャー構築推進事業」における唯一の人文学拠点として採択され、共有化・国際化・連結化を軸とした日本史史料に関わるデータ基盤構築を開始しました。2020年度には、同事業の運営委員会より総合評価「Ｓ」をいただいています。
      </p>

      <p class="mtx">
        　史料編纂所は、史料に関わるさまざまな情報を、歴史に興味を持つすべての方々にお届けしたいと考えています。所属する研究者は、基幹史料集の編纂に加え、個人およびプロジェクト研究・大学教育・市民向け講座等、多様な活動を通じて成果の発信に努めています。図書・史料等の管理・運用を担当する図書部、高度な技術と専門性を備えた史料保存技術室、全体を統括する事務部が協力して研究体制を支えています。
      </p>

      <p class="mtx">
        　2020年からの新型コロナウイルス感染症（COVID-19）の拡大によって、史料編纂所の活動も大きな制約を受けています。重要な柱である史料収集を思うように実施できず、所内外における研究コミュニケーションにも影響が出ていることは否めません。一方でSHIPSデータベースへのアクセス数は大幅に増加しており、外出制限下で研究を続けるために、史料編纂所への期待が一段と高まっていることが感じられます。
      </p>

      <p class="mtx">
        　史料編纂所は、日本史史料研究の拠点組織として、伝統を踏まえ、最新の技術を導入しながら、歴史研究・史料研究の基盤を固めると同時に最前線を担う研究所です。みなさまの一層のご理解とご支援をお願い申し上げます。
      </p>
    </template>

    <template v-else>

      <h2 class="h03">Pursuing our core mission for continued growth</h2>

      <figure>
        <img
          width="183"
          :src="baseUrl + '/assets/img/about/mes_img01.jpeg'"
          alt="本郷 恵子 / Keiko Hongo"
        />
        <figcaption>Director Keiko Hongo</figcaption>
      </figure>


      <p class="mtx mt2">　The Historiographical Institute of the University of Tokyo is a research institution for the study of historical documents that span Japan’s pre-modern history from ancient times through to the Meiji Restoration. Our mission is to collect and analyze various historical documents from holdings both in Japan and overseas and compile and publish these as key collections of Japanese historical documents for the benefit of academia and society.</p>

      <p class="mtx">
      　Our institute has a long history, and its origins stretch back to the Institute for Japanese Studies (Wagaku Kōdansho) in the Edo period. The Meiji Government took over the operation of this institute in the second year of the Meiji period (1869) and embarked on historiographical undertakings. The institute was subsequently transferred to the Imperial University, which adopted the current style of compiling and studying Japanese historical materials. Starting with the first volumes of Dai Nihon Shiryō and Dai Nihon Komonjo published in 1901, we have published a total of more than 1,200 volumes of Japanese historical materials and archives. </p>

      <p class="mtx">
      　Many historical materials related to Japanese history can be found in both Japan and overseas. Investigation and collection of these materials are the first steps to historiographical undertakings. In recording such historical information, we have adopted the most appropriate method available at the time such as calligraphic reproduction, copying, and photography, according to the characteristics of the historical material. With the digitalization of photography of recent years, we have established a new framework to systematically accumulate and publish high-definition photographs of historical materials. In addition to reproduced materials, the Historiographical Institute also has a vast archive of 200,000 precious original source materials including a designated National Treasure, the Shimazu-ke Monjo (Documents of the Shimazu Family). We repair and conserve these materials to pass them down to the next generation and also analyze the unique information only original materials bear, integrating conservation and research together as a consistent endeavor. </p>

      <p class="mtx">
      　The Historiographical Institute has made active efforts to expand our scope of research and to innovate the ways we disseminate information. In 1997, we established the Center for the Study of Visual Sources to engage in full-fledged research of pictorial sources such as picture scrolls, shoen-ezu (ancient and medieval estate maps) and old photographs. The International Center for the Digitization of Premodern Japanese Sources was established in 2006 to expand the Siryohensansho Historical Information Processing System (SHIPS) we have built and evolved since the 1980s and pioneer the new field of historical informatics. We also contribute to the internationalization of Japanese history such as investigations of Japanese historical materials held overseas and international dissemination of Japanese history information. Through these activities, we have deepened collaboration with overseas institutions that hold historical materials or engage in historiography in diverse countries, including those in China, Korea and Russia. Certified as a “research center for converting Japanese historical materials into research resources” since 2009, we have promoted collaborative research with researchers, museums, and regional authorities throughout Japan and the findings from such collaborations are offered as research resources for joint use. In 2019, we were selected as the only humanities institute in the Program for Constructing Data Infrastructure for the Humanities and Social Sciences by the Japan Society for the Promotion of Science and have embarked on the construction of data infrastructure on Japanese historical materials, aiming to strengthen the core values of data sharing, internationalization, and connectivity. In AY2020, we received an “S” rating for comprehensive performance in an evaluation conducted by the steering committee of the program. </p>

      <p class="mtx">
      　The Historiographical Institute seeks to deliver various information related to historical materials   to everyone interested in history. In addition to historiographical work, our affiliated researchers are working to disseminate their research findings through diverse activities ranging from research by individual researchers or collaborative teams to university education and extension lectures open to the public. Research support departments including the Library responsible for managing and utilizing books and historical materials, the Conservation Laboratory equipped with advanced technologies and expertise, and the Administration Office that oversees the operation of the entire institute cooperate to support the research system. </p>

      <p class="mtx">
      　Due to the spread of COVID-19 since 2020, the activities of the Historiographical Institute have been significantly restricted like everyone else. We have not been able to make much progress in the collection of historical materials, an important pillar of our operations, and we cannot deny that the pandemic has affected research communications both within and outside of the institute. On the other hand, access to our SHIPS database has significantly increased, indicating heightened expectations for the roles of the Historiographical Institute to support research activities under the curfew. </p>
      
      <p class="mtx">
      　The Historiographical Institute, as the central organization of Japanese historiographical research, not only builds the foundations but also drives research efforts at the forefront of historical and historiographical research, based on tradition and introducing state-of-art technologies. We request your renewed understanding and support for all such efforts.
      </p>

    </template>
  </LayoutAbout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutAbout from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutAbout,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t('所長挨拶')

  lang: any = this.$i18n.locale

  head() {
    const title = this.title
    return {
      title,
    }
  }

  items: any[] = [
    {
      text: 'HOME',
      disabled: false,
      to: this.localePath({
        name: 'index',
      }),
      exact: true,
    },
    {
      text: this.$t(this.title),
    },
  ]
}
</script>
