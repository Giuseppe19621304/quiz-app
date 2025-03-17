import { useState } from "react";
import questions from "./data/questions";

export default function App() {
  console.log("Domande caricate:", questions); // ✅ Log per verificare i dati
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    // Se l'indice della risposta cliccata è quello corretto
    if (index === questions[currentQuestion].answer) {
      setScore(score + 10);
    }

    // Passa alla domanda successiva
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Se non ci sono più domande, mostra il punteggio finale
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      {showScore ? (
        <div className="text-center text-xl font-bold">
          🎉 Quiz finito! Punteggio: {score} punti
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
            }}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Riprova
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">
            {questions[currentQuestion].question}
          </h2>
          <div className="mt-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="block w-full text-left px-4 py-2 my-1 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Domanda {currentQuestion + 1} di {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}
