import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sparkles } from '@react-three/drei';

function makeHousingTexture() {
  const W = 1024, H = 512;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');

  ctx.fillStyle = '#e0ddd6';
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = '#c8c5be'; ctx.lineWidth = 1.2;
  for (let i = 0; i < 40; i++) {
    const x = (i / 40) * W;
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }

  // Hummingbird
  ctx.save();
  ctx.translate(W * 0.56, H * 0.18);
  ctx.scale(1.5, 1.5);

  ctx.save(); ctx.rotate(-0.3);
  ctx.fillStyle = '#47b8d4';
  ctx.beginPath(); ctx.ellipse(-10, -2, 18, 7, 0.3, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  ctx.fillStyle = '#2e8f5a';
  ctx.beginPath(); ctx.ellipse(0, 6, 7, 13, 0.1, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = '#d4403a';
  ctx.beginPath(); ctx.ellipse(2, 2, 4, 5, 0.2, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = '#1f6e42';
  ctx.beginPath(); ctx.arc(4, -8, 6, 0, Math.PI * 2); ctx.fill();

  ctx.strokeStyle = '#1a1a1a'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(9, -10); ctx.lineTo(24, -17); ctx.stroke();

  ctx.fillStyle = '#111';
  ctx.beginPath(); ctx.arc(7, -10, 1.6, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.arc(7.5, -10.5, 0.5, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = '#1a6e8a';
  ctx.beginPath();
  ctx.moveTo(-3, 16); ctx.lineTo(-14, 30); ctx.lineTo(-4, 22);
  ctx.lineTo(2, 32); ctx.lineTo(6, 18); ctx.closePath(); ctx.fill();
  ctx.restore();

  const tx = W * 0.54, ty = H * 0.52;
  ctx.fillStyle = '#1a1a1a';
  ctx.font = 'bold 34px "Segoe UI",Arial,sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('HB-6206', tx, ty);
  ctx.font = 'bold 31px "Segoe UI",Arial,sans-serif';
  ctx.fillText('KV 300', tx, ty + 38);
  ctx.fillStyle = '#555';
  ctx.font = '15px "Segoe UI",Arial,sans-serif';
  ctx.fillText('MADE IN INDIA', tx, ty + 62);

  return new THREE.CanvasTexture(cv);
}

export default function Motor3D({ scrollY = 0 }) {
  const motorRef   = useRef();
  const rotorRef   = useRef();
  const statorRef  = useRef();
  const housingRef = useRef();
  const spacerRef  = useRef();
  const baseRef    = useRef();
  const bearingRef = useRef();
  const screwRef   = useRef();

  const mats = useMemo(() => ({
    gunmetal: new THREE.MeshStandardMaterial({ color: 0x282828, metalness: 0.95, roughness: 0.12 }),
    silver:   new THREE.MeshStandardMaterial({ color: 0xd2d2d2, metalness: 0.98, roughness: 0.07 }),
    copper:   new THREE.MeshStandardMaterial({ color: 0xb44a12, metalness: 0.55, roughness: 0.42 }),
    green:    new THREE.MeshStandardMaterial({ color: 0x22aa44, metalness: 0.10, roughness: 0.60 }),
    white:    new THREE.MeshStandardMaterial({ color: 0xe0ddd6, metalness: 0.05, roughness: 0.38 }),
    base:     new THREE.MeshStandardMaterial({ color: 0x363636, metalness: 0.88, roughness: 0.25 }),
    spacer:   new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.75, roughness: 0.30 }),
    magAlt:   new THREE.MeshStandardMaterial({ color: 0x505050, metalness: 0.85, roughness: 0.20 }),
    housing:  new THREE.MeshStandardMaterial({ map: makeHousingTexture(), metalness: 0.05, roughness: 0.38 }),
  }), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smoothly calculate explosion: peaks during technical highlights, 
    // and assembles back ('mixed') as we move to spec tables.
    // ex = 0 (Hero, assembled) -> 2.5 (Tech/Prods, exploded) -> 0 (Specs, mixed/assembled)
    let ex = 0;
    if (scrollY < 800) {
      ex = (scrollY / 800) * 2.5;
    } else if (scrollY < 2000) {
      ex = 2.5;
    } else {
      // Re-assemble as we go deeper into specs
      ex = Math.max(0, 2.5 - ((scrollY - 2000) / 800) * 2.5);
    }

    const hover = Math.sin(time * 0.8) * 0.05;

    if (motorRef.current) {
      motorRef.current.rotation.y = time * 0.15 + scrollY * 0.0015;
      motorRef.current.position.y = Math.sin(time * 0.5) * 0.1 - 0.3;
    }

    // Apply explosion and a subtle 'breathing' effect to parts ('mixed together')
    const mix = Math.sin(time * 2 + 1) * 0.02 * (1 - ex/2.5);
    
    if (screwRef.current)   screwRef.current.position.y   = -ex * 4.6 + hover;
    if (bearingRef.current) bearingRef.current.position.y = -ex * 3.4 + hover * 0.8;
    if (baseRef.current)    baseRef.current.position.y    = -ex * 2.2 + hover * 0.6;
    if (spacerRef.current)  spacerRef.current.position.y  = -ex * 1.0 + hover * 1.2;
    if (housingRef.current) housingRef.current.position.y =  ex * 0.5 + hover * 1.5;
    if (statorRef.current)  statorRef.current.position.y  =  ex * 1.9 + hover * 0.7;
    if (rotorRef.current)   rotorRef.current.position.y   =  ex * 3.6 + hover * 1.1;
  });

  return (
    <>
      <ambientLight intensity={0.38} />
      <directionalLight position={[4, 8, 5]}  intensity={2.4} color="#ffffff" />
      <pointLight      position={[-5, -3, 4]} intensity={1.3} color="#88ccff" distance={30} />
      <pointLight      position={[0, -6, 2]}  intensity={0.9} color="#00d4a0" distance={20} />

      <group ref={motorRef}>

        {/* 1. SHAFT SCREW */}
        <group ref={screwRef}>
          <mesh position={[0, -3.3, 0]} material={mats.silver}>
            <cylinderGeometry args={[0.07, 0.065, 0.38, 16]} />
          </mesh>
          <mesh position={[0, -3.12, 0]} material={mats.silver}>
            <cylinderGeometry args={[0.16, 0.16, 0.10, 16]} />
          </mesh>
          <mesh position={[0, -3.07, 0]} material={mats.base}>
            <boxGeometry args={[0.28, 0.035, 0.035]} />
          </mesh>
          <mesh position={[0, -3.07, 0]} material={mats.base}>
            <boxGeometry args={[0.035, 0.035, 0.28]} />
          </mesh>
        </group>

        {/* 2. BEARING */}
        <group ref={bearingRef}>
          <mesh position={[0, -2.7, 0]} material={mats.silver}>
            <cylinderGeometry args={[0.27, 0.27, 0.13, 32]} />
          </mesh>
          <mesh position={[0, -2.7, 0]} material={mats.base}>
            <cylinderGeometry args={[0.13, 0.13, 0.15, 24]} />
          </mesh>
        </group>

        {/* 3. BASE PLATE */}
        <group ref={baseRef}>
          <mesh position={[0, -2.00, 0]} material={mats.base}>
            <cylinderGeometry args={[1.38, 1.38, 0.14, 48]} />
          </mesh>
          <mesh position={[0, -2.14, 0]} material={mats.base}>
            <cylinderGeometry args={[1.10, 1.10, 0.16, 48]} />
          </mesh>
          <mesh position={[0, -2.00, 0]} material={mats.spacer}>
            <cylinderGeometry args={[0.20, 0.20, 0.32, 24]} />
          </mesh>
        </group>

        {/* 4. SHAFT SPACER */}
        <group ref={spacerRef}>
          <mesh position={[0, -1.25, 0]} material={mats.spacer}>
            <cylinderGeometry args={[0.18, 0.18, 0.28, 24]} />
          </mesh>
        </group>

        {/* 5. HOUSING RING */}
        <group ref={housingRef}>
          <mesh position={[0, -0.6, 0]} material={mats.housing}>
            <cylinderGeometry args={[1.38, 1.38, 0.62, 64]} />
          </mesh>
          {Array.from({ length: 36 }, (_, i) => {
            const a = (i / 36) * Math.PI * 2;
            return (
              <mesh
                key={i}
                position={[Math.cos(a) * 1.41, -0.6, Math.sin(a) * 1.41]}
                rotation={[0, -a, 0]}
                material={mats.white}
              >
                <boxGeometry args={[0.06, 0.60, 0.06]} />
              </mesh>
            );
          })}
          {[-0.28, -0.92].map((y, i) => (
            <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} material={mats.white}>
              <torusGeometry args={[1.38, 0.055, 8, 64]} />
            </mesh>
          ))}
        </group>

        {/* 6. STATOR */}
        <group ref={statorRef}>
          <mesh position={[0, -0.2, 0]} material={mats.silver}>
            <cylinderGeometry args={[0.92, 0.92, 0.44, 48, 1, true]} />
          </mesh>
          <mesh position={[0, -0.2, 0]} material={mats.silver}>
            <cylinderGeometry args={[0.28, 0.28, 0.44, 32]} />
          </mesh>
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <group key={i} rotation={[0, a, 0]}>
                <mesh position={[0.62, -0.2, 0]} material={mats.silver}>
                  <boxGeometry args={[0.55, 0.40, 0.22]} />
                </mesh>
                <mesh position={[0.90, -0.2, 0]} material={mats.silver}>
                  <boxGeometry args={[0.12, 0.40, 0.42]} />
                </mesh>
                <mesh position={[0.60, -0.2, 0]} material={mats.copper}>
                  <torusGeometry args={[0.16, 0.065, 8, 4]} />
                </mesh>
                <mesh position={[0.60, 0.01, 0]} rotation={[Math.PI / 2, 0, 0]} material={mats.green}>
                  <torusGeometry args={[0.20, 0.025, 6, 20]} />
                </mesh>
                <mesh position={[0.60, -0.41, 0]} rotation={[Math.PI / 2, 0, 0]} material={mats.green}>
                  <torusGeometry args={[0.20, 0.025, 6, 20]} />
                </mesh>
              </group>
            );
          })}
        </group>

        {/* 7. ROTOR BELL */}
        <group ref={rotorRef}>
          <mesh position={[0, 0.18, 0]} material={mats.gunmetal}>
            <cylinderGeometry args={[1.38, 1.38, 0.22, 64]} />
          </mesh>
          <mesh position={[0, 0.12, 0]} material={mats.gunmetal}>
            <cylinderGeometry args={[0.28, 0.28, 0.38, 32]} />
          </mesh>
          <mesh position={[0, 0.70, 0]} material={mats.silver}>
            <cylinderGeometry args={[0.10, 0.10, 1.10, 24]} />
          </mesh>
          <mesh position={[0, -0.28, 0]} material={mats.gunmetal}>
            <cylinderGeometry args={[1.38, 1.38, 0.55, 64, 1, true]} />
          </mesh>
          <mesh position={[0, -0.55, 0]} rotation={[Math.PI / 2, 0, 0]} material={mats.gunmetal}>
            <torusGeometry args={[1.38, 0.06, 8, 64]} />
          </mesh>
          {Array.from({ length: 14 }, (_, i) => {
            const a = (i / 14) * Math.PI * 2;
            return (
              <mesh
                key={`mag-${i}`}
                position={[Math.cos(a) * 1.28, -0.28, Math.sin(a) * 1.28]}
                rotation={[0, -a, 0]}
                material={i % 2 === 0 ? mats.gunmetal : mats.magAlt}
              >
                <boxGeometry args={[0.18, 0.42, 0.30]} />
              </mesh>
            );
          })}
          {Array.from({ length: 24 }, (_, i) => {
            const a = (i / 24) * Math.PI * 2;
            return (
              <mesh
                key={`fin-${i}`}
                position={[Math.cos(a) * 1.45, 0.0, Math.sin(a) * 1.45]}
                rotation={[0, -a, 0]}
                material={mats.gunmetal}
              >
                <boxGeometry args={[0.13, 0.55, 0.09]} />
              </mesh>
            );
          })}
        </group>

      </group>

      <Sparkles count={40} scale={7} size={1.8} color="#00c896" opacity={0.22} />
    </>
  );
}