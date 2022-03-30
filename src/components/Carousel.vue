<template>
  <div class="">
    <div class="card-carousel flex flex-col items-center">
      <Card
        class="current-element"
        :name="currentElement.name"
        :title="currentElement.title"
        :text="currentElement.text"
        :image="currentElement.image"
      ></Card>

      <div class="w-1/5 bg-black">
        <input
          type="image"
          src="/assets/images/icon-prev.svg"
          @click="showPrevElement"
          class="h-{90px} border-none bg-transparent cursor-pointer opacity-50"
        />
        <input
          type="image"
          src="/assets/images/icon-next.svg"
          @click="showNextElement"
          class="h-{90px} border-none bg-transparent cursor-pointer opacity-50"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Carousel",
  components: { Card },
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
