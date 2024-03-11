
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {fetchDataOfProducts} from "../../../../store/slices/productsSlice";
import ProductListHomePage from "../../ProductListHomePage/ProductListHomePage";

function SalesWeek() {

    return <ProductListHomePage
        title="Sales week"
        category="quadcopters"
        initialItemsToShow={5}
        fetchDataOfProducts={() => fetchDataOfProducts("quadcopters")}
    />
}

export default SalesWeek;
