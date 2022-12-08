import { useEffect, useState } from "react";
import styled from "styled-components";
import { AppProviders } from "./context";
import { Desktop } from "./desktop";
import { Mobile } from "./mobile";
import { ResetDialog } from "./reset-dialog";

interface ZoomWrapper {
  zoom: number;
}

const MyZoomWrapper = styled.div<ZoomWrapper>`
  zoom: ${(props) => props.zoom};
`;

function App() {
  const [layout, setLayout] = useState<Number | undefined>(undefined);

  useEffect(() => {
    let oldLayout: Number | undefined = undefined;
    const handleWindowResize = () => {
      const width = window.innerWidth;
      let newLayout: Number;
      if (width < 500 && window.screen.availWidth < 500) {
        newLayout = 0;
      } else if (width < 1278) {
        newLayout = 1;
      } else {
        newLayout = 2;
      }
      if (newLayout !== oldLayout) {
        setLayout(newLayout);
      }
      oldLayout = newLayout;
    };
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  if (layout === undefined) {
    return <></>;
  } else if (layout === 0) {
    return (
      <AppProviders>
        <MyZoomWrapper zoom={(window.screen.availWidth - 3) / 500}>
          <Mobile />
          <ResetDialog layout={layout} />
        </MyZoomWrapper>
      </AppProviders>
    );
  } else if (layout === 1) {
    return (
      <AppProviders>
        <Mobile />
        <ResetDialog layout={layout} />
      </AppProviders>
    );
  } else {
    return (
      <AppProviders>
        <Desktop />
        <ResetDialog layout={layout} />
      </AppProviders>
    );
  }
}

export default App;
