import { useRouter } from "next/router";
import { useEffect } from "react";

export const useGenreRouter = () => {
  const router = useRouter();

  useEffect(() => {
    // Ensure the router is available and is mounted
    if (router.asPath !== router.route) {
      // Do any other initialization logic here
    }
  }, [router]);

  return router;
};
