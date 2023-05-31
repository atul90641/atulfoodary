import Footer from '../components/Footer';
import Header from '../components/Header';

 
const TestPage = () => {
  return (
    <div>
    <Header />

    <div className="container">
        <div style={{ marginTop: "100px" }} className="inner-container">
        
          <div className="community-content">
              <h3>About Us</h3>
              <p>Welcome to <b>Atul's Foodary!</b></p>
              <p>We're passionate about all things food, and we want to share our love for culinary delights with you. We invite you to dive deeper into our world of flavors, ingredients, and cooking techniques. Here's what you can discover:</p>
              <p className="shift"><b>1. Our Culinary Journey:</b> Embark on a journey with us as we share our story and the inspiration behind [Your Food Website]. Learn how our love for food and our desire to create memorable dining experiences led us to create this platform.</p>
              <p className="shift"><b>2. The Art of Ingredients:</b> Discover the heart and soul of our dishes. We believe that great meals start with exceptional ingredients. Delve into our ingredient sourcing practices, where we prioritize quality, freshness, and sustainability. Learn about the local farmers and suppliers we work with, who share our commitment to excellence.</p>
              <p className="shift"><b>3. Cooking Techniques and Secrets:</b> Uncover the culinary techniques we employ to bring out the best in every dish. From sautéing to grilling, roasting to sous vide, we'll share our insights and tips to elevate your cooking skills. Explore how specific cooking methods can transform ordinary ingredients into extraordinary flavors.</p>
              <p className="shift"><b>4.Nutritional Wellness:</b> We believe that good food should not only tantalize the taste buds but also nourish the body. Learn about our approach to nutritional wellness and how we create balanced and wholesome meals. Discover our range of dietary options, including gluten-free, vegetarian, and vegan dishes, designed to accommodate diverse preferences and needs.</p>
              <p>At Atul's Foodary, we believe that food is not just sustenance; it's an experience to be savored and shared. Join us in this culinary journey, where we aim to educate, inspire, and ignite your passion for all things food. Explore our "Learn More" section and embark on a flavorful adventure today.</p>
    
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}
 
export default TestPage;