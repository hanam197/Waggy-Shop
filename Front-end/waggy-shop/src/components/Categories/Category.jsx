import { Bird, Salad, Dog, Cat, Fish } from "lucide-react";

function Category() {
  return (
    <div className="my-12">
      <div className="container mx-auto">
        <div className="flex justify-around gap-10 p-5">
          <div>
            <Salad
              size={100}
              color="#dead6f"
              strokeWidth={1.5}
              className="mb-2 cursor-pointer"
            />
            <p className="font-chilanka text-xl text-gray-600">Foodies</p>
          </div>
          <div>
            <Bird
              size={100}
              color="#dead6f"
              strokeWidth={1.5}
              className="mb-2 cursor-pointer"
            />
            <p className="font-chilanka text-xl text-gray-600">Bird Shop</p>
          </div>
          <div>
            <Dog
              size={100}
              color="#dead6f"
              strokeWidth={1.5}
              className="mb-2 cursor-pointer"
            />
            <p className="font-chilanka text-xl text-gray-600">Dog Shop</p>
          </div>
          <div>
            <Fish
              size={100}
              color="#dead6f"
              strokeWidth={1.5}
              className="mb-2 cursor-pointer"
            />
            <p className="font-chilanka text-xl text-gray-600">Fish Shop</p>
          </div>
          <div>
            <Cat
              size={100}
              color="#dead6f"
              strokeWidth={1.5}
              className="mb-2 cursor-pointer"
            />
            <p className="font-chilanka text-xl text-gray-600">Cat Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
