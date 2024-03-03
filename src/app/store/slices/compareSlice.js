import { createSlice } from "@reduxjs/toolkit";
import setCompareProduct from "../../helpers/setCompareProduct";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    data: JSON.parse(localStorage.getItem("compare"))?.data ?? [],
    selectedCategory: JSON.parse(localStorage.getItem("compare"))?.selectedCategory ?? null,
    canAddMore: (JSON.parse(localStorage.getItem("compare"))?.data ?? []).length != 2,
  },
  reducers: {
    toggleCompare: (state, action) => {
      const { data, selectedCategory } = state;
      const { _id, category } = action.payload;
      const id = _id;

      const productAlreadyAdded = data.findIndex((i) => i.id === id) >= 0; // Перевірка, чи товар вже додано

      if (!productAlreadyAdded) {
        if (state.canAddMore) {
          if (selectedCategory === null) {
            state.selectedCategory = category; // Якщо ще не вибрано категорію, обираємо категорію першого товару
          } else if (selectedCategory !== category) {
            alert("Товари мають належати до однієї категорії для порівняння!"); // Попередження, якщо товари належать до різних категорій
            return;
          }

          state.data = [...data, setCompareProduct(action.payload)]; // Додаємо новий товар для порівняння
          state.canAddMore = state.data.length < 2; // Оновлюємо можливість додати ще товар для порівняння
        } else {
          alert("Вже додано два товари для порівняння!"); // Попередження, якщо вже додано два товари
        }
      } else {
        state.data = data.filter((item) => item.id !== id); // Видаляємо товар, якщо він вже додано
        state.canAddMore = true; // Повертаємо можливість додати ще товар для порівняння
        if (state.data.length === 0) {
          state.selectedCategory = null; // Скидаємо вибрану категорію, якщо більше немає товарів для порівняння
        }
      }

      localStorage.setItem("compare", JSON.stringify(state)); // Оновлюємо дані в локальному сховищі
    },
  },
});

export const { toggleCompare } = compareSlice.actions;

export default compareSlice.reducer;
