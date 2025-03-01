import Header from "../common/Header";
import Banner from "../common/Banner";
import Services from "../HomePage/Services";
import Solutions from "../HomePage/Solutions";
import News from "../HomePage/News";
import Footer from "../common/Footer";

const HomePage = () => {
    return (
      <div className="bg-gray-100 text-gray-900">
        {/* Header Section */}
        <Header />
        
        {/* Banner Section */}
        <Banner />
        
        {/* Services Section */}
        <Services />
        
        {/* Solutions Section */}
        <Solutions />
        
        {/* News Section */}
        <News />
        
        {/* Footer Section */}
        <Footer />
      </div>
    );
  };
  
  export default HomePage;