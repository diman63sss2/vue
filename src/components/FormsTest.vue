<template>
  <Form-users-get />
  <Form-user-get />
  <Form-user-dell />
  <Form-user-reg />
  <Form-user-sign />
</template>

<script>
import FormUsersGet from "./FormUsersGet";
import FormUserGet from "./FormUserGet";
import FormUserReg from "./FormUserReg";
import FormUserDell from "./FormUserDell";
import FormUserSign from "./FormUserSign";
export default {
  components: {
    FormUsersGet,
    FormUserGet,
    FormUserReg,
    FormUserDell,
    FormUserSign,
  },
  setup() {},
};
</script>

<style>
</style>