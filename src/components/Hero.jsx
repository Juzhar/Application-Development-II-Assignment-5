import './Hero.css';
function Hero({title, subtitle, calltoaction}) {
  return (
    <section className="hero"
      style={{ backgroundImage: `https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics` }}>
    <div className="hero-overlay">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <button>{calltoaction}</button>
    </div>
    </section>
  );
}
export default Hero;