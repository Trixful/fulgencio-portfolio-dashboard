<template>
  <div>
    <nav class="navbar">
      <router-link to="/portfolio/profile">Profile</router-link>
      <router-link to="/portfolio/showcase">Showcase</router-link>
      <router-link to="/portfolio/contact">Contact</router-link>
      <router-link to="/portfolio/creative">Creative</router-link>
      <router-link to="/login">Logout</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.navbar {
  background-color: #222;
  padding: 15px;
  display: flex;
  gap: 15px;
  justify-content: center;
}

.navbar a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.navbar a.router-link-exact-active {
  color: #f1f1f1;
  border-bottom: 2px solid #f1f1f1;
}
</style>
