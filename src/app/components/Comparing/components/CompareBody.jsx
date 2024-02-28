import { humanizeText, getFirstColumnKeys, getFieldData } from "../helpers";
import style from "../Comparing.module.scss";
import { CompareItemHeader } from "./CompareItemHeader";
import { classNames } from "../../../utils/classNames";
import ProductCard from "../../ProductCard/ProductCard";

export const CompareBody = ({ data }) => {
  const getCompareBody = (arr, products, headerData, columns) => {
    return (
      <div className={classNames(style.compareWrapper)}>
        <div
          className={style.grid}
          style={{
            "--cols": columns,
          }}
        >
          <div></div>
          {headerData.map((item) => (
            <CompareItemHeader key={item.id} item={item} />
          ))}
        </div>
        <div className={style.compareRow}>
          {arr.map((obj) =>
            Object.entries(obj).map(([key, val]) => (
              <div>
                <h2 className={style.firstColumnHeader}>{humanizeText(key)}</h2>
                <ul className={style.firstColumnList}>
                  {val.map((i, idx) => (
                    <li
                      key={idx}
                      className={classNames(style.grid, style.table)}
                      style={{
                        "--cols": columns,
                      }}
                    >
                      <div>{humanizeText(i)}</div>
                      {products[key].map((pi) => {
                        const val = pi.find((y) => Object.keys(y) == i);

                        return <div>{val[i] || "--"}</div>;
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
        <div
          className={classNames(style.grid, style.productCart)}
          style={{
            "--cols": columns,
          }}
        >
          <div></div>
          {headerData.map((item) => (
            <ProductCard
              id={item.id}
              imageURL={item.image}
              category={"Smartphones"}
              title={item.name}
              price={item.price}
              discountPrice={item.discountPrice}
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
    console.log(item);
    return {
      id: item._id,
      name: item.fullName,
      image: item.image,
      price: item.color.products[0].price,
      discountPrice: item?.discountPrice || "0",
    };
  });

  return getCompareBody(firstColumnKeys, compareProductsData, headerData, columnsCount);
};
