<h1 align="center">SQLx-ts</h1>
<div align="center">
 <strong>
   🧰 The Typescript/Javascript SQL Toolkit
 </strong>
</div>

<br />

<div align="center">
Built to free Node developers from ORMs' unpredictably generated SQL queries
</div>

<br />

SQLx-ts is a CLI application featuring compile-time checked queries without a DSL and prevents broken SQL queries being run during runtime.

- **Compile time checked queries** - never ship a broken SQL query to production
- **Database Agnostic** - support for [PostgreSQL](http://postgresql.org/) and [MySQL](https://www.mysql.com/)
- **TypeScript and JavaScript** - supports for both [TypeScript](https://www.typescriptlang.org/) and JavaScript

### Installation

##### Install sqlx-ts npm module

If you are using npm
```bash
$ npm install sqlx-ts
```

If you are using yarn
```bash
$ yarn add sqlx-ts
```

And to use sqlx-ts in your code

In TypeScript based projects:

```typescript
import { sql } from 'sqlx-ts'

// ...
const query = sql`SELECT * FROM some_table;`
// ...
```


In Babel based projects:

```javascript
import { sql } from 'sqlx-ts'
const query = sql`SELECT * FROM some_table;`

// ... or

const { sql } = require('sqlx-ts')
const query = sql`SELECT * FROM some_table;`
```

##### Installing binary

The binary name for sqlx-ts is `sqlx-ts`.

[Archives of precompiled binaries of sqlx-ts are available for Windows, macOS and Linux](https://github.com/JasonShin/sqlx-ts/releases). Linux and Windows binaries are static executables. Users of platforms not explicitly mentioned below are advised to download one of these archives.

If you're a **macOS** user, then you can install sqlx-ts from via install.sh:

```bash
$ curl -LSfs https://jasonshin.github.io/sqlx-ts/install.sh | \
    sh -s -- --os darwin
```

If you're a **Windows** user, then you can install sqlx-ts from via install.sh:

```bash
$ curl -LSfs https://jasonshin.github.io/sqlx-ts/install.sh | \
    sh -s -- --os win32
```

If you're a **Linux** user, then you can install sqlx-ts from via install.sh:

```bash
$ curl -LSfs https://jasonshin.github.io/sqlx-ts/install.sh | \
    sh -s -- --os linux
```

To install a specific artifact, [go to the release page to find the exact name of the artifact](https://github.com/JasonShin/sqlx-ts/releases)

```bash
$ curl -LSfs https://jasonshin.github.io/sqlx-ts/install.sh | \
    sh -s -- --artifact sqlx_ts_v0.1.0_x86_64-apple-darwin.tar.gz
```

Upgrading to a new version can be done by grabbing the next version of the sqlx-ts artifact and use `--force` command from install.sh

```bash
$ curl -LSfs https://jasonshin.github.io/sqlx-ts/install.sh | \
    sh -s -- --artifact sqlx_ts_v0.2.0_x86_64-apple-darwin.tar.gz --force
```

For more advanced usage, please check `--help` command of install.sh

```bash
$ curl -LSfs https://jasonshin.github.io/sqlx-ts/install.sh | \
    sh -s --help
```

### Troubleshooting

#### MacOS

1. Running the binary simply returns `[1]    <PID> killed     ./sqlx-ts --help`

This is because sqlx-ts haven't yet solved the developer license issue described https://users.
rust-lang.org/t/distributing-cli-apps-on-macos/70223/13 for MacOS specifically.

To fix this, you will need to goto `System Preferences -> Security & Privacy`

<img src="https://i.imgur.com/nGjqlgI.png" width="350px">

You will see `sqlx-ts` binary blocked. Please manually enable it and you can start using sqlx-ts 
locally.

<br />

### Motivation

Rust's philosophy of guaranteed compile-time safety of your code has always inspired me. Rust is still new and many seasoned developers would view Rust's increased benefit/cost ratio claims are as yet unproven. However, there are lessons from these new technologies that we can bring back to our everyday languages such as JavaScript and TypeScript. [SQLx](https://github.com/launchbadge/sqlx) is a great example of this, although the idea isn't directly co-related to Rust, but its philosophy well-aligns with Rust's overall ecosystem.
