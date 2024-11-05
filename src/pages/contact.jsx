import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import { Cover } from "../components/cover";

const fields = [
  {
    id: "first-name",
    label: "First name",
    type: "text",
    autoComplete: "given-name",
  },
  {
    id: "last-name",
    label: "Last name",
    type: "text",
    autoComplete: "family-name",
  },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    id: "phone-number",
    label: "Phone number",
    type: "tel",
    autoComplete: "tel",
  },
  {
    id: "travel-destination",
    label: "Travel Destination",
    type: "text",
    autoComplete: "address-line1",
  },
];

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <Cover heading="Contact Us" />
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            LETS CONNECT!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We're here to help you plan your next adventure!
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.id} className="sm:col-span-2">
                <label
                  htmlFor={field.id}
                  className="block text-sm font-semibold text-gray-900"
                >
                  {field.label}
                </label>
                <div className="mt-2.5">
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-greenColor sm:text-sm"
                  />
                </div>
              </div>
            ))}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-greenColor sm:text-sm"
                  defaultValue=""
                />
              </div>
            </div>
            <Field className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={`group flex w-8 cursor-pointer rounded-full p-px ${
                    agreed ? "bg-greenColor" : "bg-gray-200"
                  } ring-1 ring-gray-900/5 transition-colors duration-200 focus-visible:outline-greenColor`}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={`h-4 w-4 transform bg-white rounded-full shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ${
                      agreed ? "translate-x-3.5" : ""
                    }`}
                  />
                </Switch>
              </div>
              <Label className="text-sm text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-greenColor">
                  privacy policy
                </a>
                .
              </Label>
            </Field>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="w-full rounded-md bg-greenColor px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-greenColor focus-visible:outline focus-visible:outline-greenColor"
            >
              Let's Plan Your Trip
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
