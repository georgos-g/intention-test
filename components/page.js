import Head from 'next/head';

import NavbarReact from './navbar';

export default function Page(props) {
  return (
    <>
      <div>
        <Head>
          <title>Intention Test Project</title>
          {/* <link rel='stylesheet' href='https://bootswatch.com/4/darkly/bootstrap.min.css'/> */}
        </Head>

        <NavbarReact />
        {props.children}
      </div>
    </>
  );
}
