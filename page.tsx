"use client";

import { useState, useEffect } from "react";

interface Recommendation {
  id: number;
  name: string;
  description: string;
}

export default function Home() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const response = await fetch("http://localhost:3001/recommendations");
      const data = await response.json();
      setRecommendations(data);
    };
    fetchRecommendations();
  }, []);

  return (
    <main>
      <h1>Sistema de Recomendação</h1>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((recommendation) => (
            <li key={recommendation.id}>
              <strong>{recommendation.name}</strong>: {recommendation.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando recomendações...</p>
      )}
    </main>
  );
}