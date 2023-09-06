/* eslint-disable no-unused-vars */
import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import TextInput from "./components/TextInput";
import ImageCanvas from "./components/ImageCanvas";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(Date.now());
  const [message, setMessage] = useState("Ad gününüz mübarək!")

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     setImageSrc(event.target.result);
  //     console.log(event.target.result);
  //   };

  //   reader.readAsDataURL(file);
  // };

  const writeTextToImage = (
    ctx,
    text,
    x,
    y,
    fontSize,
    maxWidth,
    lineHeight,
    textAlign,
    fontType
  ) => {
    x = x + maxWidth;

    ctx.font = `${fontSize}px ${fontType === 1 ? 'Beau Rivage' : 'Nunito Sans'}`;
    ctx.fillStyle = "white";

    if (text.length > 20) {
      ctx.textAlign = "center";
      x = x - x / 3;
    } else {
      ctx.textAlign = textAlign || "right";
    }

    let words = text.split(" ");
    let line = "";

    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + " ";
      let metrics = ctx.measureText(testLine);
      let testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);

    return y;
  };

  // App.jsx
  // ... (rest of the imports and code)
  return (
    <div className="body-container">
      <div className="app-container">
        <h1 className="app-title">
          <strong>Optima</strong> Birthday-Post Maker
        </h1>
        <div className="row">
          <TextInput
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Full Name"
          />
          <TextInput
            className="input-field"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
            <TextInput
            className="input-field"
            type="text"
            disabled
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Message"
          />
        </div>
        <ImageCanvas
          className="canvas-container canvas-preview"
          name={name}
          message={message}
          date={date}
          writeTextToImage={writeTextToImage}
        />
      </div>
    </div>
  );
  // ...
};

export default App;
