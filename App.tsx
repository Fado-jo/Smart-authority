import React, { useState } from "react";

const models = [
  {
    id: "media",
    name: "السلطة الإعلامية الذكية",
    description: [
      "كشف المعلومات المضللة.",
      "تحليل الصور والمقالات ومطابقتها مع الحقائق.",
      "إعداد تقارير معرفية محايدة."
    ]
  },
  {
    id: "justice",
    name: "العدالة الذكية",
    description: [
      "تحليل الوثائق القانونية ومقارنتها بالأحكام السابقة.",
      "تقديم توصيات قانونية للقضاة أو المحامين.",
      "تحليل الأدلة والصور في السياق القانوني."
    ]
  }
];

function App() {
  const [selected, setSelected] = useState("media");

  const model = models.find((m) => m.id === selected);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", direction: "rtl", textAlign: "right" }}>
      <h1>{model?.name}</h1>
      <ul>
        {model?.description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div style={{ marginTop: "1rem" }}>
        <textarea placeholder="أدخل النص للتحليل..." style={{ width: "100%", height: "100px" }} />
        <br />
        <button style={{ marginTop: "0.5rem" }}>تحليل بالذكاء الاصطناعي</button>
      </div>
      <div style={{ marginTop: "2rem" }}>
        {models.map((m) => (
          <button key={m.id} onClick={() => setSelected(m.id)} style={{ margin: "0 0.5rem" }}>
            {m.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;