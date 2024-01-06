import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: data => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
    onError: err => {
      throw new Error(err.message);
    },
  });

  return { signup, isLoading };
}
