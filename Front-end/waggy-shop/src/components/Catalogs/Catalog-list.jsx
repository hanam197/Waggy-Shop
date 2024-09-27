import CatalogItem from "./Catalog-item";

function CatalogList() {
  return (
    <div className="my-12">
      <div className="container mx-auto">
        <div className="mb-2">
          <h2 className="font-chilanka text-5xl text-left">Pet Clothing</h2>
        </div>
        <div className="flex gap-8">
          <CatalogItem></CatalogItem>
          <CatalogItem></CatalogItem>
          <CatalogItem></CatalogItem>
          <CatalogItem></CatalogItem>
          <CatalogItem></CatalogItem>
        </div>
      </div>
    </div>
  );
}
export default CatalogList;
