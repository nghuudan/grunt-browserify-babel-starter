<template>
  <h1>{{ appTitle }}</h1>
</template>

<script>
import { APP_TITLE_ACTION } from '../store/actions';

export default {
  computed: {
    appTitle() {
      return this.$store.state.appTitle;
    }
  },
  methods: {
    setAppTitle() {
      this.$store.dispatch(APP_TITLE_ACTION);
    }
  },
  mounted() {
    this.setAppTitle();
  }
};
</script>
