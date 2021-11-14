<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'CVGenerator',
};
</script>

<style>
.form-vertical {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}

input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}

.dirty {
  border-color: #5a5;
  background: #efe;
}

.dirty:focus {
  outline-color: #8e8;
}

.error {
  border-color: red;
  background: #fdd;
}

.error:focus {
  outline-color: #f99;
}
</style>
