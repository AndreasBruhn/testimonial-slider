<template>
  <div class="flex flex-col items-center justify-center p-4">
    <!-- <div class="section">
      <h2>{{ this.sections[1].headline }}</h2>
      <p>{{ this.sections[1].text }}</p>
    </div> -->

    <Carousel :cards="cards"></Carousel>
  </div>
</template>

<script>
import Carousel from "./components/Carousel.vue";

export default {
  components: {
    Carousel,
  },
  name: "app",
  data() {
    return {
      sections: [
        { headline: "What can Service Workers do?" },
        {
          headline: "How do Service Workers exactly work?",
          text: "Read more about Service Workers it in my other tutorials. There we implement and discuss the astonishing offline-first experience that Service Workers provide.",
        },
      ],
      cards: [
        {
          name: "Tanya Sinclair",
          title: "UX Engineer",
          text: "“ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. “",
          image: "image-tanya.jpg",
        },
        {
          name: "John Tarkpor",
          title: "Junior Front-end Developer",
          text: "“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.“",
          image: "image-john.jpg",
        },
        {
          name: "Send Push Notifications - Bent",
          text: "The Notifications API lets us send push notifications to re-engage users.",
          image: "antenna.svg",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
