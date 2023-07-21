import buble from '@rollup/plugin-buble';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import sizes from 'build-utils/plugins/customized-rollup-plugin-sizes';
import fs from 'fs';
import { glob } from 'glob';
import { dependencies, peerDependencies } from 'package.json';
import {
  type InputOptions,
  type OutputChunk,
  type OutputOptions,
  rollup,
} from 'rollup';
import image from 'rollup-plugin-img';
import progress from 'rollup-plugin-progress';
import tsPlugin from 'rollup-plugin-typescript2';

type RollupOptions = InputOptions & { output?: OutputOptions };
type ConfigOptions = Omit<RollupOptions, 'input' | 'output'> &
  Required<Pick<RollupOptions, 'input' | 'output'>>;
/**
 * Prepare the list of entries
 * @param entries array of entries that need to be prepared or ignore single entry
 * @returns string{} | string
 */
const prepareEntries = (entries: string[] | string) =>
  Array.isArray(entries)
    ? entries.reduce(
        (prev, current) => ({
          ...prev,
          [current.replace(/\.tsx?$/, '').replace('src/', '')]: current,
        }),
        {},
      )
    : entries;

/**
 * Bundle package
 * @param options option to configure parcel to bundle package, `input` is required. Use default option if it's not specified
 * @example
 * {
 *   input: 'src/icons/*.tsx'
 * }
 */
const bundlePackage = async (
  options: ConfigOptions & { output: OutputOptions },
): Promise<OutputChunk[]> => {
  const defaultOptions: RollupOptions = {
    cache: false,
    external: Object.keys(peerDependencies).concat(Object.keys(dependencies)),
    maxParallelFileOps: 50,
    plugins: [
      nodeResolve({
        // Seems to evaluate falsiness, so put something
        resolveOnly: [''],
      }),
      image({
        limit: 10000,
      }),
      tsPlugin({
        tsconfigOverride: {
          compilerOptions: {
            module: 'esnext',
          },
        },
      }),
      buble({
        exclude: 'node_modules/**',
        include: '**/*.{js,mjs,jsx,ts,tsx,vue}',
        transforms: {
          dangerousForOf: true,
          dangerousTaggedTemplateString: true,
          modules: false,
        },
      }),
      terser(),
      progress({ clearLine: true }),
      sizes({ details: true }),
    ],
  };
  const configOptions: ConfigOptions = {
    ...defaultOptions,
    ...options,
  };
  let bundle: Awaited<ReturnType<typeof rollup>> | null = null;

  try {
    bundle = await rollup(configOptions);

    const { output } = await bundle.write(configOptions.output);
    /**
     * close bundle connection to cleanup their external processes or services
     * @ref https://rollupjs.org/javascript-api/#rollup-rollup
     * */
    await bundle.close();
    return output.filter(item => item.type === 'chunk') as OutputChunk[];
  } catch (err) {
    bundle?.close();
    console.error('Error bundling:', err); // eslint-disable-line no-console
    // stop the process if there is an error
    throw new Error('Error bundling');
  }
};

const generateAllModulesContent = async (
  bundles: OutputChunk[],
): Promise<string[]> =>
  bundles.flatMap(bundle => {
    const [, subFolderPath, fileName] =
      bundle.fileName.split(/(.*\/)*(.*)\.js/g) || [];
    // exclude all bundles that are not entry or just private components
    if (
      !bundle.isEntry ||
      /^_+/.test(fileName!) ||
      /__tests__/.test(subFolderPath!)
    ) {
      return [];
    }
    return [`import './${subFolderPath || ''}${fileName}';`];
  });

const animationsModules = glob.sync('src/animations/**/*.ts*');
const iconsModules = glob.sync('src/icons/**/*.ts*');
const utilsModules = glob.sync('src/utils/**/*.ts*');
const componentsModules = glob.sync('src/components/**/*.ts*');
const styleModules = glob.sync('src/styles/**/*.ts');

const allModules = animationsModules
  .concat(iconsModules, utilsModules, componentsModules, styleModules)
  /** Exclude dev folders */
  .filter(item => !item.includes('__tests__') && !item.includes('__stories__'));

const configs: ConfigOptions[] = [
  {
    input: prepareEntries(allModules),
    maxParallelFileOps: 200,
    output: {
      dir: 'dist',
      exports: 'auto',
      format: 'cjs',
      interop: 'auto',
      sourcemap: false,
    },
  },
];

/* Set max listener based on the size of bundleConfig (1 config will add 4 event listeners) */
process.stdout.setMaxListeners(configs.length * 4 + 1);
process.stderr.setMaxListeners(configs.length * 4 + 1);

const build = async () => {
  const bundledPackages = await Promise.all(configs.map(bundlePackage));
  const moduleContents = await Promise.all(
    // generate module contents
    bundledPackages.map(generateAllModulesContent),
  );

  fs.writeFileSync(
    // generate all modules ts file
    `./src/all.ts`,
    `${moduleContents
      .flat()
      .sort((a, b) => a.localeCompare(b))
      .join('\n')}\n`,
  );
};

build();
