<template>
  <Form-user-update />
  <Form-users-get />
  <Form-user-get />
  <Form-user-dell />
  <Form-user-reg />
  <Form-article-add />
</template>

<script>
import FormArticleAdd from "./forms/FormArticleAdd";
import FormUserUpdate from "./forms/FormUserUpdate";
import FormUsersGet from "./forms/FormUsersGet";
import FormUserGet from "./forms/FormUserGet";
import FormUserReg from "./forms/FormUserReg";
import FormUserDell from "./forms/FormUserDell";

export default {
  components: {
    FormUsersGet,
    FormUserGet,
    FormUserReg,
    FormUserDell,
    FormArticleAdd,
    FormUserUpdate,
  },
};
</script>

<style>
</style>