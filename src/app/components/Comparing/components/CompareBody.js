import { humanizeText, getFirstColumnKeys, getFieldData } from "../helpers";
import "../Comparing.scss";
import { CompareItemHeader } from "./CompareItemHeader";
import { classNames } from "../../../utils/classNames";
import ProductCard from "../../ProductCard/ProductCard";

export const CompareBody = ({ data }) => {
  const getCompareBody = (arr, products, headerData, columns) => {
    return (
      <div className="comparing__content-wrapper">
        <div
          className="comparing__grid"
          style={{
            "--cols": columns,
          }}
        >
          <div></div>
          {headerData.map((item) => (
            <CompareItemHeader key={item.id} item={item} />
          ))}
        </div>
        <div className="comparing__content-row">
          {arr.map((obj, idx) =>
            Object.entries(obj).map(([key, val]) => (
              <div key={idx + key}>
                <h2 className="comparing__content-row-header">{humanizeText(key)}</h2>
                <ul className="comparing__content-row-list">
                  {val.map((i, idx) => (
                    <li
                      key={idx}
                      className="comparing__grid comparing__table"
                      style={{
                        "--cols": columns,
                      }}
                    >
                      <div>{humanizeText(i)}</div>

                      {products[key].map((pi, idx) => {
                        const val = pi.find((y) => Object.keys(y) == i) || {};
                        return <div key={idx}>{val[i] || "--"}</div>;
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
        <div
          className="comparing__grid comparing__product-card"
          style={{
            "--cols": columns,
          }}
        >
          <div></div>
          {headerData.map((item, idx) => (
            <ProductCard
              key={idx}
              id={item.id}
              imageURL={item.image}
              category={item.category}
              title={item.title}
              price={Number(item.price)}
              discountPrice={Number(item.discountPrice)}
            />
          ))}
        </div>
      </div>
    );
  };

  const compareProductsData = getFieldData(data);

  const firstColumnKeys = getFirstColumnKeys(data[0].specifications);
  const columnsCount = data.length + 1;

  const headerData = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      discountPrice: item.discountPrice,
      category: item.category,
    };
  });

  return getCompareBody(firstColumnKeys, compareProductsData, headerData, columnsCount);
};
