<template>
  <div class="about-page">
    <section class="intro">
      <h1>About E-Dine</h1>
      <p>We’re dedicated to offering you the best dining recipes right from your home. Discover flavors from around
        the world while you track your calories.</p>
    </section>

    <section class="history">
      <h2>Our History</h2>
      <p>Founded in 2020, E-Dine started as a small local kitchen and has grown into a premier online dining
        destination. Our passion for quality food and exceptional service drives everything we do.</p>
    </section>

    <section class="team">
      <h2>Meet Our Team</h2>
      <div class="team-members">
        <div class="team-member">
          <img src="../images/sous-chef.webp" alt="Head Chef">
          <p><strong>John Doe</strong> - Head Chef</p>
        </div>
        <div class="team-member">
          <img src="../images\Nutritionist-Job-Description-Template.jpg" alt="Nutritionist">
          <p><strong>Jane Smith</strong> - Nutritionist</p>
        </div>
      </div>
    </section>

    <section class="invitation">
      <h2>Join Us</h2>
      <p>Explore our menu online. Got questions?
        <router-link to="/contacts">Contact us</router-link>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.about-page h1,
.about-page h2 {
  position: relative;
  text-align: center;
  color: white;
}

.about-page p {
  font-size: 1.2rem;
  /* Larger text */
  text-align: center;
  /* Centered text */
  margin: 20px 0;
  /* Adds vertical space around the paragraph */
}

.intro,
.history,
.team,
.invitation {
  margin-bottom: 20px;
}

.team-members {
  display: flex;
  justify-content: space-around;
}

.team-member img {
  width: 150px;
  height: 150px;
  border-radius: 75px;
  object-fit: cover;
}
</style>
