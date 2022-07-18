<template>
  <div class="d-flex justify-content-center input-group">
    <div class="col-4 form-outline">
      <input
        type="search"
        id="form1"
        class="form-control"
        placeholder="search"
        v-model="searchTerm"
      />
    </div>
    <button @click="handleClick" type="button" class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button>
  </div>
  <p>{{ searchTerm }}</p>
</template>

<script>
import { ref } from 'vue';
export default {
  setup({emit}){
    const searchTerm = ref('')
    
    const handleClick = () =>  {
      emit(searchTerm)
    }

    return { searchTerm, handleClick }
  }
};
</script>

<style></style>
