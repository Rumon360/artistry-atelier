import { ReactNode, useEffect, useState } from "react";
import { MousePositionProvider } from "../context/mouse-provider-context";
import Loader from "./loader";
import LenisWrapper from "./lenis-wrapper";

type Props = { children: ReactNode };

function Layout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMediaLoad = () => {
      const images = Array.from(document.images);
      const videos = Array.from(document.querySelectorAll("video"));

      const mediaPromises: Promise<void>[] = [
        ...images.map((img) => {
          return new Promise<void>((resolve) => {
            if (img.complete) {
              resolve();
            } else {
              img.addEventListener("load", () => resolve());
              img.addEventListener("error", () => resolve());
            }
          });
        }),
        ...videos.map((video) => {
          return new Promise<void>((resolve) => {
            if (video.readyState === 4) {
              resolve();
            } else {
              video.addEventListener("loadeddata", () => resolve());
              video.addEventListener("error", () => resolve());
            }
          });
        }),
      ];

      Promise.all(mediaPromises).then(() => {
        setIsLoading(false);
      });
    };

    handleMediaLoad();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-full w-full relative">
          <LenisWrapper>
            <MousePositionProvider>{children}</MousePositionProvider>
          </LenisWrapper>
        </div>
      )}
    </>
  );
}

export default Layout;
