import Loading from "../common/loading/Loading";
import withDynamicHeight from "./withDynamicHeight";

const CenteredLoading = withDynamicHeight(Loading);

function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & { loading: boolean }> {
  return ({ loading, ...props }: P & { loading: boolean }) => {
    if (loading) return <CenteredLoading />;
    return <WrappedComponent {...(props as P)} />;
  };
}

export default withLoading;
