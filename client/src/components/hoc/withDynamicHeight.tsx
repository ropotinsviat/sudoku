import React, { useState, useEffect, useRef } from "react";

function withDynamicHeight<P extends {}>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: P) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState<string>("auto");

    useEffect(() => {
      const updateHeight = () => {
        if (containerRef.current) {
          const { top } = containerRef.current.getBoundingClientRect();
          const height = Math.max(window.innerHeight - top, 300);
          setHeight(`${height}px`);
        }
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return (
      <div
        ref={containerRef}
        style={{
          height,
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="dynamic-height-container"
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withDynamicHeight;
