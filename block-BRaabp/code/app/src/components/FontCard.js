function FontCard(props) {
  return (
    <div className="font-card">
      <div className="font-card-header">
        <h3 className="font-name">{props.name}</h3>
        <p className="font-styles">{props.styles}</p>
      </div>
      <p className="font-author">{props.author}</p>
      <p
        className="font-showcase"
        style={{
          fontFamily: fontDisplay(props.name),
          fontSize: `${props.sliderValue}px`,
        }}
      >
        {props.fontValue}
      </p>
    </div>
  );
}

function fontDisplay(fontName) {
  switch (fontName) {
    case "Big Shoulders Display":
      return "'Big Shoulders Display', cursive";
    case "Caveat":
      return "'Caveat', cursive";
    case "Fredoka One":
      return "'Fredoka One', cursive";
    case "Hachi Maru Pop":
      return "'Hachi Maru Pop', cursive";
    case "Hanalei":
      return "'Hanalei', cursive";
    case "Inconsolata":
      return "'Inconsolata', monospace";
    case "Indie Flower":
      return "'Indie Flower', cursive";
    case "Kalam":
      return "'Kalam', cursive";
    case "Rajdhani":
      return "'Rajdhani', sans-serif";
    case "Sriracha":
      return "'Sriracha', cursive";
    default:
      return "";
  }
}

export default FontCard;
