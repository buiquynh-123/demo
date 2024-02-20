<!-- Login.vue -->
<template>
  <div style="width: 50%; margin: 0px auto">
    <h1>Đăng nhập</h1>
    <a-form
      ref="formRef"
      :rules="rules"
      @submit.prevent="handleSubmit"
      style="width: 100%"
    >
      <a-form-item ref="email" label="Email" name="email">
        <a-input v-model="email" />
      </a-form-item>
      <a-form-item ref="password" label="Password" name="password">
        <a-input type="password" v-model="password" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">Login</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { ref } from "vue";
import createStore from "../store/index";

export default {
  setup() {
    const userStore = createStore();
    return {
      userStore,
    };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    handleSubmit() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.userStore.dispatch("getUser", payload);
    },
  },
};
</script>
