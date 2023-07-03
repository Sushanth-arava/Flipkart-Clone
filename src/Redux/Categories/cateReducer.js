import Electronics from "../../Assets/Data/BestOfPageData/BestOf_electronics.json";
import BeautyFoodToys from "../../Assets/Data/BestOfPageData/Bestof_BooksFoodToys.json";

let cate = [];
// const initialState = {
//   cate: [],
// };

const cateReducer = (state = cate, action) => {
  switch (action.type) {
    case "Electronics":
      return Electronics;
    case "bft":
      return BeautyFoodToys;
    default:
      return state;
  }
};
export default cateReducer;
