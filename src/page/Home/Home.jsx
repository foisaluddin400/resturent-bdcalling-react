import { Addrun } from "../../components/HomeSection/Addrun"
import { Grupe } from "../../components/HomeSection/Grupe"
import { Hero } from "../../components/HomeSection/Hero"
import { Recipe } from "../../components/HomeSection/Recipe"

export const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Recipe></Recipe>
      <Grupe></Grupe>
      <Addrun></Addrun>
      
    </div>
  )
}
