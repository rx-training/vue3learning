
<script>
import { ref,computed,reactive } from "vue";

export default{
data() {
    return {
      greeting:"hello world",
      theme:"blue",
      array:[{firstname:"reena",lastname:"sharma"},{firstname:"meghna",lastname:"meghna"}]
    }
  },
  computed:{
    gettotal()
    {
      return this.greeting.length;
    }
  },
  methods: {
    changetheme(event)
    {
      console.log(event.target.value);
      this.theme=event.target.value;
    }
  },
setup()
{
const books = reactive([{bookname:"c",price:300},{bookname:"d",price:900}]);
const count = ref(0);
const typeinfo=ref("number");
const square = computed(() => {
  return count.value*count.value;
})
function increment()
{
  return count.value++;
}
return {count,square,typeinfo,increment,books};

}
}
</script>

<template>
<table>
<tr v-for="(m,index) in array">
<td>{{m.firstname}}</td>
<td>{{m.lastname}}</td></tr>
</table>
<table>
<tr v-for="m in books">
<td>{{m.bookname}}</td>
<td>{{m.price}}</td>
</tr>
</table>
<div :class="theme">
<select @change="changetheme($event)">
<option value="red">Red</option>
<option value="blue">blue</option>
</select>
{{greeting}}
{{gettotal}}
  <h1>{{ msg }}</h1>
<h2>square {{square}}</h2>
  <div class="card">
  <input type="text" v-model="greeting"/>
  <input type="text" v-model="typeinfo"/>
  <input :type="typeinfo"  v-model="count"/>
    <button type="button" @click="increment()">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.red
{
border: 1px solid red;
}
.blue
{
border:1px solid blue;
}
</style>
