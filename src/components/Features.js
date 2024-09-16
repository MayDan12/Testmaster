import {
  DocumentPlusIcon,
  ClockIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Easy Test Creation",
    description:
      "Teachers can quickly input questions, provide correct answers, and set up multiple-choice options.",
    icon: DocumentPlusIcon,
  },
  {
    name: "Timed Tests",
    description:
      "Each test is timed, keeping students on track and simulating real exam conditions",
    icon: ClockIcon,
  },
  {
    name: "Instant Feedback",
    description:
      "Once the test is complete, students receive their scores and percentage based on the answers provided.",
    icon: CheckCircleIcon,
  },
  {
    name: "CBT (Computer-Based Testing) Experience",
    description:
      "Designed to mimic the standardized computer-based test environment, preparing students for future online assessments.",
    icon: ComputerDesktopIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about TestMaster
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            TestMaster simplifies the assessment process, saves time, and
            provides instant results, making it the perfect tool for both
            educators and learners.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
