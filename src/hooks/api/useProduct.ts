import { useQuery } from "@tanstack/react-query";
import api from "./api";

export const useProducts = (props?: any) => {
  return useQuery({
    queryKey: ["products", props],
    queryFn: async () => {
      const res = await api.get("/products", { params: props });
      return res.data; // Faqat backendning data qismini qaytaramiz
    },
  });
};

export const useOneProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await api.get(`/products/${id}`);
      return res.data;
    },
    enabled: !!id, // id bo‘lmasa so‘rov yuborilmaydi
  });
};
