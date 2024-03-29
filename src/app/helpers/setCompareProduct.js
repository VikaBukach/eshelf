// Помічник для формування єдиного вигляду обєкта товару
export default function setCompareProduct(product = {}, selectColor = 0, selectCapacity = 0) {
  // відбираємо поточний колір з якого і будемо відбирати решту даних
  const colorData = product.colors[selectColor];
  return {
    id: product._id,
    title: product.model,
    specifications: product.specifications,
    category: product.category,
    color: colorData.color,
    image: colorData.images[0],
    capacity: colorData.products[selectCapacity].capacity,
    price: colorData.products[selectCapacity].price,
    discountPrice: colorData.products[selectCapacity].discount_price ?? 0,
  };
}
