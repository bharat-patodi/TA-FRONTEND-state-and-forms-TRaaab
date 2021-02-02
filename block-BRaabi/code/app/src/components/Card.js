import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <div
      className="accordion-card"
      onClick={props.clicker}
      data-name={props.name}
    >
      <span className="card-title">{props.title}</span>
      <span className="card-icon">
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </span>
      <p
        className={
          props.activeCard === props.title
            ? "card-description active"
            : "card-description"
        }
      >
        {props.description}
      </p>
    </div>
  );
}

function handleClick() {}

export default Card;
