<script setup>
import {findAverage,Grade} from '../Logics/compute.js'
const props = defineProps(['obj'])

console.log(props.obj)
</script>
<template>
<td>{{obj.StudentName}}
    </td>
    <td>
    {{obj.Hindi}}
    </td>
    <td>
    {{obj.English}}</td>
    <td>
    {{obj.Math}}
    </td>
    <td>
    {{findAverage(obj)}}
    </td>
    <td v-if="Grade(obj)==='B'" style="color:green;border:1px solid green;">
    {{Grade(obj)}}
    </td>
     <td v-else-if="Grade(obj)==='C'" style="color:blue;border:1px solid blue;">
    {{Grade(obj)}}
    </td>
    <td v-else-if="Grade(obj)==='A'" style="color:darkgreen;border:1px solid darkgreen;">
    {{Grade(obj)}}
    </td>
    <td v-else style="color:red;border:1px solid red;">
    {{Grade(obj)}}
    </td>
</template>