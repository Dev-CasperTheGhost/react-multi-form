import ErrorMessage from "./ErrorMessage";

function SetPassword({ prev, next, passwords, error, onChanges: { setPassword2, setPassword } }) {
  return (
    <>
      <div className="form-group">
        {error ? <ErrorMessage error={error} /> : null}
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          className="form-input"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          value={passwords[0]}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password2">Confirm Password</label>
        <input
          type="password"
          name="password2"
          id="password2"
          className="form-input"
          onChange={(e) => setPassword2(e.target.value)}
          required
          value={passwords[1]}
        />
      </div>
      <div className="form-group row">
        <button className="btn" onClick={prev}>
          Previous
        </button>
        <button className="btn blue" onClick={next}>
          Continue
        </button>
      </div>
    </>
  );
}

export default SetPassword;
