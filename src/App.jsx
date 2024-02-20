import React from "react";
import "./index.css";

function App() {
  const someArray = ["abc", "def", "ghi", "jkl"];
  const [activeIndex, setActiveIndex] = React.useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <>
      <div className="ml-12 mt-12">
        <p className="text-2xl mb-8">Here you can toggle an item</p>
        {someArray.map((item, index) => (
          <div className="flex" key={index}>
            <p
              onClick={() => handleClick(index)}
              className={
                index === activeIndex
                  ? "bg-blue-500 text-white mb-4 w-32 cursor-pointer"
                  : "mb-4 cursor-pointer"
              }
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
