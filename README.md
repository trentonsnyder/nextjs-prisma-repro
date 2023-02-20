Problem

I think the issue is when you import the prisma db functions into both `/api` and in a `getStaticProps` (maybe `getServerSideProps` too).

`next dev` always works, you can see `.next/server/pages/schema.prisma1` shows up.

but the folder structure after `yarn builld`, which invokes `next build`, is incorrect. Locally inspecting the `.next/` folder I can see that `schema1` isn't copied to all the places that next is expecting it.

```
ENOENT: no such file or directory, open '/Users/trenton/Desktop/nextjs-prisma-repro/apps/web/.next/server/pages/api/schema.prisma1'
```

I can fix this issue by commenting out the imports and function invocations in `static-page.tsx` and/or `/api/rangers.ts` pages.

I also tried to add the multi-schema aspect to this repo to try and test it out by adding a `blue-db` mongodb package but I'm running into this error (https://github.com/prisma/prisma/issues/2443).
So at minimum this is a reproduction of the errors I'm experiencing when I try to use this webpack plugin.

commands I'm using in this repo

```
docker-compose up
yarn install
yarn db:push
yarn db:seed
yarn dev
yarn build
```

to reproduce the issue with the production build i run `yarn build` and then `cd apps/web` `npx next start` and hit the `GET localhost:3000/api/rangers` to show the error.

Hopefully this is helpful in developing the plugin.
