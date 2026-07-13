export const API_ENDPOINTS = Object.freeze({
  PRODUCTS: '/products',
  PRODUCT_DETAILS: (id: number): string => `/products/${id}`,
} as const);
