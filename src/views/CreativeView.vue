<template>
  <!-- Resume main container -->
  <div class="resume-container">
    <!-- Header with image and name/title -->
    <div class="resume-header">
      <img class="resume-img" src="/JAY_0098.JPG" alt="Trixia Joy Fulgencio">
      <div class="resume-title">
        <h1>Fulgencio <br>Trixia Joy C.</h1>
        <p>Computer Engineering Technology Top Student Graduate</p>
        <p>Computer Engineering Student</p>
      </div>
    </div>
    <!-- Contact details -->
    <div class="resume-contact">
      <ul>
        <li>09278080468</li>
        <li>trixcfulgencio@gmail.com</li>
        <li>9683 Pililia Makati City</li>
      </ul>
    </div>
    <!-- Main resume content: left (education, skills, etc.) and right (about, experience, reference) -->
    <div class="resume-main">
      <div class="resume-left">
        <h2>Education</h2>
        <h5>Diploma in Computer Engineering Technology</h5>
        <p>Polytechnic University of the Philippines: Institute of Technology (2020-2023)</p>
        <h5>Undergrad for Bachelor of Science in Computer Engineering</h5>
        <p>Polytechnic University of the Philippines: College of Engineering (2023-present)</p>
        <h2>Certification</h2>
        <ul>
          <li>Best Student in Computer Engineering Technology (2023)</li>
          <li>NCII: Computer System Servicing (2023)</li>
          <li>Council Officer of Mass Media and Communications Committee of College of Engineering Student Council (2023-2024)</li>
        </ul>
        <h2>Skills</h2>
        <p>Leadership</p>
        <p>Teamwork</p>
        <p>Creativity</p>
        <p>Meets Deadline</p>
        <p>Critical Thinking</p>
        <h2>Language</h2>
        <p>English</p>
        <p>Filipino</p>
      </div>
      <div class="resume-right">
        <h2>About Me</h2>
        <p>
          I am an aspiring web and design-focused computer engineering student who strives to create websites that are both fluid and interactive.
          This resume website serves as a jumpstart to my career, and I hope it will help me further develop my creativity and improve my time management skills.
          I also have experience as a student leader.
          Currently, I am the Class President for BSCOE 4-4P, an overall co-head for the Start Up 2025 seminar event, and the Head of the Creative Committee.
        </p>
        <h2>Experience</h2>
        <h3>Graphic Designer (September 2021-March 2022)</h3>
        <h5>Navigate Global Marketing Asia Inc.</h5>
        <p>Created and designed flyers for partners, learned Adobe Acrobat, Photoshop, and Canva for editing and design.</p>
        <h3>Web and Multimedia Design (March 2023 - July 2023)</h3>
        <h5>TMJP BPO Services Inc. (2023)</h5>
        <p>Learned dynamic/static web design, used Adobe XD, SASS, WordPress, and Git for project work and collaboration.</p>
        <h2>Reference</h2>
        <div class="reference-section">
          <div>
            <p>Joy Fulgencio</p>
            <p>Navigate Global Marketing Asia Inc.</p>
            <p>joyfulgencio@navigateglobal.net</p>
          </div>
          <div>
            <p>Dante Edward Macaraeg</p>
            <p>TMJP BPO Services Inc.</p>
            <p>danteedwards@tmjpbpo.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Resume main container styling */
.resume-container {
  max-width: 1100px;
  margin: 2rem auto;
  background: #232323;
  border-radius: 1.5rem;
  box-shadow: 0 2px 24px rgba(0,0,0,0.18);
  padding: 2rem 2.5rem;
  color: #eee;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  width: 100%;
}
/* Header with image and name/title */
.resume-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}
.resume-img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #eee;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
}
.resume-title h1 {
  margin: 0;
  font-size: 2.2rem;
  color: #fff;
  letter-spacing: 1px;
}
.resume-title p {
  color: #aaa;
  margin: 0.5rem 0 0 0;
  font-size: 1.1rem;
}
/* Contact details styling */
.resume-contact ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  font-size: 1rem;
  color: #ccc;
}
/* Main resume content layout */
.resume-main {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
}
/* Left column: education, skills, etc. */
.resume-left {
  flex: 1 1 320px;
  min-width: 280px;
  background: #292929;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  margin-bottom: 1.5rem;
}
.resume-left h2, .resume-right h2 {
  color: #4fc3f7; /* Section headers in blue */
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;
}
.resume-left h5 {
  color: #fff;
  margin: 0.7rem 0 0.2rem 0;
  font-size: 1.05rem;
}
.resume-left p, .resume-left ul, .resume-left li {
  color: #ccc;
  font-size: 0.98rem;
  margin-bottom: 0.4rem;
}
.resume-left ul {
  padding-left: 1.2rem;
}
/* Right column: about, experience, reference */
.resume-right {
  flex: 2 1 500px;
  min-width: 320px;
  background: #292929;
  border-radius: 1rem;
  padding: 1.5rem 1.2rem;
  margin-bottom: 1.5rem;
}
.resume-right h3 {
  color: #fff;
  margin: 1rem 0 0.2rem 0;
  font-size: 1.1rem;
}
.resume-right h5 {
  color: #aaa;
  margin: 0.2rem 0 0.5rem 0;
  font-size: 1rem;
}
.resume-right p {
  color: #ccc;
  font-size: 0.98rem;
  margin-bottom: 0.7rem;
}
/* Reference section styling */
.reference-section {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}
.reference-section > div {
  flex: 1 1 0;
  background: #232323;
  border-radius: 0.7rem;
  padding: 0.7rem 1rem;
  color: #eee;
  font-size: 0.98rem;
  min-width: 220px;
}
@media (max-width: 900px) {
  .resume-container {
    padding: 1rem 0.5rem;
    border-radius: 0.7rem;
    margin: 1rem 0.2rem;
    width: 100%;
    min-width: 0;
  }
  .resume-header, .resume-main, .resume-contact ul, .reference-section {
    min-width: 0;
  }
  .reference-section {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
}
</style>

<script>
export default {
  name: 'CreativeView'
};
</script>
