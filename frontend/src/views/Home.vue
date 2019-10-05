<template>
  <div>
    <Header />

    <section>
      <LocationPicker v-model="userLocation" />
      <HeroWeather :location="userLocation" />
      <Reactions />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
import HeroWeather from "@/components/HeroWeather";
import LocationPicker from "@/components/LocationPicker";
import Reactions from "@/components/Reactions";

export default {
  components: {
    Header,
    HeroWeather,
    LocationPicker,
    Reactions
  },

  data() {
    return {
      userLocation: "Reykjavik"
    };
  }
};
</script>
