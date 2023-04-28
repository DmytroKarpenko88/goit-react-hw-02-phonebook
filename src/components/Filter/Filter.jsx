const Filter = ({ onChange, value }) => {
  return <input type="text" name="filter" value={value} onChange={onChange} />;
};

export default Filter;
