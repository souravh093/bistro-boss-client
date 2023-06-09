import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiousSecure";
import useAuth from "./useAuth";

export const useCart = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");

  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

// queryFn: async () => {
//   const response = await fetch(
//     `https://bistro-boss-server-neon-iota.vercel.app/carts?email=${user?.email}`, {
//       headers: {
//         authorization: `bearer ${token}`
//       }
//     }
//   );
//   return response.json();
// },
