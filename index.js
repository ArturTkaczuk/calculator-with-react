function App() {
  const [mathEquation, setMathEquation] = React.useState("");
  const [operationResult, setOperationResult] = React.useState(0);

  const setDisplay = (clickedButton) => {
    //repeated zero error handling
    if (mathEquation === "0" && clickedButton === "0") return;
    if (mathEquation === "0" && /[1-9]/.test(clickedButton)) {
      setMathEquation(clickedButton);
      return;
    }
    if (/0$/.test(mathEquation) && clickedButton === "0") {
      return;
    }
    if (/0$/.test(mathEquation) && /[1-9]/.test(clickedButton)) {
      setMathEquation(mathEquation.slice(0, -1) + clickedButton);
      return;
    }

    //repeated + - * / error handling
    if (/[-/*+]$/.test(mathEquation) && /[-/*+]/.test(clickedButton)) {
      setMathEquation(mathEquation.slice(0, -1) + clickedButton);
      return;
    }

    //repeated dot . error handling
    if (/[.]$/.test(mathEquation) && /[.]/.test(clickedButton)) return;

    //add zero before dot error handle ("0." instead of plain dot ".")
    if (mathEquation === "" && clickedButton === ".") {
      setMathEquation("0.");
      return;
    }
    if (/[-/*+]$/.test(mathEquation) && clickedButton === ".") {
      setMathEquation(mathEquation + "0.");
      return;
    }

    //add zero in beggining before chosen operator error handling ("0+" instead of "+")
    if (mathEquation === "" && /[-/*+]/.test(clickedButton)) {
      setMathEquation("0" + clickedButton);
      return;
    }

    if (/=$/.test(mathEquation)) {
      if (/[1-9]/.test(clickedButton)) {
        setMathEquation(clickedButton);
        return;
      }
      //add zero before dot error handle (again here)
      else if (clickedButton === ".") {
        setMathEquation("0.");
        return;
      } else {
        setMathEquation(operationResult + clickedButton);
        return;
      }
    }

    setMathEquation(mathEquation + clickedButton);
  };

  const calculate = () => {
    if (/=$/.test(mathEquation)) return;

    setOperationResult(eval(mathEquation));
    setMathEquation(mathEquation + "=");
  };

  const allClear = () => {
    setMathEquation("");
    setOperationResult(0);
  };

  return (
    <div id="app">
      <div id="display">
        <input
          className="formula"
          type="text"
          value={mathEquation}
          placeholder="0"
          disabled
        />
        <input
          className="total"
          type="text"
          value={operationResult}
          placeholder="0"
          disabled
        />
      </div>
      <div id="buttons">
        <div onClick={allClear} className="ac">
          AC
        </div>
        <div onClick={() => setDisplay("*")} className="multiply">
          x
        </div>
        <div onClick={() => setDisplay("/")} className="divide">
          /
        </div>
        <div onClick={() => setDisplay("+")} className="plus">
          +
        </div>
        <div onClick={() => setDisplay("-")} className="minus">
          -
        </div>
        <div onClick={calculate} className="equals">
          =
        </div>
        <div onClick={() => setDisplay(".")} className="comma">
          .
        </div>

        <div onClick={() => setDisplay("0")} className="zero">
          0
        </div>
        <div onClick={() => setDisplay("1")} className="one">
          1
        </div>
        <div onClick={() => setDisplay("2")} className="two">
          2
        </div>
        <div onClick={() => setDisplay("3")} className="three">
          3
        </div>
        <div onClick={() => setDisplay("4")} className="four">
          4
        </div>
        <div onClick={() => setDisplay("5")} className="five">
          5
        </div>
        <div onClick={() => setDisplay("6")} className="six">
          6
        </div>
        <div onClick={() => setDisplay("7")} className="seven">
          7
        </div>
        <div onClick={() => setDisplay("8")} className="eight">
          8
        </div>
        <div onClick={() => setDisplay("9")} className="nine">
          9
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
