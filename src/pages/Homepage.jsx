import Hero from '../components/Hero';
function Homepage() {
  return (
    <section className="Homepage">
      <Hero 
        title = "Welcome to Tech outlet!" 
        subtitle = "All your tech needs in one place!" 
        calltoaction = "Shop Here!"
      />
      <h3>We have all the best new tech products for a price that you will love!</h3>
    </section>
  );
}
export default Homepage;
