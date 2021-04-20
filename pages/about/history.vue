<template>
  <LayoutAbout :title="title">
    <h1 class="h02">{{ $t(title) }}</h1>

    <template v-if="lang == 'ja'">
      <h2 class="h03">創生期</h2>

      <figure>
        <img
          width="183"
          :src="baseUrl + '/assets/img/about/about_hi_hanawa.jpeg'"
          alt="塙 保己一（本所所蔵模写本）"
        />
        <figcaption>塙 保己一（本所所蔵模写本）</figcaption>
      </figure>

      <p class="mt2">
        史料編纂所の歴史は江戸時代にまで遡ります。1793 年（寛政5
        年）、国学者塙保己一は幕府の援助をうけて和学講談所を開設しました。明治政府の修史事業はこの事業を引き継ぐかたちで始められ、1869
        年（明治2 年） 3
        月、和学講談所跡（現千代田区六番町）に史料編輯国史校正局が開設されました。翌4
        月、明治天皇は三条実美に宸筆の勅書を下し、同局の総裁に任じています。
      </p>

      <p>
        そして1872 年（明治5
        年）、太政官正院に歴史課が設けられ、ついで修史局として内務省地誌課を合併し、修史館となり、内閣制度の成立とともに臨時修史局となりました。
      </p>

      <h2 class="h03 mt3">拡充期</h2>

      <v-img
        class="mb-10"
        height="300px"
        src="/about/images/about_hi_meiji.jpg"
        caption="輔相三条実美に修史事業の総裁を命じた明治2年4月4日の明治天皇宸翰"
      ></v-img>

      <p>
        1888 年（明治21 年） 10
        月、帝国大学に国史科を創設するに際し、修史事業は帝国大学に移管されます。当初は臨時編年史編纂掛と呼ばれました。
      </p>

      <p>
        1893 年（明治26
        年）、編年史の形の編纂事業は停止されます。代わって、外国人教師ルートヴィヒ・リース（Ludwig
        Riess）の意見をいれ、蒐集した史料自体を編纂刊行することになり、1895
        年（明治28
        年）、帝国大学文科大学に史料編纂掛が設置されました。最初の成果である『大日本史料』『大日本古文書』が発刊されたのは、1901
        年（明治34 年）です。
      </p>

      <p>
        現在の史料編纂所という名称になったのは1929 年（昭和4
        年）のことでした。この間、1906 年（明治39
        年）には外務省から『幕末外国関係文書』編纂の事業を、1949 年（昭和24
        年）には文部省から維新史料編纂事業を引き継ぎました。
      </p>

      <h2 class="h03 mt3">附置研究所</h2>

      史料編纂所は、1949 年（昭和24
      年）に国立学校設置法により「本邦に関する史料の研究、編さん及び出版」を行う研究所として定められました。
      1950 年（昭和25
      年）、史料編纂所は東京大学文学部から独立し、東京大学の附置研究所に改組されました。刊行する史料集も増加し、1952
      年（昭和27 年）には『大日本古記録』、翌 1953 年（昭和28
      年）には『大日本近世史料』の出版が開始されます。1954 年（昭和29
      年）、教授・助教授・助手の教官制度となりました。

      <h2 class="h03 mt3">新しい波</h2>

      近年の史料編纂所は歴史史料のデータベース構築を新しい仕事の分野としています。作成した各種の日本史データベースは、インターネットを通じて国内外から毎月
      500 万を超えるアクセスを受けています。この成果の上に立って、2006
      年（平成18
      年）には附属施設として前近代日本史情報国際センターを設置し、意欲的な活動を展開しています。
      史料編纂事業のみでなく、歴史学研究の新しい波にも敏感で、1997 年（平成9
      年）には画像史料解析センターを設置しました。そこでも最新の情報技術を用いて、絵図・肖像画・古写真などの画像史料分析を進めています。
      また、2009 年(平成21
      年）に文部科学大臣より「日本史史料の研究資源化に関する研究拠点」として認定されました。国内外に所在する日本関係史料について、全国・世界各地の研究者との共同調査・共同研究をより一層進め、これらの史料を研究資源として共同利用を図ることをめざしています。

      <h1 class="h02 mt3">歴代所長（史料編纂掛以降）</h1>

      <ul>
        <li>星野　　恒　　明治28 年4 月～ 明治32 年1 月（1895 ～ 1899）</li>
        <li>三上　参次　　明治32 年1 月～ 大正8 年7 月（1899 ～ 1919）</li>
        <li>黒板　勝美　　大正 8 年7 月～ 大正9 年7 月（1919 ～ 1920）</li>
        <li>辻　善之助　　大正 9 年9 月～ 昭和13 年3 月（1920 ～ 1938）</li>
        <li>龍　　　粛　　昭和13 年4 月～ 昭和26 年3 月（1938 ～ 1951）</li>
        <li>坂本　太郎　　昭和26 年4 月～ 昭和37 年3 月（1951 ～ 1962）</li>
        <li>森末　義彰　　昭和37 年4 月～ 昭和40 年3 月（1962 ～ 1965）</li>
        <li>竹内　理三　　昭和40 年4 月～ 昭和43 年3 月（1965 ～ 1968）</li>
        <li>桃　　裕行　　昭和43 年4 月～ 昭和46 年3 月（1968 ～ 1971）</li>
        <li>沼田　次郎　　昭和46 年4 月～ 昭和48 年3 月（1971 ～ 1973）</li>
        <li>彌永　貞三　　昭和48 年4 月～ 昭和50 年3 月（1973 ～ 1975）</li>
        <li>土田　直鎮　　昭和50 年4 月～ 昭和52 年3 月（1975 ～ 1977）</li>
        <li>稲垣　泰彦　　昭和52 年4 月～ 昭和54 年3 月（1977 ～ 1979）</li>
        <li>菊地勇次郎　　昭和54 年4 月～ 昭和56 年3 月（1979 ～ 1981）</li>
        <li>今枝　愛眞　　昭和56 年4 月～ 昭和58 年3 月（1981 ～ 1983）</li>
        <li>新田　英治　　昭和58 年4 月～ 昭和60 年3 月（1983 ～ 1985）</li>
        <li>百瀬今朝雄　　昭和60 年4 月～ 昭和62 年3 月（1985 ～ 1987）</li>
        <li>小野　正雄　　昭和62 年4 月～ 平成元 年4 月（1987 ～ 1989）</li>
        <li>高木　昭作　　平成元 年4 月～ 平成3 年3 月（1989 ～ 1991）</li>
        <li>益田　　宗　　平成 3 年4 月～ 平成5 年3 月（1991 ～ 1993）</li>
        <li>小野　正雄　　平成 5 年4 月～ 平成7 年3 月（1993 ～ 1995）</li>
        <li>宮地　正人　　平成 7 年4 月～ 平成9 年3 月（1995 ～ 1997）</li>
        <li>黒田日出男　　平成 9 年4 月～ 平成11 年3 月（1997 ～ 1999）</li>
        <li>石上　英一　　平成11 年4 月～ 平成13 年3 月（1999 ～ 2001）</li>
        <li>加藤　友康　　平成13 年4 月～ 平成15 年3 月（2001 ～ 2003）</li>
        <li>石上　英一　　平成15 年4 月～ 平成17 年3 月（2003 ～ 2005）</li>
        <li>保立　道久　　平成17 年4 月～ 平成19 年3 月（2005 ～ 2007）</li>
        <li>横山　伊徳　　平成19 年4 月～ 平成21 年3 月（2007 ～ 2009）</li>
        <li>加藤　友康　　平成21 年4 月～ 平成22 年3 月（2009 ～ 2010）</li>
        <li>榎原　雅治　　平成22 年4 月～ 平成25 年3 月（2010 ～ 2013）</li>
        <li>久留島典子　　平成25 年4 月～ 平成27 年3 月（2013 ～ 2015）</li>
        <li>山家　浩樹　　平成27 年4 月～ 平成30 年3 月（2015 ～ 2018）</li>
        <li>保谷　　徹　　平成30 年4 月～ 令和 3 年3 月（2018 ～ 2021）</li>
        <li>本郷　恵子　　令和 3 年4 月～ （2021 ～ 　　）</li>
      </ul>
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
  title: any = this.$t('沿革')

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
