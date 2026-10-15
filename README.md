# RP Plumbing

Richard Pugh’s site for Vernon, Armstrong, Enderby, and the North Okanagan. Phone (604) 351-9145.

## Deploy on Vercel

1. Import this GitHub repo in Vercel. Framework is Next.js. Leave the build command as `next build`.
2. Add the domain `rpplumbing.ca` in the Vercel project, then point the domain’s DNS at the records Vercel shows.
3. Add `www.rpplumbing.ca` as well if you want both names, and set one to redirect to the other.
4. The request form emails Richard through [Resend](https://resend.com). Verify the domain there, then set these environment variables on the Vercel project and redeploy:

   - `RESEND_API_KEY`
   - `RESEND_FROM` — for example `RP Plumbing <hello@rpplumbing.ca>`

Until those two variables are set, the form tells the visitor to call.

## Local

```bash
npm install
npm run dev
```
