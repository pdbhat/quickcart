import { API_ENDPOINTS } from '@/constants/apiEndpoints';
import type { Product, ProductsResponse } from '@/types/product';

import axiosInstance from './axiosInstance';

export const productService = {
  async getProducts(): Promise<Product[]> {
    try {
      const response = await axiosInstance.get<ProductsResponse>(API_ENDPOINTS.PRODUCTS);

      return response.data.products;
    } catch (error: unknown) {
      console.error('Failed to fetch products:', error);
      throw error;
    }
  },

  async getProductById(id: number): Promise<Product> {
    try {
      const response = await axiosInstance.get<Product>(API_ENDPOINTS.PRODUCT_DETAILS(id));

      return response.data;
    } catch (error: unknown) {
      console.error(`Failed to fetch product with id ${id}:`, error);
      throw error;
    }
  },
};
