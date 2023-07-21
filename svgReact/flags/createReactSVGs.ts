import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import {
  type GenerateIconType,
  type SvgList,
} from 'svgReact/flags/types/TypeGenerateIcon';

const addWrapper = (id: string) => `{\`${id}\`}`;

const pascalCased = (string: string) =>
  string.charAt(0).toUpperCase() +
  string.replace(/-([a-z])/g, letters => letters[1]!.toUpperCase()).slice(1);

const convertSvgsObj = (destFolder: string): SvgList[] =>
  readdirSync(destFolder).reduce<SvgList[]>(
    (accumulator, originalFileName) => [
      ...accumulator,
      {
        componentName: pascalCased(originalFileName).replace('.svg', ''),
        newFileName: pascalCased(originalFileName).replace('.svg', '.tsx'),
        originalFileName,
      },
    ],
    [],
  );

export const generateComponentContent = ({
  componentName,
  fileContent,
}: {
  componentName: string;
  fileContent: string;
}) => {
  let result = fileContent;
  /** @desc We need to preserve the viewbox */
  const viewBoxMatches = result.match(/viewBox="(.*?)"/g);
  const viewBoxes = viewBoxMatches
    ? viewBoxMatches.map(x => x.replace(/viewBox=/, '').replace(/"/g, ''))
    : [];
  const viewBox = viewBoxes.find(Boolean) || '0 0 16 12';

  /** @desc We need our ids to be unique */
  const maskIdMatches = result.match(/id="(.*?)"/g);
  const maskIds = maskIdMatches
    ? maskIdMatches.map(x => x.replace(/id=/, '').replace(/"/g, ''))
    : [];
  maskIds.forEach((maskId, index) => {
    const idRegex = new RegExp(`"${maskId}"`, 'gi');
    const urlRegex = new RegExp(`"url\\(#${maskId}\\)"`, 'gi');
    const hrefRegex = new RegExp(`xlink:href="#${maskId}"`, 'gi');
    const newId = `\${ids[${index}]}`;
    result = result
      .replace(idRegex, `${addWrapper(newId)}`)
      .replace(urlRegex, `${addWrapper(`url(#${newId})`)}`)
      .replace(hrefRegex, `xlink:href=${addWrapper(`#${newId}`)}`);
  });

  const svg = result
    .replace(/(?!\w):\w/g, attribute =>
      attribute.replace(':', '').toUpperCase(),
    )
    /** @desc Remove style props */
    .replace(/style="([^"]*)"/gi, '')
    /** @desc Camecase attributes */
    .replace(/-([a-z])/g, (m, w) => w.toUpperCase())
    /** @desc Remove <svg > */
    .replace(/<svg(.*?)>/gi, '')
    /** @desc Remove </svg > */
    .replace(/<\/svg>/gi, '');

  return [
    `import { forwardRef } from 'react';`,
    `import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';`,
    maskIds.length &&
      `import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';`,
    `type Props = {`,
    `height: number;`,
    `width: number;`,
    `};`,
    `export const ${componentName} = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {`,
    maskIds.length && `const ids = useStableUniqueId(${maskIds.length});`,
    `return (`,
    `<FlagIconBase height={height} width={width} ref={ref} viewBox="${viewBox}" >`,
    svg,
    `</FlagIconBase>`,
    `  );`,
    `});`,
  ]
    .filter(Boolean)
    .join('\n');
};

export const createReactSVGs = ({
  inputFolder,
  outputFolder,
}: GenerateIconType) => {
  const names = convertSvgsObj(inputFolder);
  names.forEach(name => {
    const fileContent = readFileSync(
      `${inputFolder}/${name.originalFileName}`,
      {
        encoding: 'utf8',
      },
    );

    const component = generateComponentContent({
      componentName: name.componentName,
      fileContent,
    });

    if (name.originalFileName.includes('.svg')) {
      if (!existsSync(outputFolder)) {
        mkdirSync(outputFolder);
      }

      writeFileSync(`${outputFolder}/${name.newFileName}`, component);
    }
  });
};
