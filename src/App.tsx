import React, { useState } from "react";
import GlobalStyles from "./Styles/GlobalStyles";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import {
  Container,
  BodyCalculator,
  Numbers,
  Simbols,
  Calculer,
} from "./AppStyles";

const App: React.FC = () => {
  const [valorTela, setValorTela] = useState("");
  const [resultado, setResultado] = useState("0");
  const [acumulador, setAcumulador] = useState(0);
  const [operado, setOperado] = useState(false);

  //Funçoes
  const addDigitoTela = (d: string) => {
    if ((d === "+" || d === "-" || d === "*" || d === "/") && operado) {
      console.log(acumulador)
      setOperado(false);
      setValorTela(resultado + d);
      return;
    }
    if (operado) {
      setValorTela(d);
      setOperado(false);
      return;
    }
    const valorDigitadoTela = valorTela + d;
    setValorTela(valorDigitadoTela);
  };

  const limpaMemoria = () => {
    setOperado(false);
    setValorTela("");
    setAcumulador(0);
    setResultado("0");
    return;
  };

  const operacao = (operacao: string) => {
    if (operacao === "bs") {
      let vtela = valorTela;
      vtela = vtela.substring(0, vtela.length - 1);
      setValorTela(vtela);
      setOperado(false);
      return;
    }
    try {
      const r = eval(valorTela);
      setAcumulador(r);
      setResultado(r);
      setOperado(true);
    } catch {
      setResultado("Error");
    }
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Calculator</h1>
        <BodyCalculator>
          <Display valor={valorTela} res={resultado} />
          <Calculer>
            <Numbers>
              <div className="divs">
                <Buttons
                  label={"AC"}
                  color=""
                  textcolor=""
                  onClick={limpaMemoria}
                />
              </div>
              <div className="divs">
                <Buttons
                  label={1}
                  color=""
                  textcolor=""
                  onClick={() => addDigitoTela("1")}
                />
                <Buttons label={2} color="" textcolor="" onClick={() => addDigitoTela("2")} />
                <Buttons label={3} color="" textcolor="" onClick={() => addDigitoTela("3")} />
              </div>
              <div className="divs">
                <Buttons label={4} color="" textcolor="" onClick={() => addDigitoTela("4")} />
                <Buttons label={5} color="" textcolor="" onClick={() => addDigitoTela("5")} />
                <Buttons label={6} color="" textcolor="" onClick={() => addDigitoTela("6")} />
              </div>
              <div className="divs">
                <Buttons label={7} color="" textcolor="" onClick={() => addDigitoTela("7")} />
                <Buttons label={8} color="" textcolor="" onClick={() => addDigitoTela("8")} />
                <Buttons label={9} color="" textcolor="" onClick={() => addDigitoTela("9")} />
              </div>
              <div className="divs">
                <Buttons label={0} color="" textcolor="" onClick={() => addDigitoTela("0")} />
                <Buttons label={"."} color="" textcolor="" onClick={() => addDigitoTela(".")} />
                <Buttons
                  label={"Apagar"}
                  color=""
                  textcolor=""
                  onClick={() => operacao("bs")}
                />
              </div>
            </Numbers>
            <Simbols>
              <div className="divs_simbols">
                <Buttons
                  label={"+"}
                  color="#0f00fa"
                  textcolor="#fff"
                  onClick={() => addDigitoTela("+")}
                />
                <Buttons
                  label={"-"}
                  color="#0f00fa"
                  textcolor="#fff"
                  onClick={() => addDigitoTela("-")}
                />
                <Buttons
                  label={"/"}
                  color="#0f00fa"
                  textcolor="#fff"
                  onClick={() => addDigitoTela("/")}
                />
                <Buttons
                  label={"*"}
                  color="#0f00fa"
                  textcolor="#fff"
                  onClick={() => addDigitoTela("*")}
                />
                <Buttons
                  label={"="}
                  color="#0f00fa"
                  textcolor="#fff"
                  onClick={() => operacao("=")}
                />
              </div>
            </Simbols>
          </Calculer>
        </BodyCalculator>
      </Container>
    </>
  );
};

export default App;
