<template>
  <div class="shadow-lg border border-solid border-gray-100 rounded-lg">
    <h2
      class="border-b border-solid border-gray-300 px-4 py-3 text-sm uppercase tracking-wide text-gray-600 font-semibold"
    >
      <slot name="header" />
    </h2>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
