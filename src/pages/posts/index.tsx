
import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Código Limpo: reflexão e prática</strong>
            <p>
              Desenvolvimento de software possui diversas bases teóricas que definem
              o comportamento da programação e ajudam a padronizar métodos
              de criação
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Código Limpo: reflexão e prática</strong>
            <p>
              Desenvolvimento de software possui diversas bases teóricas que definem
              o comportamento da programação e ajudam a padronizar métodos
              de criação
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Código Limpo: reflexão e prática</strong>
            <p>
              Desenvolvimento de software possui diversas bases teóricas que definem
              o comportamento da programação e ajudam a padronizar métodos
              de criação
            </p>
          </a>

        </div>
      </main>
    </>
  )
} 