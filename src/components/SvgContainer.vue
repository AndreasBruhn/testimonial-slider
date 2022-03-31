<template>
  <div
    class="w-full"
  >
    <img
      class="w-auto"
      :src="require(`@/assets/images/${svgType}.svg`)"
    />
  </div>
</template>

<script>
export default {
  name: "SvgContainer",
  props: { svgType: String },
};
</script>

<style></style>
