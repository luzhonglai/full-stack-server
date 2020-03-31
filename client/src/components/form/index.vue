<template>
  <div>
    <Form :model="model" :rules="rules" :ref="loginForm">

    </Form>
  </div>
</template>

<script>
import FormItem from "./FormItem.vue";
import Form from "./Form.vue";
import Input from "./Input.vue";

export default {
  components: {
    FormItem,
    Form,
    Input
  },
  data() {
    return {
      model:{
        username: '',
        password:''
      },
      rules:{
        username:[]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>