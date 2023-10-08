"use client";

import { Field, FieldProps, Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

interface InitialValues {
  full_name: string;
  email: string;
  body: string;
}

const initialValues: InitialValues = {
  full_name: "",
  email: "",
  body: "",
};

export default function ContactFormModal() {
  const ContactSchema = Yup.object().shape({
    full_name: Yup.string().max(140, "Too long!").required("Required."),
    email: Yup.string()
      .email("Invalid email.")
      .max(140, "Too long!")
      .required("Required."),
    body: Yup.string().max(280, "Too long!").required("Required."),
  });

  async function handleSubmit(values: FormikValues) {
    const { full_name, email, body } = values;

    try {
      await supabase.from("contacts").insert({ full_name, email, body });
    } catch (error) {
      console.log("Error occurred", { error });
    }
  }

  return (
    <div
      className="fixed z-10 inset-0 bg-black/70"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="mt-0 md:mt-8 h-full md:h-auto w-full mx-auto md:max-w-lg bg-black p-6 rounded-md">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold font-aktiv-grotesk text-cream">
                Lets talk!
              </h2>
              <p className="mt-2 mb-6 text-base text-cream/60 font-aktiv-grotesk">
                React out to me! Lets work together or workshop something. I
                always welcome conversations on design and product.
              </p>
            </div>
            <Link
              href="/"
              className="ml-4 shrink-0 h-10 w-10 hover:bg-cream/10 rounded-md flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-cream"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={ContactSchema}
            onSubmit={(values: InitialValues) => handleSubmit(values)}
          >
            <Form className="flex flex-col gap-4">
              <Field name="full_name">
                {({ field, meta }: FieldProps) => (
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-bold font-aktiv-grotesk text-cream"
                    >
                      Name
                    </label>
                    <input
                      {...field}
                      placeholder="Enter name"
                      id="contact-name"
                      className="px-2 h-10 border border-solid border-cream/20 bg-black font-aktiv-grotesk text-cream rounded-md"
                    />
                    {meta.error && meta.touched && (
                      <p className="text-sm font-aktiv-grotesk text-cream">
                        {meta.error}
                      </p>
                    )}
                  </div>
                )}
              </Field>
              <Field name="email">
                {({ field, meta }: FieldProps) => (
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-bold font-aktiv-grotesk text-cream"
                    >
                      Email
                    </label>
                    <input
                      {...field}
                      placeholder="Enter email"
                      id="contact-email"
                      className="px-2 h-10 border border-solid border-cream/20 bg-black font-aktiv-grotesk text-cream rounded-md"
                    />
                    {meta.error && meta.touched && (
                      <p className="text-sm font-aktiv-grotesk text-cream">
                        {meta.error}
                      </p>
                    )}
                  </div>
                )}
              </Field>
              <Field name="body">
                {({ field, meta }: FieldProps) => (
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="contact-body"
                      className="text-sm font-bold font-aktiv-grotesk text-cream"
                    >
                      Body
                    </label>
                    <textarea
                      {...field}
                      id="contact-body"
                      rows={4}
                      className="p-2 border border-solid border-cream/20 bg-black font-aktiv-grotesk text-cream rounded-md"
                      placeholder="Describe what you are reaching out about."
                    />
                    {meta.error && meta.touched && (
                      <p className="text-sm font-aktiv-grotesk text-cream">
                        {meta.error}
                      </p>
                    )}
                  </div>
                )}
              </Field>
              <div className="flex justify-end gap-2">
                <Link
                  href="/"
                  className="font-bold rounded-md bg-cream/10 px-6 h-10 flex items-center text-sm text-cream font-aktiv-grotesk hover:bg-cream/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="font-bold rounded-md bg-yellow px-6 h-10 flex items-center  text-sm text-black font-aktiv-grotesk hover:bg-yellow/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
                >
                  Send message
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
