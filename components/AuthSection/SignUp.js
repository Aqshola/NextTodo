export default function SignUp({ switchAuth }) {
  return (
    <form className="flex flex-col space-y-7 w-max justify-self-center ">
      <input
        type="text"
        name=""
        id=""
        placeholder="Name"
        className="text-xl transition border-2 border-black  focus:border-yellow-primary focus:ring-0"
      />
      <input
        type="email"
        name=""
        id=""
        placeholder="Email"
        className="text-xl transition border-2 border-black  focus:border-yellow-primary focus:ring-0"
      />

      <input
        type="password"
        name=""
        id=""
        placeholder="Enter your password"
        className="text-xl transition border-2 border-black  focus:border-yellow-primary focus:ring-0"
      />
      <div className=" flex flex-col space-y-3">
        <button className="w-max bg-yellow-primary px-5 py-2 rounded-md font-bold text-lg text-white">
          Sign Up
        </button>
        <p>
          Have Account?{" "}
          <span>
            <button
              onClick={switchAuth}
              className="transition text-yellow-primary border-b-2 border-transparent font-bold hover:border-black"
            >
              Log In
            </button>
          </span>
        </p>
      </div>
    </form>
  );
}
