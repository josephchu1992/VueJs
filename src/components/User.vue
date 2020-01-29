<template>
  <tr>
    <th scope="row">
      {{ user.id }}
    </th>
    <td>
      <router-link
        v-if="user"
        :to="{
          name: 'posts',
          params: { userId: user.id, userName: user.name }
        }"
      >
        {{ user.name }}
      </router-link>
    </td>
    <td>{{ user.phone }}</td>
    <td>{{ user.address.city }}</td>
    <td>{{ user.company.name }}</td>
  </tr>
</template>

<script>
export default {
  name: "User",
  props: ["user"],
  data() {
    return {};
  }
};
</script>
