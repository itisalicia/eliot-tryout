import { useState } from "react";
import AIDES from "./Aides.js";
import CardComponent from "./CardComponent.js";

function AidesComponent() {
  const types = [...new Set(AIDES.map((aide) => aide.type))];
  const [filter, setFilter] = useState("");

  let aidesFilters;

  if (filter) {
    aidesFilters = AIDES.filter((aide) => aide.type === filter);
  } else {
    aidesFilters = AIDES;
  };

  return (
    <section>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
      >
        <option value="">Types d'aide</option>
        {types.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <p> {aidesFilters.length} aide(s) </p>

      {aidesFilters.map((aide) => (
        <CardComponent key={aide.id} aide={aide} />
      ))}
    </section>
  );
}

export default AidesComponent;
