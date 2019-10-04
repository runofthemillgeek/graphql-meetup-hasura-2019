<template>
  <div class="flex mt-10 md:max-w-4xl px-2 mx-auto">
    <Card>
      <template #header>
        Change Location
      </template>
      <template #default>
        <select :value="value" @change="$emit('input', $event.target.value)">
          <option v-for="location in locations" :key="location.id">
            {{ location.name }}
          </option>
        </select>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  props: {
    value: String
  },
  data() {
    return {
      locations: [
        { id: 1, name: "Reykjavik" },
        { id: 2, name: "Akuryeri" },
        { id: 3, name: "Husavik" }
      ]
    };
  },
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped></style>
