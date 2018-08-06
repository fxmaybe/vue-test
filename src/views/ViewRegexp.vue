<template>
  <div class="regexp">
    <!-- Regexg:&nbsp;&nbsp;<input type="text" v-model="regexp" /><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Txt:&nbsp;&nbsp;<input type="text" v-model="txt" /><br />
    Method test: {{test}}<br />
    Method match: {{match}}<br />
    <br />
    <br /> -->
    <ul>
      <li v-for="(item, index) in items">
        <h3>{{item.qs}}&nbsp;&nbsp;&nbsp;&nbsp;<button @click="showAnswer(item)">查看答案</button></h3>
        <span style="color: red;" v-if="item.showed" v-html="item.as"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      regexp: /^/,
      txt: '',
      items: [
        {
          qs: '全部字符',
          as: '/[\s\S]/'
        }
      ]
    }
  },
  methods: {
    showAnswer(item) {
      this.$set(item, 'showed', true);
    }
  },
  computed: {
    test() {
      return this.regexp.test(this.txt); 
    },
    match() {
      return this.txt.match(this.regexp);
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li h3 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 10px;
  }

  ul li h3 {}

</style>
