<template>
  <div class="screen">
    <h2>Congratulations {{winner}}!</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["winner"])
};
</script>

<style scoped>
h2 {
  background: #e55b5b;
  margin: 0;
  padding: 20px;
}
</style>
