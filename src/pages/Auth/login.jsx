import React from 'react'

function login() {
  return (
    
        <>
       
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
        <a
          href="#"
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
          Log in to
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
        </a>
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
        <form method="POST" action="https://www.thecustomboxes.com/login/">
          <input
            type="hidden"
            name="_token"
            defaultValue="rPMCynZCCSE8NydMfKLqBxWbvfbx5olu8KQdTsvQ"
          />{" "}
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
              autoComplete="current-password"
            />
          </div>
          <div className="row">
            {/*<div class="col-8">*/}
            {/*  <div class="icheck-primary">*/}
            {/*  <input class="form-check-input" type="checkbox" name="remember" id="remember" >*/}
            {/*    <label for="remember">*/}
            {/*    Remember Me*/}
            {/*    </label>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/* /.col */}
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
                Login
              </button>
            </div>
            {/* /.col */}
          </div>
        </form>
        {/* /.social-auth-links */}
        {/* <p class="mb-1">
                    <a href="https://www.thecustomboxes.com/password/reset">I forgot my password</a>
            </p> */}
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
            Don't have an account?
            <a
              href="https://www.thecustomboxes.com/register/"
              className="text-center"
              style={{
                color: "#0074bd",
                fontFamily: "Epilogue",
                fontSize: 18,
                fontStyle: "normal",
                fontWeight: 400
              }}
            >
              {" "}
              Sign up
            </a>
          </span>
        </p>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </div>


</>

 
  )
}

export default login