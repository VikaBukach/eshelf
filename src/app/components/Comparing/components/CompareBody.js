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
          {arr.map((obj, idx) =>
            Object.entries(obj).map(([key, val]) => (
              <div key={idx + key}>
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
                      {products[key].map((pi, idx) => {
                        const val = pi.find((y) => Object.keys(y) == i);

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
          className={classNames(style.grid, style.productCart)}
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
              price={String(item.price)}
              discountPrice={String(item.discountPrice)}
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
