// src/data/products/precioContado.js
// ======================================================
// PRECIO AL CONTADO
// - El precio "price" es el precio de lista (incluye crédito comercial).
// - Productos importados (láminas): 8% de descuento al contado (cashDiscount).
// - Productos de compra local: se indica "cashPrice" directo en el producto
//   (costo × 1.25 como máximo).
// ======================================================

export function cashPriceFor(item, listPrice) {
  if (!item) return null;
  if (typeof item.cashPrice === "number") return item.cashPrice;
  if (item.cashDiscount && typeof listPrice === "number" && listPrice > 0) {
    return Math.round(listPrice * (1 - item.cashDiscount));
  }
  return null;
}
