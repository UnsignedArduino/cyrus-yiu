import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";
import React from "react";

export default function Contact() {
  const [showForm, setShowForm] = React.useState(false);

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
        {showForm ? (
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
        ) : (
          <p>
            Click{" "}
            <AutoLink href="https://forms.gle/X8ykkvuoE3XtU9gn6">here</AutoLink>{" "}
            to open the form in a new tab.
          </p>
        )}
        <button
          className="btn btn-primary mb-2"
          onClick={() => {
            setShowForm(true);
          }}
          hidden={showForm}
        >
          Show form
        </button>
      </div>
    </Layout>
  );
}
