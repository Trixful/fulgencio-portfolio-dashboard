<template>
  <!-- Main container for the creative (resume) page -->
  <div class="container">
    <h2>Creative Resume</h2>
    <!-- Resume sections: Education, Experience, Skills, etc. -->
    <section class="resume-section">
      <h3>Education</h3>
      <ul>
        <li><strong>Bachelor of Science in Computer Science</strong> - PUP Main Campus</li>
      </ul>
    </section>
    <section class="resume-section">
      <h3>Experience</h3>
      <ul>
        <li>Web Developer Intern - Example Company (2024)</li>
      </ul>
    </section>
    <section class="resume-section">
      <h3>Skills</h3>
      <ul>
        <li>JavaScript, Vue.js, HTML, CSS</li>
        <li>Responsive Design, UI/UX</li>
      </ul>
    </section>
    <section class="resume-section">
      <h3>Achievements</h3>
      <ul>
        <li>Dean's Lister, 2023</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CreativeView'
};
</script>

<style scoped>
/* Main container styling for the creative (resume) page */
.container {
  max-width: 600px;
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

h2 {
  margin-bottom: 2rem;
  color: #2196f3;
  font-weight: 700;
  letter-spacing: 1px;
}

/* Resume section styling */
.resume-section {
  width: 100%;
  margin-bottom: 1.5rem;
}

.resume-section h3 {
  color: #64b5f6;
  margin-bottom: 0.7rem;
}

.resume-section ul {
  list-style: disc inside;
  color: #b0b0b8;
  margin: 0;
  padding: 0 0 0 1rem;
}

.resume-section li {
  margin-bottom: 0.5rem;
}
</style>
