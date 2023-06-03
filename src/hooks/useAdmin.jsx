import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiousSecure";

export const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();


  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
