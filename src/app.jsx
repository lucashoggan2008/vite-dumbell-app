import {PlateArangement, WeightPicker} from "./components.jsx";
import { useState } from "preact/hooks";

export const App = () => {

  const [weightPicked, setWeightPicked] = useState([5, [], []])

  return (
    <>
    <header>
      <h1>Ajustable Weight Calculator</h1>

    </header>
    <main>
      <WeightPicker onWeightChange={setWeightPicked} />
      <PlateArangement weight_arr={weightPicked} />
    </main>
    </>
  )
}

 