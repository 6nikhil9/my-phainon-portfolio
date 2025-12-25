"use client";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += 0.005;
      ring1Ref.current.rotation.y += 0.005;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= 0.003;
      ring2Ref.current.rotation.y += 0.002;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += 0.002;
      ring3Ref.current.rotation.y -= 0.003;
    }
  });

  return (
    <>
      <Torus ref={ring1Ref} args={[3.5, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={2} toneMapped={false} />
      </Torus>
      <Torus ref={ring2Ref} args={[3.8, 0.08, 16, 100]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#00F0FF" emissive="#00F0FF" emissiveIntensity={3} toneMapped={false} />
      </Torus>
       <Torus ref={ring3Ref} args={[4.2, 0.03, 16, 100]} rotation={[Math.PI / 2, -Math.PI / 4, 0]}>
        <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={1.5} toneMapped={false} />
      </Torus>
    </>
  );
}
