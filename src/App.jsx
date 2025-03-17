import { useState } from "react";
import questions from "./data/questions";

export default function App() {
  console.log("Domande caricate:", JSON.stringify(questions, null, 2)); // ✅ Log per verificare i dati
 console.log("Domanda attuale:", questions[currentQuestion]);
console.log("Opzioni disponibili:", questions[currentQuestion]?.optionA, questions[currentQuestion]?.optionB, questions[currentQuestion]?.optionC);
console.log("Domanda attuale:", questions[currentQuestion]);
console.log("Opzioni:", questions[currentQuestion]?.optionA, questions[currentQuestion]?.optionB, questions[currentQuestion]?.optionC);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
  if (!questions[currentQuestion]) {
    console.error("Errore: domanda non disponibile!");
    return;
  }

  console.log("Risposta selezionata:", selectedOption);
  console.log("Risposta corretta:", questions[currentQuestion]?.correctAnswer);

  if (questions[currentQuestion]?.correctAnswer.trim().toUpperCase() === selectedOption.trim().toUpperCase()) {
    setScore((prevScore) => prevScore + 10);
  }

  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowScore(true);
  }
};
    const nextQuestion = currentQuestion + 1;
    console.log("currentQuestion:", currentQuestion);
console.log("Total questions:", questions.length);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
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
            {questions.length > 0 && questions[currentQuestion] ? questions[currentQuestion].question : "Caricamento..."}
          </h2>
          <div className="mt-4">
          {questions.length > 0 && questions[currentQuestion] ? (
  <>
    <button onClick={() => handleAnswer("A")} className="block w-full text-left px-4 py-2 my-1 bg-gray-200 rounded-lg hover:bg-gray-300">
      {questions[currentQuestion]?.optionA || "Opzione A non disponibile"}
    </button>
    <button onClick={() => handleAnswer("B")} className="block w-full text-left px-4 py-2 my-1 bg-gray-200 rounded-lg hover:bg-gray-300">
      {questions[currentQuestion]?.optionB || "Opzione B non disponibile"}
    </button>
    <button onClick={() => handleAnswer("C")} className="block w-full text-left px-4 py-2 my-1 bg-gray-200 rounded-lg hover:bg-gray-300">
      {questions[currentQuestion]?.optionC || "Opzione C non disponibile"}
    </button>
  </>
) : (
  <p>Caricamento domande...</p>
)}
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Domanda {currentQuestion + 1} di {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}
