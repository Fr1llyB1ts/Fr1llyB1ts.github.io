<script setup>
import Header from '../components/Header.vue'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <Header />
  <main>
    <section class="about">
      <h3>about</h3>
      <p>about</p>
    </section>
    <section class="projects">
      <ProjectCard :project="project" />
    </section>
  </main>
</template>
