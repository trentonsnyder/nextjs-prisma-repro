import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { getFirstRed } from "red-db/daos";
// import { getFirstBlue } from "blue-db/daos";

type IndexProps = {
  redName: string;
  blueName: string;
};

function IndexPage({ redName, blueName }: IndexProps) {
  return (
    <div>
      <h1>Hello {redName}</h1>
      <h1>Goodbye {blueName}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (
  _context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexProps>> => {
  console.log("here dude");
  const red = await getFirstRed();
  // const blue = await getFirstBlue(); // can't get it to work - https://github.com/prisma/prisma/issues/2443

  // const red = { name: "red-one" };
  const blue = { name: "blue-one" };

  console.log({ red, blue });

  if (red === null) {
    return { notFound: true, revalidate: 60 };
  }

  if (blue === null) {
    return { notFound: true, revalidate: 60 };
  }

  return {
    props: {
      redName: red.name,
      blueName: blue.name,
    },
    revalidate: false,
  };
};

export default IndexPage;
