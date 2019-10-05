<template>
  <button
    class="text-lg bg-white px-2 py-1 rounded border border-solid border-gray-300 flex"
    @click="$emit('click', null)"
  >
    <div class="pr-2">
      {{ emoji }}
    </div>
    <div class="pl-3 border-l border-solid border-gray-300">
      {{ content }}
    </div>
  </button>
</template>

<script>
export default {
  props: {
    emoji: String,
    content: [String, Number]
  }
};
</script>

<style lang="scss" scoped></style>
