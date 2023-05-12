<script setup>
import {reactive,computed} from 'vue';
const salesdata=reactive(
 {
    "SellerDetails":{

        "SellerName": "Ravi Gupta",

        "SellerAddress": "Surdhara Complex, Naranpura",

        "City": "Ahmedabad",

        "State": "Gujarat",

        "Zip":382481,

        "Phone":8989898989,

        "Email":"seller@gmail.com"

    },

    "BuyerDetails": {

        "CompanyName" : "Radixweb",

        "Name": "Nitish Patel",

        "Address" : "B/H Nirma University, Ekyarth, Near Vandemataram Fabula, Malabar County Rd",

        "City": "Ahmedabad",

        "State": "Gujarat",

        "Zip":382481,

        "Phone":98989898,

        "Email":"buyer@gmail.com"

    }})
  const message=computed(()=>{
    console.log(salesdata["SellerDetails"]);
    return salesdata["SellerDetails"];
  })
</script>
<template>
<table>
<h1>Hello</h1>
<h2>{{message}}</h2>
{{get}}
<template v-for="(sales,key) in message">
<template v-if="key==='SellerDetails'">
<tr v-for="(value , key) in sales">
    
        <td>{{key}}</td>
        <td>{{value}}</td>

</tr>
</template>
</template>

</table>
</template>