import Link from "next/link";

import { MainLayout } from "../components/layouts/MainLayout";


export default function contact() {
  return (
    <MainLayout>
      <h1>Pricing page</h1>
      <h1 className={"title"}>
        Go to <Link href="/">Home</Link>
      </h1>
      <h1 className={"title"}>
        Go to <Link href="/about">About</Link>
      </h1>
      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/pricing.js</code>
      </p>
    </MainLayout>
  );
}