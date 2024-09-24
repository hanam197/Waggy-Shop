import CardSlider from "../components/CardSlider/CardSlider";
import CatalogItem from "../components/Catalogs/Catalog-item";
import Category from "../components/Categories/Category";

function HomePage() {
  return (
    <div>
      <CardSlider></CardSlider>
      <Category></Category>
      <CatalogItem></CatalogItem>
    </div>
  );
}
export default HomePage;
