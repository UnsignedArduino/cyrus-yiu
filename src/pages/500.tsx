import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";

export default function InternalServerError() {
  return (
    <Layout
      title="Internal server error | Cyrus Yiu"
      current="Internal server error"
    >
      <h2>Internal server error</h2>
      <p>
        Sorry, an internal server error occurred and I could not service your
        request. Go back to <AutoLink href="/">home</AutoLink>?
      </p>
      <p>
        You can <AutoLink href="/contact">contact me</AutoLink> or report{" "}
        <AutoLink href="https://github.com/UnsignedArduino/cyrus-yiu/issues">
          issues
        </AutoLink>{" "}
        like this in the GitHub repository if this error persists.
      </p>
    </Layout>
  );
}
