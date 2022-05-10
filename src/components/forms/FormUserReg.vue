<template>
  <form action="">
    <h2>RegUser</h2>
    <input type="email" v-model="user.email" placeholder="email" required />
    <input type="name" v-model="user.username" placeholder="name" required />
    <input
      type="password"
      v-model="user.password"
      placeholder="пороль"
      required
    />
    <input type="button" value="Отправить запрос" @click="mounted" />
    <div>
      {{ sucsess }}
      <br />
      <h3>Пользователь:</h3>
      <div>
        {{ user }}
      </div>
      errorMessage:
      {{ errorMessage }} <br />
      status:
      {{ status }}
      <br />
      result:
      {{ result }}
      <br />
    </div>
  </form>
</template>

<script>
// axios.get("http://localhost:8080/user/list").then((response) => (this.users = response.data));
import axios from "axios";
export default {
  data() {
    return {
      result: null,
      user: {
        email: "",
        username: "",
        password: "",
      },
      erors: [],
      errorMessage: "",
      status: null,
      sucsess: "",
    };
  },
  created() {},
  methods: {
    async mounted() {
      if (
        this.user.email == "" ||
        this.user.username == "" ||
        this.user.password == ""
      ) {
        this.sucsess = "Заполните все поля";
      } else {
        axios
          .post("http://localhost:8080/registration", {
            email: this.user.email,
            username: this.user.username,
            password: this.user.password,
          })
          .then((response) => {
            this.result = response.status;
            console.log(response);
            console.log(this.result);
            this.sucsess = "Вы успешно зарегестрированны";
            this.user = {
              email: "",
              username: "",
              password: "",
            };
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            this.status = error.response.status;
            this.sucsess = "Произошла ошибка";
          });
      }
    },
  },
};
</script>

<style>
</style>