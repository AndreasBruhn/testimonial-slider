<template>
  <div class="">
    <div class="card-carousel">
      <Card
        class="current-element"
        :name="cards[0].name"
        :title="cards[0].title"
        :text="cards[0].text"
        :image="cards[0].image"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: { Card },
  props: { cards: Array },
};
</script>

<style></style>
