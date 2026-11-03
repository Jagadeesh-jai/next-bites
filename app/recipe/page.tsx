import RecipeGrid from "../components/RecipeGrid";
import { recipes } from "../data/recepies";

export default function RecipeIndexPage() {
  return (
    <main className="home">
      <section className="hero">
        <h1>
          Browse every <span className="hl">recipe</span>.
        </h1>
        <p>
          {recipes.length} recipes to browse, search, and cook. Pick one and
          get the full method.
        </p>
      </section>
      <RecipeGrid recipes={recipes} />
    </main>
  );
}