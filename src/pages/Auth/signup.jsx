import React from 'react'
import { Link } from 'react-router-dom'

function signup() {
  return (
    <div className="login-box" style={{ margin: "7% auto", width: 550 }}>
  {/* /.login-logo */}
  <div
    className="card card-outline card-primary"
    style={{
      borderRadius: 20,
      border: "1px solid rgba(0, 116, 189, 0.2)",
      background: "#fff",
      padding: "35px 20px"
    }}
  >
    <div
      className="card-header text-center"
      style={{
        backgroundColor: "#fff !important",
        borderRadius: 20,
        borderBottom: "none"
      }}
    >
      <h1
        className="h1"
        style={{
          color: "#000",
          fontFamily: "Epilogue",
          fontSize: 30,
          fontStyle: "normal",
          fontWeight: 700,
          textTransform: "capitalize"
        }}
      >
        Sign Up in to
        <span
          style={{
            color: "#0074bd",
            fontFamily: "Epilogue",
            fontSize: 30,
            fontStyle: "italic",
            fontWeight: 500,
            textTransform: "capitalize"
          }}
        >
          the Custom boxes
        </span>
      </h1>
    </div>
    <div className="card-body">
      <p
        className="login-box-msg"
        style={{
          color: "#000",
          fontFamily: "Epilogue",
          fontSize: 25,
          fontStyle: "normal",
          fontWeight: 400
        }}
      >
        Let's get started.
      </p>
      <form method="POST" action="https://www.thecustomboxes.com/register/">
        <input
          type="hidden"
          name="_token"
          defaultValue="rPMCynZCCSE8NydMfKLqBxWbvfbx5olu8KQdTsvQ"
        />
        <label
          className="form-label mb-3"
          style={{
            color: "#0074bd",
            fontFamily: "Epilogue",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal"
          }}
        >
          Enter your Email*
        </label>
        <div className="input-group mb-3">
          <input
            style={{
              borderRadius: 7,
              background: "#f2f2f2",
              padding: "25px 10px"
            }}
            id="email"
            type="email"
            className="form-control "
            name="email"
            defaultValue=""
            required=""
            autoComplete="email"
            autofocus=""
          />
        </div>
        <label
          className="form-label mb-3"
          style={{
            color: "#0074bd",
            fontFamily: "Epilogue",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal"
          }}
        >
          Enter your Name*
        </label>
        <div className="input-group mb-3">
          <input
            id="name"
            style={{
              borderRadius: 7,
              background: "#f2f2f2",
              padding: "25px 10px"
            }}
            type="text"
            className="form-control "
            name="username"
            defaultValue=""
            required=""
            autoComplete="username"
            autofocus=""
          />
        </div>
        <label
          className="form-label mb-3"
          style={{
            color: "#0074bd",
            fontFamily: "Epilogue",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal"
          }}
        >
          Enter your Password*
        </label>
        <div className="input-group mb-3">
          <input
            style={{
              borderRadius: 7,
              background: "#f2f2f2",
              padding: "25px 10px"
            }}
            id="password"
            type="password"
            className="form-control "
            name="password"
            required=""
            autoComplete="new-password"
          />
        </div>
        <label
          className="form-label mb-3"
          style={{
            color: "#0074bd",
            fontFamily: "Epilogue",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal"
          }}
        >
          Confirm Password*
        </label>
        <div className="input-group mb-3">
          <input
            style={{
              borderRadius: 7,
              background: "#f2f2f2",
              padding: "25px 10px"
            }}
            id="password-confirm"
            type="password"
            className="form-control"
            name="password_confirmation"
            required=""
            autoComplete="new-password"
          />
        </div>
        <div className="row">
          <div className="col-12">
            <button
              type="submit"
              className="btn red_border_button"
              style={{
                backgroundColor: "#c4161c",
                border: "1px solid #c4161c",
                color: "#fff"
              }}
            >
              Sign UP
            </button>
          </div>
          {/* /.col */}
        </div>
      </form>
      {/* /.social-auth-links */}
      <p className="mt-4 text-center">
        <span
          className=""
          style={{
            color: "#000",
            fontFamily: "Epilogue",
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: 400
          }}
        >
          Already have an account?
          <Link to='auth/login' className="text-center" style={{
              color: "#0074bd",
              fontFamily: "Epilogue",
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: 400
            }} >login</Link>
        </span>
      </p>
      <p className="mt-4 text-center">
        <span
          style={{
            color: "#000",
            textAlign: "center",
            fontFamily: "Epilogue",
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: 400
          }}
        >
          This site is protected by reCAPTCHA and the Google
          <a
            href="#"
            style={{
              color: "#0074BD",
              fontFamily: "Epilogue",
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: 400
            }}
          >
            {" "}
            Privacy Policy
          </a>
          and
          <a
            href="#"
            style={{
              color: "#0074BD",
              fontFamily: "Epilogue",
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: 400
            }}
          >
            {" "}
            Terms of Service
          </a>
          apply.
        </span>
      </p>
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
</div>

  )
}

export default signup