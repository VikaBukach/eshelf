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
          {arr.map((obj, idx) => {
            if (typeof obj !== "object" && typeof obj === "string") {
              return (
                <div>
                  <ul className="comparing__content-row-list --with-border">
                    <li
                      key={idx}
                      className="comparing__grid comparing__table"
                      style={{
                        "--cols": columns,
                      }}
                    >
                      <h2 className="comparing__content-row-header --black --remove-border">{humanizeText(obj)}</h2>
                      {(products[obj].length < 2 && columns == 3 ? [...products[obj], []] : products[obj]).map(
                        (pi, idx) => {
                          return (
                            <div key={idx}>{typeof pi === "boolean" ? (pi ? "Yes" : "No") : pi.toString() || "--"}</div>
                          );
                        }
                      )}
                    </li>
                  </ul>
                </div>
              );
            }

            return Object.entries(obj).map(([key, val]) => {
              if (val.length === 0) {
                return null;
              }
              return (
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

                        {(products[key].length < 2 && columns == 3 ? [...products[key], []] : products[key]).map(
                          (pi, idx) => {
                            const val = pi.find((y) => Object.keys(y) == i) || {};
                            return <div key={idx}>{val[i] || "--"}</div>;
                          }
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            });
          })}
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
              imageURL={item.imageURL}
              category={item.category}
              title={item.title}
              price={Number(item.price)}
              discountPrice={Number(item.discountPrice)}
              specifications={item.specifications}
              color={item.color}
            />
          ))}
        </div>
      </div>
    );
  };

  const compareProductsData = getFieldData(data);

  function deepMerge(obj1, obj2) {
    const merged = { ...obj1 };

    for (const key in obj2) {
      if (typeof obj2[key] === "object" && obj2[key] !== null && !Array.isArray(obj2[key])) {
        if (typeof merged[key] === "object" && merged[key] !== null) {
          merged[key] = deepMerge(merged[key], obj2[key]);
        } else {
          merged[key] = { ...obj2[key] };
        }
      } else {
        merged[key] = obj2[key];
      }
    }

    return merged;
  }
  let keys = data[0].specifications;

  if (data.length === 2) {
    keys = deepMerge(data[0].specifications, data[1].specifications);
  }

  const firstColumnKeys = getFirstColumnKeys(keys);

  const columnsCount = data.length + 1;

  return getCompareBody(firstColumnKeys, compareProductsData, data, columnsCount);
};
