<template>
  <div class="mt-10 md:max-w-4xl px-2 mx-auto">
    <div
      v-if="true"
      class="shadow-lg border border-solid border-gray-100 rounded-lg p-4"
    >
      <div class="relative">
        <LoadingIndicator v-if="$apollo.loading" />
        <div class="flex justify-between">
          <div class="w-1/3">
            <div class="text-xl text-gray-700">
              {{ $apollo.loading ? "..." : weather.location.name }}
            </div>
            <div class="text-blue-700 font-semibold text-5xl">
              {{
                $apollo.loading
                  ? "..."
                  : `${weather.forecast.temperature} º${weather.forecast.unit}`
              }}
            </div>

            <div class="mt-4 text-gray-700 uppercase tracking-wide">
              {{ $apollo.loading ? "..." : weather.forecast.info }}
            </div>
          </div>
          <div>
            <img class="h-32" :src="bgImage" alt="Clear sky" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

import rainingImage from "@/assets/raining.svg";
import snowingImage from "@/assets/snowy.svg";
import sunnyImage from "@/assets/sunny.svg";
import LoadingIndicator from "@/components/LoadingIndicator";

export default {
  props: {
    location: String
  },
  components: {
    LoadingIndicator
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
