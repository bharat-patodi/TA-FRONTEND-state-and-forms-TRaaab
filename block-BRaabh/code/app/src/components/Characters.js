import data from "../data.json";

function Characters(props) {
  let people = [...data.map((v) => v.people)].flat();
  return (
    <section>
      {people.map((person) => {
        return (
          <img
            key={person.name}
            src={person.image}
            alt={person.description}
            className="person-image"
            onClick={props.clicker}
            data-house={person.name}
          />
        );
      })}
    </section>
  );
}

export default Characters;
