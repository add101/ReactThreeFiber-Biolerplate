import React, { useRef } from 'react'; // Import React and useRef hook from 'react' library
import { useFrame } from '@react-three/fiber';  // Import Canvas and useFrame from '@react-three/fiber' for 3D rendering
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls and Box components from '@react-three/drei' library


// RotatingBox is a functional component that returns a mesh with rotating animation
const RotatingBox = () => {
  const meshRef = useRef(); // Create a ref to access the mesh element directly

  // Rotate the box on each frame (useFrame is a hook that runs on every frame)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // Rotate around the X-axis
      meshRef.current.rotation.y += 0.01; // Rotate around the Y-axis
    }
  });

    // Return a mesh with boxGeometry and a standard material
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

// App component sets up the 3D scene and lights
const App = () => {
  return (
    <>
      <ambientLight intensity={0.5} /> 
      <pointLight position={[2, 2, 2]} intensity={10} />
      <directionalLight position={[-10, 10, 5]} intensity={0.5} /> 
      <RotatingBox />
      <OrbitControls /> 
    </>
   
  );
};

export default App;
