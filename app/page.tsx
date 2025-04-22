// app/page.tsx

import HeroSection from './components/HeroSection'
import BenefitsSection from './components/BenefitsSection'
import StatsSection from './components/StatsSection'
import PopularCourses from "./components/PopularCourses";
import CourseCategories from './components/CourseCategories'
import SuccessfulStudents from './components/SuccessfulStudents'
import RecentBlog from './components/RecentBlog'
import PricingSection from './components/PricingSection'
import NewsletterSection from './components/NewsletterSection'



export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <StatsSection />
      <PopularCourses />
      <CourseCategories />
      <SuccessfulStudents />
    <RecentBlog />
    <PricingSection />
    <NewsletterSection />
    
   
    </main>
  )
}

