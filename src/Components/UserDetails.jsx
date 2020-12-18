import ErrorMessage from "./ErrorMessage";

function UserDetails({
  next,
  values,
  onChanges: { setFirstName, setLastName, setUsername, setAgreed },
  error,
}) {
  return (
    <>
      {error ? <ErrorMessage error={error} /> : null}
      <div className="row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-input"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={values.firstName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-input"
            onChange={(e) => setLastName(e.target.value)}
            value={values.lastName}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-input"
          onChange={(e) => setUsername(e.target.value)}
          value={values.username}
        />
      </div>
      <div className="form-group-checkbox">
        <input
          name="agreed"
          id="agreed"
          type="checkbox"
          onChange={() => setAgreed((o) => !o)}
          checked={values.agreed}
        />
        <label htmlFor="agreed">I agree to the terms and conditions</label>
      </div>
      <div className="form-group">
        <button className="btn blue" onClick={next}>
          Continue
        </button>
      </div>
    </>
  );
}

export default UserDetails;
