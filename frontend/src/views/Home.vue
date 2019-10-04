<template>
  <div>
    <Header />

    <section>
      <LocationPicker v-model="userLocation" />
      <HeroWeather :location="userLocation" />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
import HeroWeather from "@/components/HeroWeather";
import LocationPicker from "@/components/LocationPicker";

export default {
  components: {
    Header,
    HeroWeather,
    LocationPicker
  },

  data() {
    return {
      userLocation: "Reykjavik"
    };
  }
};
</script>
