import { useState } from "react";

interface AsyncState {
  loading: boolean;
  error: string | null;
}

export function useAsync<T, Args extends any[]>(
  asyncFunction: (...args: Args) => Promise<T>
) {
  const [state, setState] = useState<AsyncState>({
    loading: false,
    error: null,
  });

  const execute = async (...args: Args) => {
    setState({ loading: true, error: null });

    try {
      await asyncFunction(...args);
    } catch (err: any) {
      console.error("Async Error:", err);
      setState({
        loading: false,
        error: err.message || "An unexpected error occurred.",
      });
    } finally {
      setState({ loading: false, error: null });
    }
  };

  return { ...state, execute };
}
