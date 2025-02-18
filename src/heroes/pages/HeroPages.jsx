import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPages = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById(id),[id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return (
      <div>
        <h1>Hero Not Found</h1>
        <p>No se encontró ningún héroe con el ID {id}</p>
      </div>
    );
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail  animate__animated animate__fadeIn"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button onClick={onNavigateBack} className="btn btn-outline-primary">
          Regresar
        </button>
      </div>
    </div>
  );
};
