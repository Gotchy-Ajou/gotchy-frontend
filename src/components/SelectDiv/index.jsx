const SelectDiv = ({ list }) => {
    return (
      <>
        {list.map((e) => (
          <option value={e === list[0] ? "any" : e}>{e}</option>
        ))}
      </>
    );
  };
  export default SelectDiv;