import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import HomeArticles from '../components/HomeArticles';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <div className="container bg-gradient-to-br from-gray-50 to-white">
    <Nav/>
    <Hero/>
    <Profile/>
    <HomeArticles/>
    <Newsletter/>
    </div>
    <Footer/>
    </>
  )
}
