<template>
  <div>
    <div v-if="loading">
      <p>Loading Users...</p>
    </div>

    <table class="table table-hover table-striped" v-if="!loading">
      <thead class="thead-dark">
        <tr>
          <th scope="col" v-for="th in tableHeads" v-bind:key="th">{{ th }}</th>
        </tr>
      </thead>
      <tbody>
        <user :user="user" :key="user" v-for="user in users"></user>
      </tbody>
    </table>
  </div>
</template>

<script>
import User from "../components/User.vue";
import axios from "axios";

export default {
  name: "users",
  data() {
    return {
      tableHeads: ["#", "Name", "Phone", "City", "Company"],
      loading: true,
      users: []
    };
  },
  components: {
    User
  },
  mounted() {
    (this.loading = true),
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(({ data }) => {
          this.users = data;
          this.loading = false;
        });
  }
};
</script>
