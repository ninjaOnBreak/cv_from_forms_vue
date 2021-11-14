<template>
  <div class="container">{{ useFirstName }} {{ useLastName }}</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      useFirstName: (state) => state.formData.firstName,
      useLastName: (state) => state.formData.lastName,
    }),
  },
};
</script>
