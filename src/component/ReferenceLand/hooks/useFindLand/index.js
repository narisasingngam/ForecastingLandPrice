import { useCallback, useState } from "react";

const DEFAULT_CENTER = [13.82826268357157, 100.558089583016496];

export default function useFindland(features) {
  const [point, setPoint] = useState(DEFAULT_CENTER);
  const [landId, setLandId] = useState();

  const handleChangeInput = useCallback(
    (e) => {
      const id = parseInt(e.target.value);
      if (isNaN(id)) {
        alert("Please enter number value");
      } else {
        setLandId(id);
      }
    },
    [setLandId]
  );

  const handleOnKeyPress = useCallback(() => {
    features.map((reflot) => {
      if (reflot.properties.CHANOD_NO === landId) {
        setPoint([reflot.properties.y_point, reflot.properties.x_point]);
      }
    });
  }, [setPoint, landId, features]);

  const handleClickSearchBtn = useCallback(() => {
    features.map((reflot) => {
      if (reflot.properties.CHANOD_NO === landId) {
        setPoint([reflot.properties.y_point, reflot.properties.x_point]);
      }
    });
  }, [setPoint, landId, features]);

  return {
    handleChangeInput,
    handleOnKeyPress,
    handleClickSearchBtn,
    point,
    landId,
  };
}
