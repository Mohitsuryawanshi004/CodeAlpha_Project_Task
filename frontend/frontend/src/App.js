import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = async () => {
    if (!url) {
      alert("URL dalo");
      return;
    }

    const res = await fetch("http://localhost:3000/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ originalUrl: url })
    });

    const data = await res.json();
    setShortUrl(data.shortUrl);
  };

  return (
    <div className="container">
      <h1>Simple URL Shortener</h1>

      <input
        type="text"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={shortenUrl}>Shorten</button>

      {shortUrl && (
        <p>
          Short URL: <br />
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
}

export default App;
