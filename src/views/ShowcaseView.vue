<template>
  <!-- Main container for the showcase page -->
  <div class="container">
    <h2>Portfolio Showcase</h2>
    <!-- Card grid for all projects -->
    <div class="card-list">
      <!-- Loop through each project and render a card -->
      <div class="card" v-for="(project, i) in projects" :key="i">
        <!-- Project image (supports GIFs) -->
        <img :src="project.img" :alt="project.title" class="card-img">
        <!-- Project title -->
        <h3>{{ project.title }}</h3>
        <!-- Project description -->
        <p>{{ project.desc }}</p>
        <!-- Button linking to project (e.g. GitHub) -->
        <a :href="project.link" target="_blank" rel="noopener" class="showcase-btn">View Project</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowcaseView',
  data() {
    return {
      // List of projects to display in the showcase
      projects: [
        {
          img: '/jake.gif', // Project image (can be GIF or PNG)
          title: "Jake's Coffee Shop",
          desc: 'Website for Jakes coffee shop',
          link: 'https://github.com/Trixful/jakescoffeeshop'
        },
        {
          img: '/calc.gif',
          title: 'Engineering Calculator',
          desc: 'MDAS, Binary calculator, Hexadecimal Calculator, Octal Calculator, etc.',
          link: 'https://github.com/Trixful/calc'
        },
        {
          img: '/map.gif',
          title: 'PUP Main Map',
          desc: 'A website for PUP Main Campus Map',
          link: 'https://github.com/Trixful/pup-main-map'
        },
        {
          img: '/button.gif',
          title: 'TMJP Button',
          desc: 'Button element I created for Telemarketing Japan Philippines BPO website.',
          link: 'https://github.com/Trixful/buttons'
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Main container styling for the showcase page */
.container {
  max-width: 900px;
  margin: 7vh auto 0 auto;
  border-radius: 18px;
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

h2 {
  margin-bottom: 2rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 1px;
}

/* Responsive grid for project cards */
.card-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  box-sizing: border-box;
}

/* Individual project card styling */
.card {
  background: #23232b;
  border-radius: 14px;
  box-shadow: 0 2px 12px 0 #00000022;
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  transition: transform 0.13s, box-shadow 0.13s;
}

.card:hover {
  transform: translateY(-4px) scale(1.025);
  box-shadow: 0 6px 24px 0 #2196f344;
}

/* Project image styling */
.card-img {
  width: 100%;
  max-width: 340px;
  border-radius: 10px;
  margin-bottom: 1.1rem;
  box-sizing: border-box;
}

.card h3 {
  color: #fff;
  margin: 0.2rem 0 0.5rem 0;
  font-size: 1.18rem;
  font-weight: 600;
  text-align: center;
}

.card p {
  color: #b0b0b8;
  font-size: 1rem;
  margin-bottom: 1.2rem;
  text-align: center;
}

/* Button styling for project links */
.showcase-btn {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  align-self: center;
  padding: 0.7rem 2.2rem;
  border-radius: 8px;
  background: linear-gradient(90deg, #2196f3 60%, #64b5f6 100%);
  color: #18181c;
  font-weight: 700;
  font-size: 1.08rem;
  border: none;
  box-shadow: 0 2px 8px 0 #2196f333;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  margin-top: 0.5rem;
}

.showcase-btn:hover, .showcase-btn:focus {
  background: linear-gradient(90deg, #64b5f6 60%, #2196f3 100%);
  transform: translateY(-2px) scale(1.04);
}

@media (max-width: 700px) {
  .container {
    padding: 1.2rem 0.7rem 1.5rem 0.7rem;
  }
  .card-list {
    gap: 1.2rem;
  }
  .card {
    padding: 1.1rem 0.7rem 1rem 0.7rem;
  }
  .card-img {
    max-width: 100vw;
  }
}
</style>
