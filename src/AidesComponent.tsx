import AIDES from "./Aides.js";
import CardComponent from "./CardComponent.js";

function AidesComponent() {
  return (
    <main>
      {AIDES.map((aide) => (
        <CardComponent key={aide.id} aide={aide} />
      ))}
    </main>
  );
}

export default AidesComponent;
