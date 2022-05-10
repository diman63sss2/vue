<template>
  <Form-user-update />
  <Form-users-get />
  <Form-user-get />
  <Form-user-dell />
  <Form-user-reg />
  <Form-user-sign />
  <Form-article-add />
</template>

<script>
import FormArticleAdd from "./forms/FormArticleAdd";
import FormUserUpdate from "./forms/FormUserUpdate";
import FormUsersGet from "./forms/FormUsersGet";
import FormUserGet from "./forms/FormUserGet";
import FormUserReg from "./forms/FormUserReg";
import FormUserDell from "./forms/FormUserDell";
import FormUserSign from "./forms/FormUserSign";

export default {
  components: {
    FormUsersGet,
    FormUserGet,
    FormUserReg,
    FormUserDell,
    FormUserSign,
    FormArticleAdd,
    FormUserUpdate,
  },
};
</script>

<style>
</style>