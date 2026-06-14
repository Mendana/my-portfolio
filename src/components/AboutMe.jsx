function AboutMe() {
  return (
    <div className="about-me-container">
      <article>
        <h2 className="text-5xl font-bold mb-8 lg:text-6xl text-[var(--text-primary)]">
          ABOUT
        </h2>
        <p className="main-text mb-8">
          I'm a young software developer with a strong interest in web
          development, artificial intelligence, and emerging technologies. My
          journey started with a deep curiosity for how web applications work
          under the hood.
        </p>

        <p className="main-text mb-8">
          Over time, I've focused on full-stack development and explored how
          artificial intelligence can enhance user interaction and solve real
          problems.
        </p>

        <p className="main-text mb-8">
          I'm currently focused on growing as a full-stack developer while
          experimenting with AI models, automation, and emerging technologies.
        </p>
      </article>
      <article>
        <ul className="list-about">
          <li className="about-item">SERVICES</li>
          <ul className="list-about-item">
            <li>AI Integration</li>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Basic Data Analysis</li>
          </ul>
          <li className="about-item">RECOGNITION</li>
          <ul className="list-about-item">
            <li>100+ Platzi courses completed</li>
            <li>Studying maths and software at Oviedo</li>
          </ul>
        </ul>
      </article>
    </div>
  );
}

export default AboutMe;

