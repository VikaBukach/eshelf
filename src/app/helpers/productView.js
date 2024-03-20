export const addRevised = (product) => {
  // Отримуємо попередній переглянутий продукт з локального сховища
  const prevRevised = JSON.parse(localStorage.getItem("revised")) ?? [];

  // Перевіряємо, чи існує товар з таким ідентифікатором у локальному сховищі
  const index = prevRevised.findIndex((p) => p === product._id);

  // Якщо товар вже є у списку
  if (index !== -1) {
    // Видаляємо його зі списку
    prevRevised.splice(index, 1);
  }

  // Додаємо товар на початок списку
  prevRevised.unshift(product._id);

  // Зберігаємо оновлений список у локальному сховищі
  localStorage.setItem("revised", JSON.stringify(prevRevised));
};
