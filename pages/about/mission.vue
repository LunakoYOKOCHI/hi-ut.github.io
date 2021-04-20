<template>
  <LayoutAbout :title="title">
    <h1 class="h02">{{ $t(title) }}</h1>

    <template v-if="lang == 'ja'">
      <h2 class="h03">史料研究</h2>

      <p>
        すべての歴史学研究の基礎は、研究材料としての史料の収集、精確な読解、史料批判にあります。
      </p>

      <p>
        史料は伝来したところに保存することが原則です。そのため、史料編纂所の研究者は日本全国・世界各地に史料調査に出かけます。そこで見出した注目すべき史料について複写を行います。史料編纂所では、発足時から影写（敷き写し）、謄写（見取り写し）、模写という技術を用い、また成熟した写真技術や最新のディジタル画像技術を駆使しています。こうして膨大な日本史史料コレクションを築き上げてきました。勿論、貴重な原本史料も多数所蔵しています。
      </p>

      <p>
        収集された史料は精確に読解されねばなりません。文字を正しく読むことにも長い修練が必要ですが、さらに正しく解釈するために、史料の性格や歴史的背景を研究することが求められます。この、史料の様式・機能、形態・素材、伝来や史料群の形成、管理や情報化などに関する研究は、「史料学」と呼ばれています。史料編纂所では、この史料学の研究を推進すべく、その特長を活かして、内外の研究機関・研究者との共同研究も組織しています。また、大学院授業、日本学術振興会特別研究員受け入れ、プロジェクト研究参加を通じて、この分野の多数の院生・若手研究者の養成に努めています。
      </p>

      <h3 class="h04">史料採訪</h3>

      <p>
        史料編纂所では、日本全国・世界各地に史料調査に出かけ、注目すべき史料について複写を行い、史料集編纂のための素材となる史料を収集してきました。このような作業を史料採訪と呼んでいます。
      </p>
      <p>
        複製の作成は、当初は影写(敷き写し)・謄写(見取り写し)・模写という人の手による技術を用い、その後は写真による撮影を併用し、現在では最新のデジタル撮影技術を駆使しています。デジタル撮影にあたっては、統一仕様を定めてデジタル画像を生成・管理・公開する体制を整えています。
      </p>
      <p>
        現在では博物館・寺院・神社から個人宅まで、年間50件程度の採訪が行われ、その概要は<v-link
          :to="{ name: 'publication' }"
          >『東京大学史料編纂所報』</v-link
        >に掲載されています。
      </p>
      <p>
        こうした採訪によって、行方不明になっていた史料の再発見や、まったく知られていなかった新しい史料の発見もありました。最近では豊臣秀吉の書状33
        通が国内で新たに発見され、あるいはロシア・サンクトペテルブルクで蝦夷地のアイヌ首長に宛てた松前藩定書が見つかってマスコミでも注目されました。
      </p>
      <p>
        史料採訪によって収集された複製史料は、史料編纂所の閲覧室で日本史研究の素材として多くの市民・研究者に利用されています。近年はデジタル画像として所内・閲覧室で検索・閲覧することも可能です（Hi-CAT
        Plus）。また、原本所蔵者の許可を得て、可能な部分はウェブ公開に供しています。
      </p>

      <div class="flex col3 mt2">
        <figure>
          <img
            :src="baseUrl + '/assets/img/about/simg1.png'"
            alt="古写真調査(オーストリア)"
          />
          <figcaption>古写真調査(オーストリア)</figcaption>
        </figure>

        <figure>
          <img
            :src="baseUrl + '/assets/img/about/simg2.png'"
            alt="古文書調査(山形)"
          />
          <figcaption>古文書調査(山形)</figcaption>
        </figure>

        <figure>
          <img
            :src="baseUrl + '/assets/img/about/simg3.png'"
            alt="2018年1月10日・読売新聞朝刊"
          />
          <figcaption>2018年1月10日・読売新聞朝刊</figcaption>
        </figure>
      </div>

      <h2 class="h03 mt3">編纂</h2>

      史料を研究素材として翻刻・再編成する作業が「編纂」です。史料編纂所では、事件が起きた時間の流れに沿って関連史料を集める編年史料と、史料群の構成と内容を精密に復元する編纂史料とに分けて編纂を行っています。『大日本史料』『大日本維新史料　編年之部』は編年史料集であり、『大日本古文書』『大日本古記録』『大日本近世史料』『大日本維新史料　類纂之部』『日本関係海外史料』などは編纂史料集です。

      <figure class="mt2">
        <img
          :src="baseUrl + '/assets/img/about/about_hi_shiryo.jpeg'"
          alt="文科大学時代の史料編纂掛（1930年）"
        />
        <figcaption>文科大学時代の史料編纂掛（1930年）</figcaption>
      </figure>

      <h2 class="h03 mt3">出版</h2>

      蒐集、整理、研究した史料を広く一般の利用に供するために、史料集の出版を行っています。史料編纂所では1901（明治34年）から、第二次世界大戦末期と終戦後の一時期を除き、出版事業を続けてきました。現在も年間十数冊を刊行し、総点数は1100冊以上に及んでいます。

      <figure class="mt2">
        <img
          :src="baseUrl + '/assets/img/about/about_hi_dainihon.jpeg'"
          alt="明治34年刊行の『大日本史料』（第六編・第十二編）『大日本古文書』（編年文書）"
        />
        <figcaption>
          明治34年刊行の『大日本史料』（第六編・第十二編）『大日本古文書』（編年文書）
        </figcaption>
      </figure>

      <h2 class="h03 mt3">新しい分野の研究事業</h2>

      従来の「史料の研究・編纂・出版」の基礎の上に、総合的な歴史情報データベースを構築する事業（前近代日本史情報国際センター）、対外関係史料の蒐集・分析を視野に入れた国際交流事業、画像史料を蒐集・分析する事業（画像史料解析センター）などにも、積極的に取り組んでいます。
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

      <p class="mtx mt2">
        　The Historiographical Institute of the University of Tokyo is a
        research institution for the study of historical documents that span
        Japan’s pre-modern history from ancient times through to the Meiji
        Restoration. Our mission is to collect and analyze various historical
        documents from holdings both in Japan and overseas and compile and
        publish these as key collections of Japanese historical documents for
        the benefit of academia and society.
      </p>

      <p class="mtx">
        　Our institute has a long history, and its origins stretch back to the
        Institute for Japanese Studies (Wagaku Kōdansho) in the Edo period. The
        Meiji Government took over the operation of this institute in the second
        year of the Meiji period (1869) and embarked on historiographical
        undertakings. The institute was subsequently transferred to the Imperial
        University, which adopted the current style of compiling and studying
        Japanese historical materials. Starting with the first volumes of Dai
        Nihon Shiryō and Dai Nihon Komonjo published in 1901, we have published
        a total of more than 1,200 volumes of Japanese historical materials and
        archives.
      </p>

      <p class="mtx">
        　Many historical materials related to Japanese history can be found in
        both Japan and overseas. Investigation and collection of these materials
        are the first steps to historiographical undertakings. In recording such
        historical information, we have adopted the most appropriate method
        available at the time such as calligraphic reproduction, copying, and
        photography, according to the characteristics of the historical
        material. With the digitalization of photography of recent years, we
        have established a new framework to systematically accumulate and
        publish high-definition photographs of historical materials. In addition
        to reproduced materials, the Historiographical Institute also has a vast
        archive of 200,000 precious original source materials including a
        designated National Treasure, the Shimazu-ke Monjo (Documents of the
        Shimazu Family). We repair and conserve these materials to pass them
        down to the next generation and also analyze the unique information only
        original materials bear, integrating conservation and research together
        as a consistent endeavor.
      </p>

      <p class="mtx">
        　The Historiographical Institute has made active efforts to expand our
        scope of research and to innovate the ways we disseminate information.
        In 1997, we established the Center for the Study of Visual Sources to
        engage in full-fledged research of pictorial sources such as picture
        scrolls, shoen-ezu (ancient and medieval estate maps) and old
        photographs. The International Center for the Digitization of Premodern
        Japanese Sources was established in 2006 to expand the Siryohensansho
        Historical Information Processing System (SHIPS) we have built and
        evolved since the 1980s and pioneer the new field of historical
        informatics. We also contribute to the internationalization of Japanese
        history such as investigations of Japanese historical materials held
        overseas and international dissemination of Japanese history
        information. Through these activities, we have deepened collaboration
        with overseas institutions that hold historical materials or engage in
        historiography in diverse countries, including those in China, Korea and
        Russia. Certified as a “research center for converting Japanese
        historical materials into research resources” since 2009, we have
        promoted collaborative research with researchers, museums, and regional
        authorities throughout Japan and the findings from such collaborations
        are offered as research resources for joint use. In 2019, we were
        selected as the only humanities institute in the Program for
        Constructing Data Infrastructure for the Humanities and Social Sciences
        by the Japan Society for the Promotion of Science and have embarked on
        the construction of data infrastructure on Japanese historical
        materials, aiming to strengthen the core values of data sharing,
        internationalization, and connectivity. In AY2020, we received an “S”
        rating for comprehensive performance in an evaluation conducted by the
        steering committee of the program.
      </p>

      <p class="mtx">
        　The Historiographical Institute seeks to deliver various information
        related to historical materials to everyone interested in history. In
        addition to historiographical work, our affiliated researchers are
        working to disseminate their research findings through diverse
        activities ranging from research by individual researchers or
        collaborative teams to university education and extension lectures open
        to the public. Research support departments including the Library
        responsible for managing and utilizing books and historical materials,
        the Conservation Laboratory equipped with advanced technologies and
        expertise, and the Administration Office that oversees the operation of
        the entire institute cooperate to support the research system.
      </p>

      <p class="mtx">
        　Due to the spread of COVID-19 since 2020, the activities of the
        Historiographical Institute have been significantly restricted like
        everyone else. We have not been able to make much progress in the
        collection of historical materials, an important pillar of our
        operations, and we cannot deny that the pandemic has affected research
        communications both within and outside of the institute. On the other
        hand, access to our SHIPS database has significantly increased,
        indicating heightened expectations for the roles of the
        Historiographical Institute to support research activities under the
        curfew.
      </p>

      <p class="mtx">
        　The Historiographical Institute, as the central organization of
        Japanese historiographical research, not only builds the foundations but
        also drives research efforts at the forefront of historical and
        historiographical research, based on tradition and introducing
        state-of-art technologies. We request your renewed understanding and
        support for all such efforts.
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
  title: any = this.$t('史料研究')

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
