import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      <div className="row rows-col-1 row-cols-md-3 g-3 mt-4 mb-4">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};
