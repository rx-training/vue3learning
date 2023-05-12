<script  setup>
import SalesInvoice from './components/SalesInvoice.vue'
import {ref,computed} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HelloIndia from './components/HelloIndia.vue'
const username=ref("username");
const password=ref("password");
const status=ref("");


function login()
{
  debugger;
  if(username.value=="admin" && password.value=="admin")
  {
    status.value="valid"
  }
}
</script>

<template>
<!-- <HelloIndia></HelloIndia>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <input type="text" v-model="username"/>
  <input type="text" v-model="password"/>
  <button @click="login()">Login</button>
  <div v-if="status">
  <HelloWorld msg="Hello Everyone" />
  </div> -->

  <SalesInvoice></SalesInvoice>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
