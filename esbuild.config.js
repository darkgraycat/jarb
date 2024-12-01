const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

/** @type {string[]} */
const args = process.argv.slice(2);

/** @type {esbuild.BuildOptions} */
const config = {
  logLevel: "info",
  entryPoints: ["./src/index.tsx"],
  outfile: "public/build/bundle.js",
  bundle: true,
  define: {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || "production"),
  },
  loader: {
    ".png": "file",
    ".jpg": "file",
    ".svg": "file",
  },
  assetNames: "[dir]/[name]-[hash]",
  publicPath: "/build/",
  plugins: [sassPlugin()],
};

async function run() {
  if (!args.length) {
    return esbuild.build({
      ...config,
      minify: true,
      sourcemap: false,
    });
  }

  const ctx = await esbuild.context({
    ...config,
    minify: false,
    sourcemap: true,
  });

  // handle --watch
  if (args.includes("--watch")) {
    await ctx.watch();
  }

  // handle --serve
  if (args.includes("--serve")) {
    await ctx.serve({
      servedir: "public",
      port: process.env.PORT || 8080,
    });
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
