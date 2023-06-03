const SelectDiv = ({ list }) => {

  // const requestInput = async (e) => {
    //   e.preventDefault();
    //
    //   axios.get("", {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     }
    //   })
    //     .then((resp) => {
    //
    //     })
    //     .catch((err) => {
    //
    //       console.log(err);
    //     });
    // }

  return (
    <>
      {list?.map((e) => (
        <option value={e === list[0] ? "any" : e}>{e}</option>
      ))}
    </>
  );
};
export default SelectDiv;
