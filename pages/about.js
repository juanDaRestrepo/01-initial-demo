import Link from "next/link";
import { LightLayout } from "../components/layouts/LightLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function about() {
  return (
    <>
      <h1>About page</h1>
      <h1 className={"title"}>
        Go to <Link href="/">Home</Link>
      </h1>
      <h1 className={"title"}>
        Go to <Link href="/contact">Contact</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.js</code>
      </p>
    </>
  );
}

about.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};
