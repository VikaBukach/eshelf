import { useSelector } from "react-redux";
import style from "./Comparing.module.scss";

// const lang = {
//   "Screen_diagonal": "Screen diagonal"
// };

// // Основна функція виводу таблиці
// function setCompareTabel(compareData) {
//   // Перевірка на пустоту масива добавлених товарів
//   if (compareData.length > 0) {
//     // Вивід таблиці з нашими кусочками коду
//     return (
//       <table className={style.compareTableMain}>
//         <tbody>
//           <tr>
//             <td></td>
//             {compareData.map((compareProduct) => {
//               return (
//                 <td>
//                   <div className={style.compareImgHold}>
//                     <img src={compareProduct.image} alt="" className={style.compareImg} />
//                   </div>
//                   <h2 className={style.compareTitle}>{compareProduct.fullName}</h2>
//                 </td>
//               );
//             })}
//           </tr>
//           <tr>
//             <td className={style.compareCaption}>display:</td>
//             <td className={style.compareCaptionTd}></td>
//             <td className={style.compareCaptionTd}></td>
//           </tr>
//           <tr>
//             <td className={style.compareLabel}>frequency:</td>
//             <td className={style.compareValue}>120 Hz</td>
//             <td className={style.compareValue}>60 Hz</td>
//           </tr>
//           <tr>
//             <td className={style.compareLabel}>display_matrix_type:</td>
//             <td className={style.compareValue}>Dynamic AMOLED 2X Display</td>
//             <td className={style.compareValue}>Super Retina XDR display</td>
//           </tr>
//           <tr>
//             <td className={style.compareLabel}>display_resolution:</td>
//             <td className={style.compareValue}>3120 x 1440</td>
//             <td className={style.compareValue}>2556 x 1179</td>
//           </tr>
//           <tr>
//             <td className={style.compareLabel}>screen_diagonal:</td>
//             <td className={style.compareValue}>6.8</td>
//             <td className={style.compareValue}>6.1</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   } else {
//     return <h1>No product for compare!</h1>;
//   }
// }

export const ComparingPage = () => {
  const { data: compareData, isOutOfLimit } = useSelector((state) => state.compare);
  console.log(compareData);
  return (
    <div className="container">
      <div className={style.comparing}>
        <h1>Product comparing</h1>
        <div className={style.comparingBody}>
          {/* {setCompareTabel(compareData)} */}

          {/* <table className={style.compareTableMain}>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <div className={style.compareImgHold}>
                    <img
                      src="assets/images/Products/Smartphones/Samsung/GalaxyS24Ultra/all.jpg"
                      alt=""
                      className={style.compareImg}
                    />
                  </div>
                  <h2 className={style.compareTitle}>realme 9 Pro Plus 8/128GB FreeFire Edition</h2>
                </td>
                <td>
                  <div className={style.compareImgHold}>
                    <img
                      src="assets/images/Products/Smartphones/Samsung/GalaxyS24Ultra/all.jpg"
                      alt=""
                      className={style.compareImg}
                    />
                  </div>
                  <h2 className={style.compareTitle}>realme 9 Pro Plus 8/128GB FreeFire Edition</h2>
                </td>
              </tr>
              <tr>
                <td className={style.compareCaption}>display:</td>
                <td className={style.compareCaptionTd}></td>
                <td className={style.compareCaptionTd}></td>
              </tr>
              <tr>
                <td className={style.compareLabel}>frequency:</td>
                <td className={style.compareValue}>120 Hz</td>
                <td className={style.compareValue}>60 Hz</td>
              </tr>
              <tr>
                <td className={style.compareLabel}>display_matrix_type:</td>
                <td className={style.compareValue}>Dynamic AMOLED 2X Display</td>
                <td className={style.compareValue}>Super Retina XDR display</td>
              </tr>
              <tr>
                <td className={style.compareLabel}>display_resolution:</td>
                <td className={style.compareValue}>3120 x 1440</td>
                <td className={style.compareValue}>2556 x 1179</td>
              </tr>
              <tr>
                <td className={style.compareLabel}>screen_diagonal:</td>
                <td className={style.compareValue}>6.8</td>
                <td className={style.compareValue}>6.1</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};
