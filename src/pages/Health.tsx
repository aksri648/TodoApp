import { ReactElement, useEffect } from "react";

const Health = (): ReactElement => {
  useEffect(() => {
    document.title = "Health Check";
  }, []);

  return (
    <pre style={{ margin: 16, fontFamily: "monospace" }}>
      {JSON.stringify({ status: "ok" }, null, 2)}
    </pre>
  );
};

export default Health;
