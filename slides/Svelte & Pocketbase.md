
Pocketbase & SvelteKit

---

![[promo.png]]

---

#### ghostdevv/svelte-london-pocketbase-talk

notes:

slides available here

---

![[best-stack.png]]

notes:

set the scene, you've got an amazing project idea, you have your favourite javascript framework (SvelteKit)

---

![[what-database.png|500]]
notes:

- what database?
- you love pg but it's harder to iterate fast
- you're at the free tier limit or don't want to pay 
- worried about lock in or enshitiffication

---

![[self-hosting.png]]

notes:

- you want to self host
- self hosting >

---

<!-- slide bg="[[pocketbase-homepage.png]]" -->

notes:

meet pocketbase, it's a
- single go binary
- powered by SQLite (which is 100% blazingly fast hyper speed before anyone asks)
- has features (auth, storage, realtime, etc) to iterate

---
## Easy Deployment

```bash
$ ./pocketbase serve
```

notes:

- single executable
- best deployment experience
- e.g. appwrite is another great self-hostable thing like pocketbase with more features, but the docker compose file alone is 828 lines
- sweet spot between features and complexity

---

<style>a { font-size: 2rem }</style>

#### Proxy With Caddy

```caddyfile
example.com {
	reverse_proxy http://127.0.0.1:8090
}
```

https://pocketbase.io/docs/going-to-production/

notes:

proxy easily with caddy

---

<!-- slide bg="[[pocketbase-overview.png]]" -->

notes:

- well designed admin ui

---

<!-- slide bg="[[pocketbase-logs.png]]" -->

---

<!-- slide bg="[[pocketbase-logs-expanded.png]]" -->

---

<!-- slide bg="[[pocketbase-settings.png]]" -->

---

![[covering.png|700]]

notes:

- what features of pocketbase I am covering
- integrating with Svelte(Kit)

---

### More Features

- Realtime
- Backups
- Extending with JS or Go
- Migrations

https://pocketbase.io/docs

notes:

stuff I am not covering but you should checkout

---

![[collections.png|700]]

notes:

- tables

---

<div style="display: flex; gap: 16rem">

### base

### view

</div>

notes:

- pb has two collection types
- might feel familiar if you're used to SQL databases
- but both types share these in common...

---

<!-- slide bg="[[collections-expl.png]]" -->

notes:

- fields (columns)
- records (rows)

---

![[collections-field-types.png]]

notes:

- have any of these data types
- numbers can have min, max, etc etc

---

### BASE

notes:

- most useful

---

<!-- slide bg="[[collections-edit.png]]" -->

notes:

- can handle any application data
- system fields: `id`, `created`, `updated` managed for us
- constraints
- CRUD data

---

### VIEW

notes:

- special
- can only be read from
- populated by SQL statement

---

<!-- slide bg="[[view-collection-edit.png]]" -->

notes:

- generated from SQL `SELECT` statement
- can still be read from like normal collection
- can't CUD

---

https://pocketbase.io/demo

notes:

- all the screenshots above taken from here

---

![[rules-and-filtering.png|700]]
notes:

- intuitive syntax

---

![[rules-lang.png]]

---

<!-- slide bg="[[pocketbase-overview.png]]" -->

---

<!-- slide bg="[[collection-filtered.png]]" -->

notes:

filter by email

---

### API Rules

![[pocketbase-example-rules-collection.png|500]]

notes:

- CRUD rules
- uses same syntax with some special fields
- admin, empty

---

![[auth.png|450]]
notes:

similar auth story

---

![[auth-methods.png]]

notes:

- 3 main auth methods

---

![[oauth-types.png]]

notes:

- bunch of auth methods
- odic

---

<!-- slide bg="[[svelte-bg.png]]" -->

notes:

svelte event

---

<!-- slide bg="#121214" -->

![[word-cloud.png]]

notes:

word cloud

---

<style> #pb { width: 100%; max-width: 80vw; height: 100%; max-height: 100dvh; } </style>
<iframe id="pb" src="https://pb-talk-tmp.ghostdev.xyz/_"></iframe>

---

#### *live* build time

---

svelte-london-pocketbase-talk.pages.dev

<style> #t { width: 100%; max-width: 80vw; height: 100%; max-height: 100dvh; } </style>
<iframe id="t" src="https://svelte-london-pocketbase-talk.pages.dev"></iframe>

---

![[promo.png]]

ghostdevv/svelte-london-pocketbase-talk
