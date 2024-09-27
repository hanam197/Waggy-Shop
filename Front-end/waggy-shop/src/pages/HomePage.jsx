import CardSlider from "../components/CardSlider/CardSlider";
import CatalogList from "../components/Catalogs/Catalog-list";
import Category from "../components/Categories/Category";

function HomePage() {
  return (
    <div>
      <CardSlider></CardSlider>
      <Category></Category>
      <CatalogList></CatalogList>
    </div>
  );
}
export default HomePage;
