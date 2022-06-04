<template>
  <form action="">
    <h2>UpdateUser</h2>
    <input type="email" v-model="user.email" placeholder="email" required />
    <input type="name" v-model="user.username" placeholder="name" required />
    <input type="number" v-model="userId" />
    <input
      type="password"
      v-model="user.password"
      placeholder="пороль"
      required
    />
    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
    <input type="button" value="Отправить запрос" @click="profile" />
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
import jwt_decode from "jwt-decode";
export default {
  data() {
    return {
      result: null,
      user: {
        email: "dimatest4@mail.ru",
        username: "dimatest4",
        password: "",
        files: null,
      },
      userId: null,
      erors: [],
      errorMessage: "",
      status: null,
      sucsess: "",
      testfiles: null,
    };
  },
  created() {},
  methods: {
    async profile() {
      let formData = new FormData();
      formData.append("username", this.user.username);
      formData.append("password", this.user.password);
      formData.append("email", this.user.email);
      formData.append("file", this.user.files);
      if (
        this.user.email == "" ||
        this.user.username == "" ||
        this.user.password == ""
      ) {
        this.sucsess = "Заполните все поля";
      } else {
        let token = localStorage.getItem("token");
        if(localStorage.access_token) token = localStorage.getItem('access_token');
        axios
          .patch("http://localhost:8080/user/" + this.userId, formData, {
            headers: { Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
            },
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
  mounted() {
    let token = localStorage.getItem("token")
    if(localStorage.access_token) token = localStorage.getItem('access_token');
    var decoded = jwt_decode(token);
    this.userId = decoded.id;
    axios
      .get("http://localhost:8080/user/currentuser" ,{
          headers: {
            Authorization: `Bearer ${token}`,
            },
        })
      .then((response) => {
        this.userId = response.data.userId;
        this.user.email = response.data.email
        this.user.username = response.data.username
        console.log('response:')
        console.log(response.data);
      })
      .catch((e) => {
        this.erors.push(e);
        console.log(this.erors);
      });
  },
};
</script>

<style>
</style>