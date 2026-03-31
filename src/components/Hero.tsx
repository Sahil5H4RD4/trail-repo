import './Hero.css'

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h3 className="hero-greeting">Hi, my name is</h3>
        <h1 className="hero-name">Sahil Mankhi.</h1>
        <h1 className="hero-subtitle">I build things for the web.</h1>
        <p className="hero-desc">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </p>
        <a href="#projects" className="btn hero-btn">Check out my work</a>
      </div>
      <div className="hero-graphics">
        <div className="blob"></div>
      </div>
    </div>
  )
}
