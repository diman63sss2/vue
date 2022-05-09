<template>
  <form action="">
    <h2>GetUsers</h2>
    <input type="button" value="Отправить запрос" @click="mounted" />
    <div>
      <h3>Пользователи:</h3>
      <div v-for="value in users" :key="value.users">
        <p>id: {{ value.userId }}</p>
        <p>email: {{ value.email }}</p>
        <p>username: {{ value.username }}</p>
        <p>password: {{ value.password }}</p>
        <p>activationCode: {{ value.activationCode }}</p>
        <p>filename: {{ value.filename }}</p>
        <p>code: {{ value.code }}</p>
        <p>roles: {{ value.roles }}</p>
      </div>
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
      users: [],
      erors: [],
    };
  },
  created() {},
  methods: {
    async mounted() {
      axios
        .get("http://localhost:8080/user/list")
        .then((response) => {
          this.users = response.data;
          console.log(response);
        })
        .catch((e) => {
          this.erors.push(e);
        });
    },
  },
};
</script>

<style>
</style>