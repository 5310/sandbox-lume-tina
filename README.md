- Deno has come a long way
  - No matter what I do, import maps DO NOT work with NPM

- Lume is the best way to do web standard frontend on Deno
  - I can continue to work with (almost) web standard files but still use TypeScript and Deno default tooling
  - Lume can't re-parse `.html` files, but just renaming them to `.md` works fine
  - And we also get to generate static pages however we want, JSX or Lit-HTML

- Tina CMS is still the only sensible configurable Git-backed CMS out there
  - Especially as ~~Netlify CMS~~ Decap CMS continues to languish
  - But Tina is still a hassle to set up, especially in a Deno project
  - And the heavy-handed React integrations are cringe, even if it tries to be framework agnostic
    - The only way to customize the the editor widgets is through React, which I can frankly tolerate
