<template>
  <div class="flex mt-10 md:max-w-4xl px-2 mx-auto">
    <Card>
      <template #header>
        React to Today's Weather
      </template>
      <template #default>
        <div class="relative">
          <LoadingIndicator v-if="$apollo.loading" />
          <div class="flex">
            <EmojiButton
              emoji="😇"
              :content="ratingsMap['😇']"
              @click="rate('😇')"
            />
            <EmojiButton
              class="ml-2"
              emoji="😭"
              :content="ratingsMap['😭']"
              @click="rate('😭')"
            />
            <EmojiButton
              class="ml-2"
              emoji="😡"
              :content="ratingsMap['😡']"
              @click="rate('😡')"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import gql from "graphql-tag";

import Card from "@/components/Card";
import EmojiButton from "@/components/EmojiButton";
import LoadingIndicator from "@/components/LoadingIndicator";

const UPDATE_RATING_MUTATION = gql`
  mutation updateRating($emoji: String!) {
    updateRating(emoji: $emoji)
  }
`;

const GET_RATINGS_QUERY = gql`
  query getRatings {
    weatherRatings: ratings {
      emoji
      count
    }
  }
`;

export default {
  components: {
    Card,
    EmojiButton,
    LoadingIndicator
  },
  apollo: {
    weatherRatings: { query: GET_RATINGS_QUERY, pollInterval: 500 }
  },
  computed: {
    ratingsMap() {
      return (this.$apollo.loading ? [] : this.weatherRatings).reduce(
        (acc, { emoji, count }) => ({ ...acc, [emoji]: count }),
        {}
      );
    }
  },
  methods: {
    rate(emoji) {
      this.$apollo.mutate({
        mutation: UPDATE_RATING_MUTATION,
        variables: {
          emoji
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
