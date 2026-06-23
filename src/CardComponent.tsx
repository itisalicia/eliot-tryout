type Aide = {
  id: number;
  nom: string;
  organisme: string;
  type: string;
  secteurs: string[];
  regions: string[];
  montantMax: number | null;
  tauxFinancement: number | null;
  dateLimite: string;
  description: string;
};

function CardComponent({ aide }: { aide: Aide }) {
  return (
    <section className="max-w-md w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 px-4">
      <div className=" border-b border-gray-100 flex items-start justify-between gap-3 mb-2 pt-4 pb-4 px-6">
        <h2 className="text-xl font-bold text-gray-900 leading-tight">
          {aide.nom}
        </h2>
        <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 uppercase tracking-wide">
          {aide.type}
        </span>
      </div>
      <p className="text-sm text-gray-500 font-medium">Organisme</p>

      <div className="px-6 py-4 space-y-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          {aide.description}
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
              Montant max
            </p>
            <p className="text-base font-bold text-gray-900">
              {aide.montantMax
                ? aide.montantMax.toLocaleString("fr-FR") + " €"
                : "Pas de plafond"}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
              Taux de financement
            </p>
            <p className="text-base font-bold text-gray-900">
              {aide.tauxFinancement
                ? aide.tauxFinancement * 100 + " %"
                : "Non précisé"}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
            Secteurs
          </p>
          <div className="flex flex-wrap gap-2">
            {aide.secteurs.map((secteur) => (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700">
                {secteur}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
            Régions
          </p>
          <div className="flex flex-wrap gap-2">
            {aide.regions.map((region) => (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700">
                {region}
              </span>
            ))}
          </div>
        </div>
      </div>

      <footer className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Date limite</p>
          <p className="text-sm font-semibold text-gray-900">
            {aide.dateLimite}{" "}
          </p>
        </div>
      </footer>
    </section>
  );
}

export default CardComponent;
