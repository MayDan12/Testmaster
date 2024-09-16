function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const response = await fetch(
      "https://ubuntu-portal.onrender.com/api/auth/register/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="min-h-screen text-black bg-gray-100 flex flex-col justify-center items-center w-screen">
      {/* Logo */}
      <div className="mb-8 mt-3">
        {/* <a href="/supplier/">
          <Image
            src="/public/Logo.png" // path to logo
            alt="Logo"
            width={120}
            height={40}
          />
        </a> */}
        <div>Ubuntu Portal</div>
      </div>
      <div className="flex mb-16 gap-8">
        {/* Login Form Container */}
        <div className="bg-green-50 bg-gradient-to-tr p-8 pt-2 rounded-3xl shadow-md w-full max-w-sm shadow-lg shadow-slate-600">
          <div className="item-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Login</h2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* First name Input */}
            <div className="mb-2">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="first_name"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            {/* Last name Input */}
            <div className="mb-2">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="last_name"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            <div className="flex justify-between">
              {/* Country Input */}
              <div className="mb-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="mt-1 w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              {/* Roles input */}
              <div className="mb-2">
                <label
                  htmlFor="Roles"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <select
                  className="mt-1 w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  id="roles"
                  name="role"
                  required
                >
                  <option value="seller">Supplier</option>
                  <option value="buyer">Buyer</option>
                </select>
              </div>
            </div>

            {/* Phone number Input */}
            <div className="mb-2">
              <label
                htmlFor="phonenumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phonenumber"
                name="phone_number"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            {/* Password 1 input */}
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            {/* Password 2 input */}
            <div className="mb-2">
              <label
                htmlFor="confirmpassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="password2"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
              {/* <a
                href="#"
                className="text-xs text-blue-600 hover:underline mt-1 inline-block"
              >
                Forgot your password?
              </a> */}
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Sign-Up
            </button>
          </form>

          {/* Additional Links */}
          {/* <div className="mt-6 text-sm text-gray-600">
          <p>
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Notice.
            </a>
          </p>
        </div> */}

          <div className="mt-6 border-t pt-6 text-sm text-gray-600">
            <p>Have an account?</p>
            {/* <Link href="/supplier/register/">
              <Button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 block text-center mt-3">
                Login to UbuntuPortal
              </Button>
            </Link> */}
          </div>
          {/* Terms and conditions */}
          <div className="mt-8 text-xs text-gray-500">
            <p>Conditions of Use</p>
            <p>Privacy Notice</p>
            <p>Help</p>
          </div>
        </div>
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
}

export default Register;
