import { useState } from "react";

interface AsyncState {
  loading: boolean;
  error: string | null;
}

export function useAsync<T>(asyncFunction: () => Promise<T>) {
  const [state, setState] = useState<AsyncState>({
    loading: false,
    error: null,
  });

  const execute = async () => {
    setState({ loading: true, error: null });

    try {
      await asyncFunction();
    } catch (err: any) {
      console.error("Async Error:", err);
      setState({
        loading: false,
        error: err.message || "An unexpected error occurred.",
      });
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  return { ...state, execute };
}
