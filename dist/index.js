var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mathEquation = _React$useState2[0],
      setMathEquation = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      operationResult = _React$useState4[0],
      setOperationResult = _React$useState4[1];

  var setDisplay = function setDisplay(clickedButton) {
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

  var calculate = function calculate() {
    if (/=$/.test(mathEquation)) return;

    setOperationResult(eval(mathEquation));
    setMathEquation(mathEquation + "=");
  };

  var allClear = function allClear() {
    setMathEquation("");
    setOperationResult(0);
  };

  return React.createElement(
    "div",
    { id: "app" },
    React.createElement(
      "div",
      { id: "display" },
      React.createElement("input", {
        className: "formula",
        type: "text",
        value: mathEquation,
        placeholder: "0",
        disabled: true
      }),
      React.createElement("input", {
        className: "total",
        type: "text",
        value: operationResult,
        placeholder: "0",
        disabled: true
      })
    ),
    React.createElement(
      "div",
      { id: "buttons" },
      React.createElement(
        "div",
        { onClick: allClear, className: "ac" },
        "AC"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("*");
          }, className: "multiply" },
        "x"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("/");
          }, className: "divide" },
        "/"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("+");
          }, className: "plus" },
        "+"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("-");
          }, className: "minus" },
        "-"
      ),
      React.createElement(
        "div",
        { onClick: calculate, className: "equals" },
        "="
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay(".");
          }, className: "comma" },
        "."
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("0");
          }, className: "zero" },
        "0"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("1");
          }, className: "one" },
        "1"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("2");
          }, className: "two" },
        "2"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("3");
          }, className: "three" },
        "3"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("4");
          }, className: "four" },
        "4"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("5");
          }, className: "five" },
        "5"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("6");
          }, className: "six" },
        "6"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("7");
          }, className: "seven" },
        "7"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("8");
          }, className: "eight" },
        "8"
      ),
      React.createElement(
        "div",
        { onClick: function onClick() {
            return setDisplay("9");
          }, className: "nine" },
        "9"
      )
    )
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));