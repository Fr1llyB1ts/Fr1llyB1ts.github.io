<script setup>
import Header from '../components/Header.vue'
</script>

<template>
  <Header />
  <main>
    <section class="about">
      <h3>about</h3>
      <p>about</p>
    </section>
    <section class="projects">
      <section class="card">
        <div class="card-header">
          <h5>project title</h5>
        </div>
        <img src="https://picsum.photos/150" class="card-img-top" />
        <section class="card">
          <section class="card-body">
            <p class="card-text">about project</p>
            <a href="" class="btn btn-primary">go to project</a>
          </section>
        </section>
      </section>
    </section>
  </main>
</template>
