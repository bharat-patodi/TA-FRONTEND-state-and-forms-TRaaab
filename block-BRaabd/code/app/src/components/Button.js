function Button(props) {
  return (
    <input type="submit" value={props.name} onClick={props.clicker}></input>
  );
}

export default Button;
