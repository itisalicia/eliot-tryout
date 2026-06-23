import AIDES from "./Aides.js";
import CardComponent from "./CardComponent.js";

function AidesComponent() {
  return (
    <section>
      {AIDES.map((aide) => (
        <CardComponent key={aide.id} aide={aide} />
      ))}
    </section>
  );
}

export default AidesComponent;
