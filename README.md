# Sapiens Kitchen

The design, complete menus, photographs, and generated imagery are at the repository root. The live review site is https://sapiens-kitchen-reimagined.threemagicoder.chatgpt.site.

The live Sites deployment has a server-side password gate. Its password and session key are stored as runtime secrets, never in this repository. Every website page and content asset requires a valid session; the login screen alone has public access to the brand mark and a font. Browser-session cookies have a signed 12-hour expiry, and authenticated pages provide a Lock site action.

## Build the protected server

Run `npm run build` and `npm run validate`. There are no package dependencies. The build embeds the complete site into `dist/server/index.js`, an ESM Worker exporting `default.fetch(request, env)`. The deployment manifest is copied to `dist/.openai/hosting.json`.

Configure `SAPIENS_SITE_PASSWORD` and `SAPIENS_SESSION_SECRET` as server secrets, and set `SAPIENS_SITE_ORIGIN` to the deployment origin. The signing key should be at least 32 random characters. Missing configuration fails closed. Changing the password or signing key invalidates existing sessions.

The password gate runs in the Worker server. Serving the root HTML files directly on a static-only host does not run this protection; deploy the protected Worker build to enforce it. The existing Sites platform sharing policy is an additional access boundary on the linked live review site.

## Images and content

The 12 new decorative images have 1536 px and 768 px WebP variants. `image-collection-notes.txt` records all generation prompts, final asset paths, and page placements. These images are visual inspiration rather than photographs of the actual premises, chef, supplier, or products for sale. The restaurant and chef photographs remain in place.

The complete menus and the three owner-supplied texts are preserved. Existing ordering, payments, and reservations remain connected to the restaurant’s established services.
