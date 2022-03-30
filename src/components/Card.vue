<template>
  <div
    class="card flex flex-col items-center justify-center w-72 h-{420px} rounded-md shadow-lg p-2"
  >
    <div class="">
      <img
        class="card-icon"
        alt="card icon"
        :src="require(`@/assets/images/${image}`)"
      />
    </div>
    <div class="card-content">
      <p class="py-4 dark-blue">{{ text }}</p>
      <h4 class="font-bold dark-blue">{{ name }}</h4>
      <h6 class="grayish-blue">{{ title }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    title: String,
    image: String,
    text: String,
  },
  data() {
    return {
      currentElement: 0,
    };
  },
  computed: {
    currentElementIndex() {
      return this.cards[this.currentElementIndex];
    },
  },
};
</script>

<style></style>
