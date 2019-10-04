<template>
  <div class="mt-10 md:max-w-4xl px-2 mx-auto">
    <Card v-if="true">
      <template #header>
        Weather Forecasts
      </template>
      <template #default>
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
      </template>
    </Card>
  </div>
</template>

<script>
import gql from "graphql-tag";

import LoadingIndicator from "@/components/LoadingIndicator";
import Card from "@/components/Card";

import rainingImage from "@/assets/raining.svg";
import snowingImage from "@/assets/snowy.svg";
import sunnyImage from "@/assets/sunny.svg";

const WEATHER_QUERY = gql`
  query GetPinnedWeather($location: String!) {
    weather: pinnedWeather(location: $location) {
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
`;

export default {
  props: {
    location: String
  },
  components: {
    Card,
    LoadingIndicator
  },
  computed: {
    bgImage() {
      const info = this.$apollo.loading
        ? ""
        : this.weather.forecast.info.toLowerCase();

      if (["overcast", "light rain", "rain", "rain showers"].includes(info)) {
        return rainingImage;
      } else if (
        [
          "sleet",
          "light sleet",
          "heavy sleet",
          "snow",
          "light snow",
          "heavy snow"
        ].includes(info)
      ) {
        return snowingImage;
      } else {
        return sunnyImage;
      }
    }
  },
  apollo: {
    weather: {
      query: WEATHER_QUERY,
      variables() {
        return {
          location: this.location
        };
      }
    }
  }
};
</script>
