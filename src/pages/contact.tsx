import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";
import React from "react";

enum FormState {
  Hidden,
  ShowingLink,
  ShowingIframe,
}

export default function Contact() {
  const [state, showMore] = React.useReducer((s: FormState) => {
    if (s === FormState.Hidden) {
      return FormState.ShowingLink;
    }
    if (s === FormState.ShowingLink) {
      return FormState.ShowingIframe;
    }
    return FormState.ShowingIframe;
  }, FormState.Hidden);

  return (
    <Layout title="Contact Me | Cyrus Yiu" current="Contact Me">
      <h2>Contact Me</h2>
      <p>
        Want to talk with me? If you have a GitHub account, check out my{" "}
        <AutoLink href="https://github.com/UnsignedArduino">
          profile page
        </AutoLink>{" "}
        to see the public email I use for GitHub or click to reveal the Google
        Form below.
      </p>
      <div>
        <button
          className="btn btn-primary mb-2"
          onClick={() => {
            showMore();
          }}
          disabled={state === FormState.ShowingIframe}
        >
          {
            {
              [FormState.Hidden]: "Show link",
              [FormState.ShowingLink]: "Show form",
              [FormState.ShowingIframe]: "Show form",
            }[state]
          }
        </button>
        {state === FormState.ShowingLink && (
          <p>
            Click{" "}
            <AutoLink href="https://forms.gle/X8ykkvuoE3XtU9gn6">here</AutoLink>{" "}
            to open the form in a new tab.
          </p>
        )}
        {state === FormState.ShowingIframe && (
          <>
            <p>
              Fill out the form below or click{" "}
              <AutoLink href="https://forms.gle/X8ykkvuoE3XtU9gn6">
                here
              </AutoLink>{" "}
              to open the form in a new tab.
            </p>
            <iframe
              className="w-100 vh-100"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeZlANfSlfsUE_MEn3uErwqeur5MMGfmtGVNwkCSjp1ZE4Lcw/viewform?embedded=true"
            />
          </>
        )}
      </div>
    </Layout>
  );
}
