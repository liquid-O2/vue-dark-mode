const app = Vue.createApp({
  data() {
    return {
      theme: "",
      light: true,
    };
  },
  methods: {
    toggleMode() {
      this.light = !this.light;

      this.theme = this.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
    },
  },
});

app.mount("#app");
