<template>
  <div class="hello">
    <p>computed message : </p>
    <h1>{{ msg.split('').reverse().join('') }}</h1>  
    <p>message using method : </p>
    <h1>{{reversedMessage()}}</h1>

    <div v-bind:class="{ active: isActive }">{{ isActive }}</div>
    <div v-bind:class="[activeClass, errorClass]"></div>

    <div v-bind:style="{ color: activeColor, fontSize: fontSize+ 'px' }">Test</div>
    <div v-bind:style="[baseStyles, overridingStyles]">Test2</div>

    <div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox'] }"></div>

    <h1 v-if="ok">Yes</h1>
    <h1 v-else>No</h1>

    <div v-if="Math.random() > 0.5">
      you can see me now
    </div>
    <div v-else>
      then, you can't
    </div>

    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else-if="type === 'D'">
      D
    </div>
    <div v-else>
      Not A/B/C/D
    </div>

    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>

    <template v-if="loginType === 'username'" >
      <label>user name</label>
      <input placeholder="input your name" key="username-input">
    </template>
    <template v-else>
      <label>e-mail</label>
      <input placeholder="input your e-mail" key="email-input">
    </template>

    <button @click="changeValue()">change login type</button>

    <h1 v-show="ok"> hello! </h1>
    <button @click="pushData()">click to push data</button>
    <ul>
      <li v-for="(value, key) in items" :key="key" v-if="value">
        {{ value.m }}        
      </li>      
    </ul>
    <p>{{ items.length }}</p>

    <button @click="counter += 1"> Add 1 </button>
     <p> 위 버튼을 클릭한 횟 수는 {{ counter }} 번 입니다. </p>
    <button @click="greet">greet</button>
    <button @click="greet2('HI')">greet2</button>
    <button @click="warn('From cannot be submitted yet.', $event)">Submit</button>
    <button @click.ctrl="doSomething()">Do something</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data : function(){
     return{
      counter: 0, 
      msg: 'hello world! nice to meet you',
      activeColor: 'red',
      fontSize: 30,
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-danger',
      classObject: {
        active : true,
        'text-danger': false      
      },
      baseStyles: { 
        color: 'blue',
        fontSize: '30px',
      },
      overridingStyles: {
        fontWeight: 'bold',
        color: '#559944'
      },
      test: false,
      ok: false,
      type: 'test',
      loginType: 'username',
      items: [
        {
          m: 1      
        }
      ]
    }
  },

  computed: {
    myClassObject: function(){
      return {
        active: 'test',
        'test-danger': 'test2'
      }
    }
  },

  methods: {
    reversedMessage: function(){
      return this.msg.split('').reverse().join('');
    },

    changeValue: function(){
      if(this.loginType === 'username'){
        this.loginType = 'email';
      }else{    
        this.loginType = 'username';
      }    
    },
    
    pushData: function(){
      let popData;
      let shiftData;
      let unshiftData;
  
      this.items.push({
        m: Math.floor(Math.random()* 1024 % 25)
      });

      popData = this.items.pop({
        m: Math.floor(Math.random()* 1024 % 25)
      });
      console.log(popData);

      this.items.push({
        m: 15
      });

      this.items.push({
        m: 25
      });

      shiftData = this.items.shift();  
      unshiftData = this.items.unshift();

      // this.items = this.items.filter(function (item) {
      //     return item.m = 'test' + Math.floor(Math.random()* 241 % 21);
      // });
      this.$set(this.items, 2,{m : 5102})
      this.items.splice(this.items.length, 1, {m : 5104});

      this.items.splice(14);
      this.$set(this.items, 15, {m:1059359})
    },

    greet: function (event) {
      alert('Hello Vue!!');
      if(event){
        alert(event.target.tagName);
      }        
    },

    greet2: function (msg) {
      alert(msg);
    },

    warn: function(msg, event){
      if (event) event.preventDefault();
      alert(msg);
    },
    
    doSomething: function(){
      alert('multi click data');
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
