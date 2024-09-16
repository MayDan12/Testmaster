"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Features from "../components/Features";

const navigation = [
  { name: "Home", href: "/" },
  // { name: "Dashboard", href: "/dashboard" },
  { name: "Create Test", href: "/create-test" },
  { name: "Test", href: "/test" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a> */}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a> */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a> */}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-10 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black-900 sm:text-6xl">
              TestMaster
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              TestMaster is the ultimate tool for teachers who want to create
              computer-based tests quickly and efficiently. Set up timed tests,
              provide instant feedback, and track student progress effortlessly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/create-test"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <Features />
    </div>
  );
}
// function Home() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Hero Section */}
//       <header className="bg-blue-600 py-10 text-white text-center">
//         <h1 className="text-5xl font-bold">Welcome to TestMaster</h1>
//         <p className="mt-4 text-2xl">
//           Empowering teachers with easy-to-use, customizable tests
//         </p>
//       </header>

//       {/* Content Section */}
//       <main className="max-w-7xl mx-auto px-6 py-12 md:flex md:space-x-6">
//         <section className="bg-white shadow-md p-8 rounded-lg mb-6 md:w-1/2">
//           <h2 className="text-4xl font-bold mb-4 text-blue-600">
//             Why TestMaster?
//           </h2>
//           <p className="text-lg text-gray-700 mb-4">
//             TestMaster is the ultimate tool for teachers who want to create
//             computer-based tests quickly and efficiently. Set up timed tests,
//             provide instant feedback, and track student progress effortlessly.
//           </p>
//           <ul className="list-disc list-inside text-gray-700">
//             <li>Easy-to-use question creation</li>
//             <li>Timed tests for a realistic exam environment</li>
//             <li>Instant scoring and performance feedback</li>
//           </ul>
//         </section>

//         <section className="bg-white shadow-md p-8 rounded-lg md:w-1/2">
//           <h2 className="text-4xl font-bold mb-4 text-blue-600">
//             Get Started Now
//           </h2>
//           <p className="text-lg text-gray-700 mb-4">
//             Join the community of educators using TestMaster to enhance their
//             teaching and streamline assessments.
//           </p>
//           <a href="/create-test">
//             <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-4 inline-block text-xl">
//               Create a Test
//             </p>
//           </a>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-blue-600 py-4 text-center text-white">
//         <p>&copy; 2024 TestMaster. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;

// import supabase from "../config/supabaseClient";
// import { useState, useEffect } from "react";

// function Home() {
//   const [fetchError, setFetchError] = useState(null);
//   const [questions, setQuestion] = useState(null);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       const { data, error } = await supabase.from("questions").select();
//       if (error) {
//         setFetchError(error);
//       } else {
//         setQuestion(data);
//         console.log(data);
//       }
//     };
//     fetchQuestions();
//   }, [setQuestion, setFetchError]);

//   console.log(supabase);
//   console.log(questions);
//   console.log(fetchError);
//   return (
//     <div className="container text-center">
//       <div className="py-auto pb-auto pt-40">
//         <h1 className="text-7xl mb-3 font-bold">Welcome to Quiz App</h1>
//         <p className="text-3xl mb-2">
//           This is a simple quiz app that allows you to create your own quiz
//           questions and answers.
//         </p>
//         <p className="text-3xl mb-3">
//           You can also take the quiz and see your score at the end.
//         </p>
//         <p className="text-3xl mb-3">
//           Click on the Create Test button to create your own test or click on
//           the Take Test button to take the test.
//         </p>
//         <button className="bg-blue-500 text-3xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//           Create Test
//         </button>
//         <button
//           onClick="/test"
//           className="bg-blue-500 text-3xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
//         >
//           Take Test
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Home;
