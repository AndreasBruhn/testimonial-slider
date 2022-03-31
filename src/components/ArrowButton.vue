<template>
  <button
    @click="onClick"
    class="h-{90px} border-none bg-transparent cursor-pointer opacity-50 py-4 px-5"
  >
    <img
      class="h-{90px} w-auto"
      :src="require(`@/assets/images/${iconType}.svg`)"
    />
  </button>
</template>

<script>
export default {
  name: "ArrowButton",
  props: { iconType: String, onClick: Function },
};
</script>

<style></style>
