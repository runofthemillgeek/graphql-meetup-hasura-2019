<template>
  <div class="mt-10 md:max-w-4xl px-2 mx-auto">
    <div class="flex justify-between shadow-lg border border-solid border-gray-100 rounded-lg p-4">
      <div class="w-1/3">
        <div class="text-xl text-gray-700">Reykjavik</div>
        <div class="text-blue-700 font-semibold text-5xl">7 ºC</div>

        <div class="mt-4 text-gray-700 uppercase tracking-wide">Clear sky</div>
      </div>
      <div>
        <img class="h-32" :src="bgImage" alt="Clear sky" />
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

import rainingImage from "@/assets/raining.svg";
import snowingImage from "@/assets/snowy.svg";
import sunnyImage from "@/assets/sunny.svg";

export default {
  props: {
    location: String
  },
  computed: {
    bgImage() {
      return sunnyImage;
    }
  },
  apollo: {
    weather: gql`
      query GetPinnedWeather {
        weather: pinnedWeather {
          location {
            name
          }
          forecast {
            unit
            temperature
            info
          }
        }
      }
    `
  }
};
</script>
