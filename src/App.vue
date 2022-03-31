<template>
  <div class="flex flex-col justify-between h-screen p-2">
    <Carousel :cards="cards"></Carousel>
  <SvgContainer svgType="pattern-curve"></SvgContainer>
  </div>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import SvgContainer from "./components/SvgContainer.vue";

export default {
  components: {
    Carousel, SvgContainer
  },
  name: "app",
  data() {
    return {
      cards: [
        {
          name: "Tanya Sinclair",
          title: "UX Engineer",
          text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. “",
          image: "image-tanya.jpg",
        },
        {
          name: "John Tarkpor",
          title: "Junior Front-end Developer",
          text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.“",
          image: "image-john.jpg",
        },
        {
          name: "Bente",
          title: "Junior SEO Specialist",
          text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.“",
          image: "image-tanya.jpg",
        },
      ],
    };
  },
};
</script>


