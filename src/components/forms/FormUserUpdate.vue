<template>
  <form action="">
    <h2>UpdateUser</h2>
    <input type="email" v-model="user.email" placeholder="email" required />
    <input type="name" v-model="user.username" placeholder="name" required />
    <input
      type="password"
      v-model="user.password"
      placeholder="пороль"
      required
    />
    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
    <input type="button" value="Отправить запрос" @click="mounted" />
    <div>
      {{ sucsess }}
      <br />
      <h3>Пользователь::</h3>
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
        files: "",
      },
      userId: null,
      erors: [],
      errorMessage: "",
      status: null,
      sucsess: "",
    };
  },
  created() {},
  methods: {
    async mounted() {
      let formData = new FormData();
      for (var i = 0; i < this.user.files.length; i++) {
        let file = this.files[i];
        formData.append("files[" + i + "]", file);
      }
      if (
        this.user.email == "" ||
        this.user.username == "" ||
        this.user.password == ""
      ) {
        this.sucsess = "Заполните все поля";
      } else {
        axios
          .post("http://localhost:8080/user/" + this.userId, {
            email: this.user.email,
            username: this.user.username,
            password: this.user.password,
            files: this.user.files,
          })
          .then((response) => {
            this.result = response.status;
            console.log(response);
            console.log(this.result);
            this.sucsess = "Данные успешно обновленныы";
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            this.status = error.response.status;
            this.sucsess = "Произошла ошибка";
          });
      }
    },
    handleFileUpload() {
      this.user.files = this.$refs.file.files[0];
    },
  },
};
</script>

<style>
</style>