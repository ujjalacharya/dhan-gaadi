import React from "react";

function SigninForm({handleChange, handleSubmit, state}) {
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="illustration">
        <i className="fa fa-lock" />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={state.email}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={state.password}
          required
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
}

export default SigninForm;
