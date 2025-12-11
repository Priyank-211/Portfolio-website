import { Html } from "@react-three/drei";
import { useProgress } from "@react-three/drei";

const Loader1 = () => {
  const { progress } = useProgress();
  return (
    <Html center className="text-xl font-normal text-center">
      {progress}% Loaded
    </Html>
  );
};
export default Loader1;
