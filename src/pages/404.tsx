import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";

export default function PageNotFound() {
  return (
    <Layout title="Page not found | Cyrus Yiu" current="Page not found">
      <h2>Page not found</h2>
      <p>
        Sorry, I was unable to find the page you were looking for. Go back to{" "}
        <AutoLink href="/">home</AutoLink>?
      </p>
      <p>
        You can <AutoLink href="/contact">contact me</AutoLink> or report{" "}
        <AutoLink href="https://github.com/UnsignedArduino/cyrus-yiu/issues">
          issues
        </AutoLink>{" "}
        in the GitHub repository if you believe there should be a page here.
      </p>
    </Layout>
  );
}
