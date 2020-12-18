function Confirm({ submit, prev, values }) {
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <strong>Full Name: </strong> {`${values.firstName} ${values.lastName}`} <br />
        <strong>Username: </strong> {`${values.username}`} <br />
      </div>

      <div className="form-group row">
        <button className="btn" onClick={prev}>
          Previous
        </button>
        <button className="btn blue" onClick={submit}>
          Confirm
        </button>
      </div>
    </>
  );
}

export default Confirm;
