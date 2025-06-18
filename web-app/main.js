import { fetchTweets } from './fetchTweets.js';
const { createApp } = Vue;

createApp({
  data() {
    return {
      tweets: [],
      loading: true,
    };
  },
  mounted() {
    this.loadTweets();
  },
  methods: {
    async loadTweets() {
      const bearerToken = 'YOUR_TWITTER_BEARER_TOKEN'; // Reemplaza con tu token
      const userId = '44196397'; // ejemplo: Elon Musk
      try {
        this.tweets = await fetchTweets(bearerToken, userId);
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
}).mount('#app');
