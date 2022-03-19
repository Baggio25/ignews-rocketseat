import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ig.news | Home</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey Welcome!</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>For $ 9.90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <Image
          src="/images/avatar.svg"
          alt="Girl coding"
          width={330}
          height={498}
        />
      </main>
    </>
  );
}
