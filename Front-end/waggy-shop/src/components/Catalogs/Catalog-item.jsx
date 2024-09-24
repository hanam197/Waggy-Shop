import { Button } from "@mui/material";
import petClothings from "../../assets/images/item1.jpg";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";

function CatalogItem() {
  const value = 3.5;
  const CustomButton = styled(Button)({
    borderColor: "gray", // Border color
    fontFamily: "Chilanka, cursive", // Custom font
    fontSize: "18px", // Increase font size
    borderRadius: "5px", // Increase border radius
    padding: "12px 24px", // Increase padding for a larger size
    color: "gray",
    "&:hover": {
      backgroundColor: "#ff9800", // Màu cam sáng khi hover
      color: "white", // Màu chữ trắng khi hover
      "& .MuiSvgIcon-root": {
        // Chọn biểu tượng bên trong button
        color: "red", // Màu trắng cho biểu tượng khi hover
      },
    },
  });
  return (
    <div className="flex flex-col">
      <div className="flex justify-start">
        <a href="#">
          <img
            alt="clothings pet"
            src={petClothings}
            className="rounded-3xl"
          ></img>
        </a>
      </div>
      <div className="flex flex-col">
        <h3 className="text-3xl font-chilanka text-left pt-4 mb-1">
          Grey hoodie
        </h3>
        <div className="flex flex-col space-y-4">
          <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 1 }}>{value}</Box>
          </Box>
          <h3 className="font-chilanka text-3xl text-custom text-left ">
            $18.00
          </h3>
          <div className="flex justify-start gap-4">
            <CustomButton size="large" variant="outlined">
              Add to Cart
            </CustomButton>
            <CustomButton variant="outlined">
              <FavoriteIcon color="action" />
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CatalogItem;
