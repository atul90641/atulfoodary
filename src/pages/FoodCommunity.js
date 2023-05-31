import Header from "../components/Header";
import Footer from "../components/Footer";
const FoodCommunity = () => {
  return (
    <div>
      <Header />
      
      <div className="container">
        <div style={{ marginTop: "100px" }} className="inner-container">
        <div className="community-content">
        <h3>Contact Us</h3>
        <p>Thank you for visiting our food website! We value your feedback, questions, and suggestions. If you have any inquiries or need assistance, please don't hesitate to contact us. Our team is here to help.</p>
        <p>You can reach us through the following methods:</p>

        <p className="shift">1. Email: Send us an email at <b>atul90641@gmail.com</b> and we will respond to your message as soon as possible. Please provide detailed information regarding your query or request so that we can assist you more effectively.</p>
        <p className="shift">2. Phone: Feel free to give us a call at our customer service hotline: +91 840-072-5190. Our friendly customer support representatives are available to assist you during our working hours.</p>
        <p className="shift">3. Social Media: Connect with us on our social media platforms for the latest updates, promotions, and more. You can find us on Facebook, Twitter, and Instagram. Don't forget to follow us and engage with our content.</p>
        
        <div className="image">

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img src={"/img/short1.png"} className="short-image" alt=""></img>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img src={"/img/short2.png"} className="short-image" alt=""></img>
        </a>

        <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img src={"/img/short3.png"} className="short-image" alt=""></img>
        </a>

        </div>

        <p>We appreciate your interest in our food website and look forward to hearing from you. Your satisfaction is our top priority, and we strive to provide you with the best possible experience. Thank you for choosing us as your trusted source for all things food-related!</p>
        <p>Best regards, The Atul's Foodary Team</p>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
 
export default FoodCommunity;