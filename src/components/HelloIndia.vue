<script setup>
import {reactive,computed} from 'vue'
import {findAverage,Grade} from '../Logics/compute.js'
import StudentGrade from './StudentGrade.vue';
const students=reactive([{"StudentName":"Rahul","Hindi":60,"English":90,"Math":100},
{"StudentName":"Rohit","Hindi":80,"English":85,"Math":60},
{"StudentName":"Ronit","Hindi":40,"English":90,"Math":89},
{"StudentName":"meghna","Hindi":30,"English":20,"Math":20},
{"StudentName":"roy","Hindi":100,"English":100,"Math":100}
])




</script>
<template>
<table>
<template  v-for="obj in students">
<tr v-if="Grade(obj)==='A'" style="background-color:green">
<StudentGrade :obj="obj"></StudentGrade>
</tr>
<tr v-else-if="Grade(obj)==='B'" style="background-color:blue">
<StudentGrade :obj="obj"></StudentGrade>
</tr>
<tr v-else-if="Grade(obj)==='C'" style="background-color:yellow">
<StudentGrade :obj="obj"></StudentGrade>
</tr>
<tr v-else-if="Grade(obj)==='D'" style="background-color:red">
<StudentGrade :obj="obj"></StudentGrade>
</tr>
</template>

</table>
<h1>Hello India</h1>
<table>
<tr v-for="n in (4,10)">
<td>{{ n }}</td>
</tr>
</table>
</template>