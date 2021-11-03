<template>
<div class="container mt-3">
      <form @submit.prevent="handleSubmit" >
      <h4>Create New Product </h4>
      
      <input class="form-control mb-3" type="text" required v-model="title" placeholder="Title">
      <input class="form-control mb-3" type="text" required v-model="description" placeholder="Product description...">
      
      <input class="form-control mb-3" type="text" required v-model="price" placeholder="Price">
      <label> Categorys</label>
       <select v-model="categorys"> 
              <option value="Tops">Tops</option>
      <option value="Pants">Pants</option>
      <option value="Shoes">Shoes</option>
      <option value="Jacket">Jacket</option>
       </select>
      <label> Upload Product Picture</label>
      <input type="file" @change="handleChange">
      <div class="error">{{fileError}}</div>

      <div class="error"></div>
      <button class="btn btn-primary">Create</button>
  </form>
</div>
</template>

<script>
import { ref } from 'vue'
import useStorage from '@/composables/useStorage'
import userCollection from '@/composables/userCollection'
import getUser from '@/composables/getUser'
import {timestamp} from '@/firebase/config'

export default {
setup(){
 
    const { filePath, url, uploadImage} = useStorage()
    const {error, addDoc} = userCollection('products')
    const title = ref('')
    const description = ref('')
    const price = ref('')
    const file = ref(null) 
    const fileError = ref(null)
    const categorys = ref('')
    const cart = ref(false)

    const handleSubmit = async () => {
        if (file.value) {
           await uploadImage(file.value)
           await addDoc({
              title: title.value,
              description: description.value,
              categorys: categorys.value,
              price: price.value ,
              coverUrl:url.value,
              filePath: filePath.value,
              products:[]
           })
           if (!error.value){
               console.log('product added`')
           }
        }
        
    }

    const types = ['image/png', 'image/jpeg']

    const handleChange = (e)=> {
     const selected = e.target.files[0]
     console.log(selected)

     if(selected && types.includes(selected.type)) {
         file.value = selected
         fileError.value= null
     } else{
         file.value = null
         fileError.value = 'Please select an image file (png or jpeg)'
     }

    }

    return{title, description, price, handleSubmit, handleChange,fileError, categorys}
}
}
</script>

<style >
 
 input, textarea{
     margin-bottom: 5px;
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color:#555;
}

input[type="file"]
{
/* border: 0; */
padding: 0; 
    margin-top:20px ;
     border: 1px solid blue;
    /* border:0; */
    padding: 10px 20px;
    margin-top:20px ;
    color: white;
    border-radius: 20px;
}

label{
    font-size: 12px;
    display: block;
    margin: top 30px;
    font-weight: 500;
    font-size: 20px;
}

/* button{
    margin-top:20px ;
     background: blue;
    border:0;
    padding: 10px 20px;
    margin-top:20px ;
    color: white;
    border-radius: 20px;
} */

.error{
    color: red;
    font-weight: bold;
}

</style>