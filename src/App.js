import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = () => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const simulatedResponse = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text:
              "as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects. (Para 7)",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link:
              "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      };

      setResponse(simulatedResponse);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container">
      <h1>⚖ Lexi Legal Assistant</h1>

      <textarea
        rows="6"
        placeholder="Ask your legal question here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></textarea>

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>

      {response && (
        <div className="card">
          <h2>Answer</h2>
          <p>{response.answer}</p>

          <h3>Citation</h3>
          {response.citations.map((citation, index) => (
            <div key={index}>
              <p>"{citation.text}"</p>
              <p>
                <strong>Source: </strong>
                <a href={citation.link} target="_blank" rel="noopener noreferrer">
                  {citation.source}
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;