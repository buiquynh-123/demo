<!-- Register.vue -->
<template>
  <div>
    <h1>Đăng ký</h1>
    <a-form @submit.prevent="handleSubmit" style="width: 100%">
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model="username" />
      </a-form-item>
      <a-form-item
        label="Email"
        name="email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <a-input v-model="email" />
      </a-form-item>
      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input type="password" v-model="password" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">Register</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
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
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
          email: this.email,
        };
        this.userStore.dispatch("registerUser", userData);
        this.$router.push("/login");
      } catch (error) {
        console.error("Error while registering:", error);
      }
    },
  },
};
</script>
