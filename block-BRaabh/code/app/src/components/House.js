function House(props) {
  return (
    <label htmlFor="house">
      <input
        type="submit"
        value={props.name}
        name="house"
        onClick={props.clicker}
      ></input>
    </label>
  );
}

export default House;
