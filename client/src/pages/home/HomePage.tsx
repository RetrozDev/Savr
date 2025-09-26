import './homepage.css'
import { Hero } from '../../components/home/hero/Hero'
import { Categories } from '../../components/home/categories/Categories'

export const HomePage = () => {
    return (
        <main className="home-page">
            <Hero />
            <Categories />
        </main>
    )
}