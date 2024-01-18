import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-[400px] bg-white border border-gray-300 shadow-2xl rounded-lg h-fit p-4">
        <div className="border-gray-300 px-4 py-4">
          <div className="text-2xl font-semibold mb-6">
            Sign in{" "}
            <span className="text-gray-600 font-normal text-xl">
              to Unlock Best Features of{" "}
            </span>
            TravelBuddy
          </div>
          <div className="form">
            <label className="text-gray-800 text-sm font-semibold">
              Email or Username
            </label>
            <input
              className="w-full border-2 border-gray-800 rounded-md px-4 py-3 mt-1 text-xs"
              type="email"
              placeholder="Enter your email or username"
            />
            <label className="text-gray-800 text-sm font-semibold mt-4">
              Password
            </label>
            <input
              className="w-full border-2 border-gray-800 rounded-md px-4 py-3 mt-1 text-xs"
              type="password"
              placeholder=""
            />
            <div className="text-xs mt-1 cursor-pointer">Forgot Password?</div>
            <div
              className="w-full text-center bg-gray-900 cursor-pointer font-medium hover:bg-slate-600 text-white rounded-full px-4 py-3 mt-4 text-sm"
              onClick={() => {}}
            >
              Sign in
            </div>
          </div>
          <div className=" text-center text-gray-500 my-4 text-xs">OR</div>
          <div className="w-full mt-4 text-center text-black font-medium px-4 py-3 border-gray-900 border-2 rounded-full items-center flex hover:bg-black hover:text-white cursor-pointer transition-all">
            <img
              src="/google.svg"
              alt=""
              className="mr-12 max-sm:mr-4 "
              height={20}
              width={20}
            />
            Continue with Google
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
