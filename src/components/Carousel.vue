<template>
  <div class="flex flex-1 items-center">
    <div class="card-carousel flex flex-col items-center relative">
      <Card
        class="current-element"
        :name="currentElement.name"
        :title="currentElement.title"
        :text="currentElement.text"
        :image="currentElement.image"
      ></Card>

      <div
        class="rounded-full bg-white shadow-lg top-49% md:top-67% lg:left-60% 3xl:top-84% 3xl:left-60% 4xl:left-65% absolute"
      >
        <ArrowButton
          iconType="icon-prev"
          :onClick="showPrevElement"
          :disabled="this.reachedMaxLeft"
        />
        <ArrowButton
          iconType="icon-next"
          :onClick="showNextElement"
          :disabled="this.reachedMaxRight"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import ArrowButton from "./ArrowButton.vue";

export default {
  name: "Carousel",
  components: { Card, ArrowButton },
  props: { cards: Array },

  data() {
    return {
      currentElementIndex: 0,
    };
  },
  computed: {
    currentElement() {
      return this.cards[this.currentElementIndex];
    },
    reachedMaxLeft() {
      return this.currentElementIndex === 0;
    },
    reachedMaxRight() {
      return this.currentElementIndex === this.cards.length - 1;
    },
  },
  methods: {
    showNextElement() {
      // if (this.reachedMaxRight) return;
      this.currentElementIndex++;
      console.log(this.currentElementIndex);
      console.log("hello");
    },
    showPrevElement() {
      // if (this.reachedMaxLeft) return;
      this.currentElementIndex--;
      console.log(this.currentElementIndex);
      console.log("bye");
    },
  },
};
</script>

<style></style>
