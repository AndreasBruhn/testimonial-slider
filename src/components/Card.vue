<template>
  <div
    class="card flex flex-col lg:flex-row items-center justify-center rounded-md p-2 text-center"
  >
    <div class="bg-pattern p-9 lg:p-20 lg:order-last">
      <img
        class="card-icon shadow-custom-shadow "
        alt="card icon"
        :src="require(`@/assets/images/${image}`)"
      />
    </div>
    <div class="card-content mt-12 lg:text-left lg:text-3xl lg:pl-16 lg:w-2/4 relative">

    <SvgContainer class="absolute top-0 left-35% md:left-44% lg:left-25% lg:top-m25% 4xl:top-m29%" svgType="pattern-quotes"></SvgContainer>
      <p class="px-1 py-4 text-center dark-blue font-light relative z-50 md:px-24 lg:px-1 lg:text-left lg:w-125%">{{ text }}</p>
      <footer class="lg:flex lg:pt-4">
      <h4 class="font-bold dark-blue px-2 lg:text-2xl">{{ name }}</h4>
      <h6 class="grayish-blue px-2 lg:text-2xl">{{ title }}</h6>
      </footer>
    </div>
  </div>
</template>

<script>
import SvgContainer from './SvgContainer.vue'

export default {
  name: "Card",
  components: { SvgContainer},
  props: {
    name: String,
    title: String,
    image: String,
    text: String,
  },
};
</script>

<style></style>
