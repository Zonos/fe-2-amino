import React from 'react';

import { useStableUniqueId } from 'hooks';

export const LI = () => {
  const ids = useStableUniqueId(3);
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <rect width="16" height="12" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="#E31D1C"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12H16V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V6H16V0H0Z"
            fill="#2E42A5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.39917 5.52652C2.39917 5.52652 3.0025 5.90207 4.40059 5.90207C5.79867 5.90207 6.54077 5.52652 6.54077 5.52652C6.54077 5.52652 5.44435 4.88916 4.46401 4.88916C3.48367 4.88916 2.39917 5.52652 2.39917 5.52652Z"
            fill="black"
          />
          <path
            d="M2.43528 3.37122L2.32724 3.43409L2.36339 3.49622H2.43528H6.5979H6.68949L6.71709 3.40889L6.5979 3.37122L6.71711 3.4088L6.71715 3.4087L6.71724 3.40841L6.7175 3.40757L6.71836 3.40477L6.72131 3.3949C6.72379 3.38646 6.72725 3.37437 6.73138 3.35901C6.73965 3.32831 6.75067 3.28443 6.76208 3.23048C6.78482 3.12292 6.80943 2.97367 6.81629 2.80806C6.8297 2.48396 6.7762 2.06139 6.46161 1.78791C6.16553 1.53052 5.75265 1.4025 5.36271 1.33689C4.97003 1.27082 4.58326 1.26538 4.32702 1.26538C3.79761 1.26538 3.31174 1.3281 2.52532 1.77348C2.30583 1.89779 2.18033 2.07083 2.12091 2.26048C2.06265 2.4464 2.06996 2.64106 2.10097 2.81171C2.13212 2.98308 2.1886 3.13799 2.23652 3.24907C2.26061 3.30491 2.28286 3.35041 2.29926 3.38225C2.30746 3.39819 2.31423 3.41075 2.31905 3.41952L2.32478 3.42979L2.32644 3.4327L2.32695 3.43359L2.32712 3.43389L2.32719 3.434C2.32721 3.43405 2.32724 3.43409 2.43528 3.37122Z"
            fill="#FFD83D"
            stroke="black"
            strokeWidth="0.25"
          />
          <path
            d="M1.94307 3.453L2.00134 3.56358C1.94307 3.453 1.94311 3.45297 1.94317 3.45295L1.94329 3.45288L1.94358 3.45273L1.9444 3.4523L1.94693 3.451L1.95561 3.44665C1.963 3.44301 1.97361 3.4379 1.98744 3.43154C2.0151 3.41883 2.05565 3.40111 2.10917 3.38008C2.21622 3.33803 2.37512 3.28274 2.58646 3.22772C3.00925 3.11765 3.64139 3.00879 4.48758 3.00879C5.33377 3.00879 5.96591 3.11765 6.38869 3.22772C6.60004 3.28274 6.75894 3.33803 6.86599 3.38008C6.91951 3.40111 6.96006 3.41883 6.98772 3.43154C7.00155 3.4379 7.01216 3.44301 7.01955 3.44665L7.02823 3.451L7.03076 3.4523L7.03158 3.45273L7.03187 3.45288L7.03199 3.45295C7.03204 3.45297 7.03209 3.453 6.97381 3.56358L7.03209 3.453L7.12944 3.5043L7.09089 3.60737L6.49844 5.19155L6.45715 5.30197L1.94307 3.453ZM1.94307 3.453L1.84658 3.50384L1.88388 3.60633L2.46036 5.19051L2.50061 5.30113L2.61342 5.26759L1.94307 3.453ZM6.34451 5.26721L6.34453 5.26721L2.61345 5.26758L2.61349 5.26757L2.61388 5.26745L2.61569 5.26692L2.62334 5.26471L2.65414 5.25602C2.68134 5.24848 2.72155 5.23762 2.77292 5.22455C2.8757 5.19839 3.02297 5.16343 3.20004 5.12845C3.55498 5.05833 4.02605 4.98888 4.49705 4.98888C4.96793 4.98888 5.43014 5.0583 5.77602 5.12833C5.94861 5.16328 6.0914 5.1982 6.19079 5.22431C6.24047 5.23736 6.27926 5.24819 6.30546 5.25571L6.33508 5.26437L6.3424 5.26656L6.34411 5.26709L6.34448 5.2672L6.34451 5.26721Z"
            fill="#FFD83D"
            stroke="black"
            strokeWidth="0.25"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="3.05884"
            y="-1"
            width="3"
            height="3"
            fill="black"
          >
            <rect fill="white" x="3.05884" y="-1" width="3" height="3" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.56304 0H4.31094L4.34339 0.461361L4.05884 0.422642V0.739623L4.34776 0.699826L4.31094 1.42642H4.56304L4.52572 0.698603L4.81514 0.739623V0.422642L4.53096 0.463433L4.56304 0Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.56304 0H4.31094L4.34339 0.461361L4.05884 0.422642V0.739623L4.34776 0.699826L4.31094 1.42642H4.56304L4.52572 0.698603L4.81514 0.739623V0.422642L4.53096 0.463433L4.56304 0Z"
            fill="#FFD83D"
          />
          <path
            d="M4.31094 0V-0.25H4.04274L4.06155 0.0175417L4.31094 0ZM4.56304 0L4.81244 0.0172624L4.83094 -0.25H4.56304V0ZM4.34339 0.461361L4.30968 0.709078L4.61435 0.750534L4.59277 0.443819L4.34339 0.461361ZM4.05884 0.422642L4.09254 0.174924L3.80884 0.13632V0.422642H4.05884ZM4.05884 0.739623H3.80884V1.02642L4.09295 0.987284L4.05884 0.739623ZM4.34776 0.699826L4.59744 0.712479L4.61272 0.410969L4.31365 0.452164L4.34776 0.699826ZM4.31094 1.42642L4.06126 1.41376L4.04795 1.67642H4.31094V1.42642ZM4.56304 1.42642V1.67642H4.82619L4.81271 1.41361L4.56304 1.42642ZM4.52572 0.698603L4.5608 0.451077L4.26051 0.408518L4.27605 0.711406L4.52572 0.698603ZM4.81514 0.739623L4.78006 0.987149L5.06514 1.02755V0.739623H4.81514ZM4.81514 0.422642H5.06514V0.134194L4.77962 0.175178L4.81514 0.422642ZM4.53096 0.463433L4.28156 0.446171L4.26019 0.754862L4.56648 0.710897L4.53096 0.463433ZM4.31094 0.25H4.56304V-0.25H4.31094V0.25ZM4.59277 0.443819L4.56032 -0.0175417L4.06155 0.0175417L4.09401 0.478902L4.59277 0.443819ZM4.02513 0.670359L4.30968 0.709078L4.3771 0.213643L4.09254 0.174924L4.02513 0.670359ZM4.30884 0.739623V0.422642H3.80884V0.739623H4.30884ZM4.31365 0.452164L4.02472 0.491961L4.09295 0.987284L4.38187 0.947487L4.31365 0.452164ZM4.56062 1.43907L4.59744 0.712479L4.09808 0.687172L4.06126 1.41376L4.56062 1.43907ZM4.56304 1.17642H4.31094V1.67642H4.56304V1.17642ZM4.27605 0.711406L4.31337 1.43922L4.81271 1.41361L4.77539 0.6858L4.27605 0.711406ZM4.85022 0.492096L4.5608 0.451077L4.49064 0.94613L4.78006 0.987149L4.85022 0.492096ZM4.56514 0.422642V0.739623H5.06514V0.422642H4.56514ZM4.56648 0.710897L4.85066 0.670105L4.77962 0.175178L4.49544 0.215969L4.56648 0.710897ZM4.31364 -0.0172624L4.28156 0.446171L4.78037 0.480695L4.81244 0.0172624L4.31364 -0.0172624Z"
            fill="black"
            mask={`url(#${ids[2]})`}
          />
        </g>
      </g>
    </svg>
  );
};
