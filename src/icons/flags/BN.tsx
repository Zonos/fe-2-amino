import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const BN = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 24"
      width={width}
    >
      <path
        d="M24 18a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 18V6a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 6v12Z"
        fill="#F7E017"
      />
      <path d="M24 18 0 12.667V9.333l24 5.334V18Z" fill="#141414" />
      <path d="M24 14.667 0 9.333V6l24 5.333v3.334Z" fill="#EEE" />
      <path
        d="M14.397 9.957a2.946 2.946 0 1 1-4.96 0 3.38 3.38 0 1 0 4.96 0Zm-7.928.38c.358.079.437.216.419.505 0 0 .182.036.309.217.127.182.244.362.462.435.218.072.39.216.39.652v1.613s-.04.163.05.38c.091.218.04.526-.631.526-.67 0-.675-.29-.585-.507.091-.217.196-.4.196-.4v-1.386s-.131-.19-.312-.317c-.182-.127-.564-.58-.618-1.016-.055-.434-.156-.806.32-.702Zm10.838 0c-.358.079-.438.216-.42.505 0 0-.182.036-.309.217-.127.182-.179.362-.396.435-.217.072-.323.216-.323.652v1.613s-.026.163-.118.38c-.09.218-.071.526.599.526.67 0 .725-.29.634-.507-.09-.217-.146-.4-.146-.4v-1.386s.065-.19.245-.317c.182-.127.531-.58.586-1.016.055-.434.123-.806-.352-.702Z"
        fill="#CF1B26"
      />
      <path
        d="M15.623 16.492s.217-.435-.018-.525c-.236-.091-.707 0-.707 0s.393-.498.017-.708c-.374-.208-.631.308-.959.544-.327.236-.657.366-1.057.498-.399.133-.919.19-.919.19s-.583-.057-.982-.19c-.4-.132-.792-.263-1.12-.498-.328-.236-.585-.753-.96-.544-.374.209.02.708.02.708s-.472-.091-.707 0c-.236.09-.018.525-.018.525-.525.073-.342.4-.342.4s.131-.17.675-.17.769.532 1.131.532c.363 0 .36-.345.36-.345.672.562 1.944.562 1.944.562s1.209 0 1.88-.562c0 0-.034.345.328.345.363 0 .572-.531 1.116-.531.544 0 .667.168.667.168s.178-.326-.349-.399Zm-1.44-7.047c-.398-.109-.825-.616-1.387-.616s-.817.435-.817.435-.311-.435-.873-.435-1.046.507-1.445.616c-.399.109-.78 0-.78 0 .091.416.557.512.557.512.05.258.44.267.44.267.052.308.617.096.617.096s-.035.303.255.267c.29-.036.781-.544.781-.544s-.141.145-.122.276c.018.132.243.122.243.122-.2.2.16.436.16.436l.167-.127.11.127s.332-.236.132-.436c0 0 .21.01.229-.122.018-.132-.13-.276-.13-.276s.488.508.778.544c.29.036.253-.267.253-.267s.565.213.618-.096c0 0 .39-.01.438-.267 0 0 .466-.096.557-.512 0 0-.381.109-.78 0Zm-2.836-1.632c0-.08.256-.145.572-.145.315 0 .571.065.571.145 0 .08-.256.145-.571.145-.316 0-.572-.065-.572-.145Z"
        fill="#CF1B26"
      />
      <path
        d="M12.588 8.103c-.018-.127-.095-.145-.095-.145s-.299.077-.575.077c-.277 0-.571-.077-.571-.077s-.073.018-.091.145a5.49 5.49 0 0 1-.145.517l.236-.259.2.259.199-.259.172.259.177-.259.202.259.2-.259.236.259s-.126-.39-.145-.517Zm-.609-1.549v.707l.486.208-.187-.29.381-.182-.68-.443Zm-.206 2.066h.299v.761h-.3V8.62Zm.544 5.384s.196-.271.155-.476c-.04-.204-.23-.526-.285-.732-.054-.206.132-.397.132-.397l-.144-.027s.194-.177.144-.367c-.05-.191-.144-.435-.172-.652-.027-.218.172-.476.172-.476l-.258.149-.14-.15-.137.15-.253-.15s.199.259.172.477c-.028.217-.123.462-.172.652-.05.19.145.367.145.367l-.145.027s.186.191.131.397c-.054.206-.245.528-.285.732-.041.205.154.476.154.476l-.39-.081c.213.434.462.488.78.488s.57-.054.783-.488l-.387.081Z"
        fill="#CF1B26"
      />
    </FlagIconBase>
  ),
);
