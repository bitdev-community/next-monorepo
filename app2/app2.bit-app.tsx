/** @type {import("@teambit/cloud-providers.deployers.vercel").VercelOptions} */
import { NextjsApp } from '@frontend/nextjs.app-types.nextjs-app-type';
// import { Vercel } from '@teambit/cloud-providers.deployers.vercel';

// const vercelConfig = {
//   accessToken: process.env.VERCEL_AUTH_TOKEN,
//   teamId: 'my-team-id',
//   projectName: 'my-nextsjs-app',
//   // the deployer also supports vercel.json configuration, it can be an object or a path to a vercel.json file
//   vercelConfig: {
//     rewrites: [{ source: '/(.*)', destination: '/index.html' }],
//   },
// };

export default NextjsApp.from({
  name: "app2",
  // deploy: Vercel.deploy(vercelConfig),
});
