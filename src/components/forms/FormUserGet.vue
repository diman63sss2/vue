<template>
  <form action="">
    <h2>GetUser</h2>
    <input type="number" v-model="userNumber" />
    <input type="button" value="Отправить запрос" @click="mounted" />
    <div>
      <h3>Пользователь:</h3>
      <div>
        <p>id: {{ user.id }}</p>
        <p>email: {{ user.email }}</p>
        <p>username: {{ user.username }}</p>
        <p>password: {{ user.password }}</p>
        <p>activationCode: {{ user.activationCode }}</p>
        <p>filename: {{ user.filename }}</p>
        <p>code: {{ user.code }}</p>
        <p>roles: {{ user.roles }}</p>
        {{ user }}
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
      user: {
        id: null,
        email: null,
      },
      erors: [],
    };
  },
  created() {},
  methods: {
    async mounted() {
      axios
        .get("http://localhost:8080/user/" + this.userNumber)
        .then((response) => {
          this.user = response.data;
          console.log(response);
          console.log(this.users);
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