import { useEffect, useState } from "react";
function useImageLoader(picture) {
  const [Image, setImage] = useState(null);
  useEffect(() => {
    switch (picture) {
      case 1:
        import("../../../assets/Photos/Logos/Logo1.png")
          .then((module) => {
            setImage(module.default);
          })
          .catch((error) => {
            console.error("Error loading image:", error);
          });
        break;
      case 2:
        import("../../../assets/Photos/Logos/Logo2.png")
          .then((module) => {
            setImage(module.default);
          })
          .catch((error) => {
            console.error("Error loading image:", error);
          });
        break;
      case 3:
        import("../../../assets/Photos/Logos/Logo3.png")
          .then((module) => {
            setImage(module.default);
          })
          .catch((error) => {
            console.error("Error loading image:", error);
          });
        break;
      // Add more cases as needed
      default:
        break;
    }
  }, [picture]);

  return { Image, setImage };
}
export default useImageLoader;
