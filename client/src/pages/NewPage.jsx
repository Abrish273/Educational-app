import React, { useState } from "react";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [negprompts, setNegprompts] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleNegpromptChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setNegprompts(selectedOptions);
  };

  const handleGenerateImage = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/generate_image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, negprompts }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.result);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("An error occurred while processing the request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Image Generation AI</h1>
      <div>
        <label>Prompt:</label>
        <input type="text" value={prompt} onChange={handlePromptChange} />
      </div>
      <div>
        <label>Negative Prompts:</label>
        <select multiple value={negprompts} onChange={handleNegpromptChange}>
          <option value="deformed">Deformed</option>
          <option value="bad_anatomy">Bad Anatomy</option>
          <option value="disfigured">Disfigured</option>
          <option value="poorly_drawn_face">Poorly Drawn Face</option>
        </select>
      </div>
      <button onClick={handleGenerateImage} disabled={loading}>
        Generate Image
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {result.length > 0 && (
        <div>
          <h2>Generated Images:</h2>
          <div>
            {result.map((imageUrl, index) => (
              <div key={index}>
                <img src={imageUrl} alt={`Generated Image ${index}`} />
                <a href={imageUrl} download={`Generated_Image_${index}.png`}>
                  Download Image
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
