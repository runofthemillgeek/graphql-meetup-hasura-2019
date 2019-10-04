<template>
  <div>
    <Header />

    <section>
      <HeroWeather :location="userLocation" />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
import HeroWeather from "@/components/HeroWeather";

export default {
  components: {
    Header,
    HeroWeather
  },

  data() {
    return {
      userLocation: "Reykjavik"
    };
  }
};
</script>
