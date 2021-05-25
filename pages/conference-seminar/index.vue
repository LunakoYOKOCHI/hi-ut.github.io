<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>

    <h2 class="h03">
      シンポジウム・研究集会・講演会
    </h2>

    <figure>
      <img :src="baseUrl + '/assets/img/conference-seminar/pub_symposium.jpeg'" />
    </figure>

    <p class="mt2">
      <ul>
        <li>
        共同利用・共同研究拠点研究集会
        <ul>
        　<li>「日本史史料共同研究の新たな展開」（2012 年）</li>
        　<li>「史料情報の新たな発信」（2015 年）</li>
        </ul>
        </li>
        <li>
        画像史料解析センター主催研究集会
        <ul>
        　<li>「倭寇と倭寇図像をめぐる国際研究集会」（2011 年～）</li>
        　<li>「ガラス乾板の調査・保存・研究資源化に関する研究」（2014 年）</li>
        </ul>
        </li>
        <li>
        国際研究集会・講演会（研究者を対象としたもの）
        <ul>
        　<li>「日露関係史料をめぐる国際研究集会」（2013 年～）、日本学士院と共催</li>
        　<li>「イエスズ会古文書セミナー」（2013 年）</li>
        </ul>
        </li>
        <li>
        講演会等（一般の方を対象としたもの）
        <ul>
        　<li>「西尾市岩瀬文庫特別連続講座」（2013 年～）</li>
        　<li>「陽明文庫講座」（2010 年～）</li>
        </ul>
        </li>
      </ul>
    </p>

    <h2 class="h03">国際的な連携等への取組み</h2>

    <p>
      日本学士院・人間文化研究機構の在外日本関係史料収集事業と連携して、中国国家博物館・韓国国史編纂委員会・ロシア国立歴史文書館・ロシア国立海軍文書館・米国イエール大学・バイネキ図書館などの史料所蔵機関と学術交流を深め、各機関が所蔵する日本関係史料の収集と目録化などの共同研究に取り組んでいます。
    </p>

    <p>
      また、史料編纂所を受入機関として希望する外国人研究者のため、研究室の確保をはじめ、所蔵史料の利用も史料編纂所教員とほぼ同じ待遇にして、研究に専念できる環境を整えています。
    </p>

    <h2 class="h03">他機関からの委嘱</h2>

    <p>
      多くの教員が他の研究機関、地方公共団体から各種の委員、専門委員として委嘱を受け、とりわけ史料に関する専門知識によって、全国各地の地方自治体史の編纂などに協力しています。
    </p>

    <h2 class="h03">学部・大学院教育</h2>

    <p>
      史料編纂所の教員は、東京大学文学部および大学院人文社会系研究科の日本文化研究専攻・文化資源学研究専攻の協力講座において教育に携わり、大学院情報学環（歴史情報論講座）・教養学部前期課程（主題科目・展開科目など）の教育にも参加しています。また、他大学の非常勤講師として招聘されています。
    </p>

    <h2 class="h03">史料展覧会</h2>

    <figure>
      <img :src="baseUrl + '/assets/img/conference-seminar/pub_tenjikai.jpeg'" />
    </figure>

    <p class="mt2">
      史料編纂所では、所蔵する貴重な史料を広く社会に公開するため、戦前以来、3 年に1 度を原則に展覧会を企画しています。2013 年11月8･9 日に第36 回史料展覧会「東アジアと日本・世界と日本」を開催し、所蔵の国宝・重要文化財を含む史料のなかからテーマに合わせ約40 点の原本を展示しました。
　また、毎夏1 回、東京大学オープンキャンパスの一環として、史料などの展示を行なっています。
    </p>

    <h2 class="h03">特別展　「時を越えて語るもの―史料と美術の名宝―」</h2>

    <figure>
      <img :src="baseUrl + '/assets/img/conference-seminar/pub_tokubetsuten.jpeg'" />
    </figure>

    <p class="mt2">
      『大日本史料』等の刊行開始100 周年記念事業の一環として、2001 年12 月～ 02 年 1 月に、東京国立博物館と共催で同館平成館を会場に特別展を開催しました。本所所蔵の史料・美術品を中心に、" 公家日記の世界"　" 武家文書の世界"　" 天下人の世界"　" 鎖国と開国"　" 国絵図の世界" の各テーマに分けて展示し、「歴史学とデジタルミュージアム」のコーナーも設けました。
</p><p><a href="http://www.hi.u-tokyo.ac.jp/news/news-2007/100ex/hi_expo_index.html">→「時を越えて語るもの―史料と美術の名宝―」のHPへ</a>
    </p>

    <h2 class="h03">研究員・留学生の受け入れ</h2>

    <p>
      1950 年に外国人研究員を、1954 年に文部省国内研究員を受け入れて以来、多くの国内外の研究員・留学生・日本学術振興会特別研究員などを受け入れています。W.G. ビーズリー氏（イギリス）、C. トットマン氏（アメリカ）などの多くの著名な研究者が、研究員として滞在されました。
    </p>
  </LayoutPublication>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutPublication,
  },
})
export default class about extends Vue {
  baseUrl: any = process.env.BASE_URL
  title: any = this.$t('成果公開・教育')

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
