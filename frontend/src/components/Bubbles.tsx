import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Animação de flutuação das bolhas
const float = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-100px) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }
`;

// Estilo da bolha
const Bubble = styled.div<{ left: number; size: number; duration: number; delay: number }>`
  position: fixed;
  bottom: -100px;
  left: ${({ left }) => left}%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: rgba(173, 216, 230, 0.6);
  border-radius: 50%;
  animation: ${float} ${({ duration }) => duration}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0.5;
  filter: blur(2px);
  box-shadow: 0 0 10px rgba(173, 216, 230, 0.7);
`;

const BubbleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3; /* Teste com z-index maior */
`;


// Componente para renderizar bolhas flutuantes
const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState<number[]>([]);

  useEffect(() => {
    // Gerar bolhas aleatórias
    const bubbleCount = 20;
    const newBubbles = Array.from({ length: bubbleCount }, (_, i) => i);
    setBubbles(newBubbles);

    console.log("Bubbles generated:", newBubbles); // Verificar se as bolhas estão sendo geradas
  }, []);

  return (
    <BubbleContainer>
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble}
          left={Math.random() * 100} // Posição horizontal aleatória
          size={Math.random() * 50 + 20} // Tamanho entre 20 e 70px
          duration={Math.random() * 5 + 4} // Duração entre 4 e 9 segundos
          delay={Math.random() * 3} // Atraso para cada bolha
        />
      ))}
    </BubbleContainer>
  );
};

export default FloatingBubbles