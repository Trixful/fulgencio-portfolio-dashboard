<template>
  <!-- Main container for the profile page -->
  <div class="container" style="display: flex; justify-content: center; align-items: center; min-height: 80vh;">
    <!-- Profile card with image, name, and social links -->
    <div class="card profile-card">
      <img src="/JAY_0098.JPG" alt="Profile" class="profile-img">
      <h1 class="profile-name">TRIXIA FULGENCIO</h1>
      <p class="profile-title">Junior Web Designer</p>
      <p class="profile-bio">
        Hello! I'm Trixia, a passionate front-end developer who enjoys crafting clean, elegant designs. I specialize in Vue.js and modern web design trends. I love learning new technologies and bringing creative ideas to life.
      </p>
      <div class="profile-social">
        <a href="https://www.facebook.com/tricckkyyy/" class="facebook">Facebook</a>
        <a href="https://www.linkedin.com/in/trixia-joy-fulgencio-a7b71721a/" class="linkedin">LinkedIn</a>
        <a href="https://github.com/Trixful" class="github">GitHub</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Main container styling for the profile page */
.container {
  max-width: 400px;
  margin: 7vh auto 0 auto;
  background: #18181c;
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 #00000033;
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

/* Profile card styling */
.profile-card {
  max-width: 400px;
  width: 100%;
  text-align: center;
  padding: 2rem 1.5rem;
  background: #222;
  border-radius: 1.5rem;
  box-shadow: 0 2px 24px rgba(0,0,0,0.18);
}

.profile-img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 3px solid #eee;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
}

.profile-name {
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
}

.profile-title {
  color: #aaa;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  font-weight: 500;
}

.profile-bio {
  color: #ccc;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.profile-social {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1rem;
}

.profile-social a {
  color: #eee;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
  padding: 0.2rem 0.7rem;
  border-radius: 6px;
}

.profile-social .facebook:hover {
  color: #fff;
  background: #3b5998;
}

.profile-social .linkedin:hover {
  color: #fff;
  background: #0077b5;
}

.profile-social .github:hover {
  color: #fff;
  background: #333;
}
</style>

<script>
export default {
  name: 'ProfileView'
};
</script>
