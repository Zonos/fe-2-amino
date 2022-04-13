import React from 'react';

import { useStableUniqueId } from 'hooks';

export const VI = () => {
  const ids = useStableUniqueId(3);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V15H20V0H0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0016 5.13421C11.1528 5.22027 11.2435 5.44061 11.2435 5.44061H8.68852L8.8649 5.13421C8.8649 5.13421 8.68852 5.05415 8.77725 5.05415C8.86597 5.05415 9.11906 4.69907 9.11906 4.69907H9.01347C9.01347 4.69907 8.95915 4.61074 9.11906 4.61074C9.27897 4.61074 9.4067 4.0392 9.4067 4.0392C9.4067 4.0392 9.51161 3.7718 9.25479 3.70431C8.99797 3.63682 8.68852 3.92786 8.68852 3.92786C8.68852 3.92786 8.76402 3.46223 8.8649 3.36138C8.91179 3.31451 8.9993 3.30706 9.07955 3.30022C9.17199 3.29235 9.25479 3.2853 9.25479 3.21978C9.25479 3.09737 9.55547 3.00195 10.047 3.00195C10.5385 3.00195 10.717 3.58899 10.717 3.70431C10.717 3.81963 10.8851 4.43256 10.8851 4.43256C10.8851 4.43256 10.717 4.43256 10.717 4.51163C10.717 4.5907 11.2435 4.9324 11.2435 4.9324C11.2435 4.9324 10.8503 5.04814 11.0016 5.13421ZM1.73576 3.04339C1.93179 2.95928 3.92385 3.5529 5.41608 3.99757C6.2742 4.25329 6.96703 4.45974 7.05798 4.45974C7.30709 4.45974 7.77575 5.06293 7.54142 5.31682C7.30709 5.57071 7.22782 5.71908 7.38462 5.71908C7.54142 5.71908 8.33229 5.51383 8.33229 5.51383V7.87118C8.33229 7.87118 7.57434 8.05108 7.38462 7.87118C7.29275 7.78406 7.15263 7.77883 7.03253 7.77435C6.90462 7.76958 6.79942 7.76565 6.79942 7.66455C6.79942 7.46851 6.36268 7.43769 6.36268 7.43769C6.36268 7.43769 5.95851 7.30441 5.95851 7.17901C5.95851 7.05362 5.69403 6.69919 5.69403 6.69919C5.69403 6.69919 4.68604 6.1285 3.829 5.50226C3.65587 5.37575 3.48476 5.25656 3.32094 5.14244L3.32093 5.14243C2.67382 4.69166 2.14037 4.32006 2.04451 3.88931C1.59691 3.44607 1.42701 3.17587 1.73576 3.04339ZM8.02737 8.01988C8.02737 8.01988 7.688 8.25372 7.31252 8.87988C7.12782 9.18792 7.11295 9.45928 7.1022 9.6555C7.0911 9.85815 7.08439 9.98066 6.8995 9.98066C6.68369 9.98066 6.52711 10.0273 6.39968 10.0653C6.31223 10.0914 6.23851 10.1134 6.16878 10.1134C5.99744 10.1134 5.66846 10.7602 5.83295 10.9098C5.99744 11.0595 6.68665 11.2981 6.68665 10.9098C6.68665 10.5216 6.87202 10.301 7.20885 10.301C7.54568 10.301 8.14775 10.078 8.14775 9.58867C8.14775 9.09932 8.80421 9.13426 8.80421 9.13426L8.02737 8.01988ZM14.7258 3.99757C16.218 3.5529 18.2101 2.95928 18.4061 3.04339C18.7149 3.17587 18.545 3.44607 18.0974 3.88931C18.0015 4.32006 17.4681 4.69166 16.821 5.14243C16.6571 5.25655 16.486 5.37575 16.3129 5.50226C15.4559 6.1285 14.4479 6.69919 14.4479 6.69919C14.4479 6.69919 14.1834 7.05362 14.1834 7.17901C14.1834 7.30441 13.7792 7.43769 13.7792 7.43769C13.7792 7.43769 13.3425 7.46851 13.3425 7.66455C13.3425 7.76565 13.2373 7.76958 13.1094 7.77435C12.9893 7.77883 12.8491 7.78406 12.7573 7.87118C12.5676 8.05108 11.8096 7.87118 11.8096 7.87118V5.51383C11.8096 5.51383 12.6005 5.71908 12.7573 5.71908C12.9141 5.71908 12.8348 5.57071 12.6005 5.31682C12.3661 5.06293 12.8348 4.45974 13.0839 4.45974C13.1749 4.45974 13.8677 4.25329 14.7258 3.99758L14.7258 3.99757ZM12.1145 8.01988C12.1145 8.01988 12.4539 8.25372 12.8294 8.87988C13.0141 9.18792 13.0289 9.45928 13.0397 9.6555C13.0508 9.85815 13.0575 9.98066 13.2424 9.98066C13.4582 9.98066 13.6148 10.0273 13.7422 10.0653C13.8297 10.0914 13.9034 10.1134 13.9731 10.1134C14.1444 10.1134 14.4734 10.7602 14.3089 10.9098C14.1444 11.0595 13.4552 11.2981 13.4552 10.9098C13.4552 10.5216 13.2699 10.301 12.933 10.301C12.5962 10.301 11.9941 10.078 11.9941 9.58867C11.9941 9.09932 11.3377 9.13426 11.3377 9.13426L12.1145 8.01988ZM8.46312 9.65141C8.46312 9.43581 8.84406 9.27326 8.84406 9.27326L9.99072 8.78936C9.99072 8.78936 9.99661 8.89855 10.0054 9.07989C10.0142 8.89855 10.0201 8.78936 10.0201 8.78936L11.1667 9.27326C11.1667 9.27326 11.5477 9.43581 11.5477 9.65141C11.5477 9.75944 11.7097 9.95045 11.8714 10.141L11.8714 10.1411C12.0324 10.3308 12.193 10.5202 12.193 10.6268C12.193 10.8149 11.758 11.2378 11.4953 11.4932L11.4953 11.4932C11.4595 11.528 11.4268 11.5598 11.399 11.5873C11.3388 11.6469 11.2738 11.7206 11.2062 11.7972L11.2062 11.7972C11.013 12.0163 10.7992 12.2587 10.6198 12.2587C10.4937 12.2587 10.3917 12.3465 10.294 12.4306C10.2042 12.5079 10.1181 12.5821 10.0201 12.5821C10.0149 12.5821 10.01 12.5797 10.0054 12.575C10.0008 12.5797 9.99587 12.5821 9.99072 12.5821C9.89273 12.5821 9.80656 12.5079 9.71677 12.4306C9.6191 12.3465 9.51713 12.2587 9.39099 12.2587C9.21161 12.2587 8.99779 12.0163 8.80457 11.7972C8.73702 11.7206 8.67198 11.6469 8.61182 11.5873C8.58397 11.5598 8.5514 11.5281 8.51562 11.4933L8.51556 11.4933L8.5155 11.4932C8.25282 11.2378 7.81777 10.8149 7.81777 10.6268C7.81777 10.5202 7.9784 10.3308 8.13939 10.141L8.13939 10.141L8.13939 10.141C8.30108 9.95045 8.46312 9.75944 8.46312 9.65141Z"
            fill="#E8AA00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.38143 6.67076C4.40643 6.95993 4.48864 7.13043 4.48864 7.13043C4.48864 7.13043 4.63334 7.35803 4.7154 7.36072C4.75755 7.46545 4.80347 7.57283 4.85257 7.68218C5.0778 8.28224 5.3847 9.07069 5.699 9.78886C5.67883 9.77354 5.64967 9.75674 5.60982 9.73811C5.3469 9.61517 5.15813 9.60112 5.15813 9.60112C5.15813 9.60112 4.80571 9.61617 4.84209 9.71615C4.87848 9.81612 5.31542 10.0333 5.49283 9.96869C5.51261 9.96149 5.53269 9.95456 5.55241 9.94776C5.63402 9.9196 5.70933 9.89362 5.7302 9.85986C5.77198 9.95454 5.81384 10.0478 5.85562 10.1391C5.59335 10.0167 5.40519 10.0027 5.40519 10.0027C5.40519 10.0027 5.05277 10.0178 5.08915 10.1178C5.12554 10.2177 5.56248 10.4349 5.73989 10.3703C5.75966 10.3631 5.77975 10.3562 5.79947 10.3494C5.84861 10.3324 5.89547 10.3162 5.92953 10.2987C6.24623 10.9739 6.55197 11.513 6.77021 11.6491H7.21054C7.21054 11.6491 6.82998 11.1112 6.35034 10.3582C6.49485 10.2557 6.69619 10.0292 6.69619 9.88667C6.69619 9.86562 6.69655 9.84438 6.6969 9.82352C6.6997 9.65726 6.70208 9.5157 6.51953 9.69787C6.31407 9.90289 6.23631 10.0755 6.23631 10.0755C6.23631 10.0755 6.22696 10.105 6.21657 10.1466C6.17803 10.0852 6.13904 10.0226 6.09974 9.95911C6.24447 9.85778 6.44913 9.62872 6.44913 9.48506C6.44913 9.46402 6.44949 9.44277 6.44984 9.42192C6.45264 9.25565 6.45502 9.11409 6.27247 9.29626C6.06702 9.50128 5.98925 9.67386 5.98925 9.67386C5.98925 9.67386 5.97971 9.70403 5.96919 9.7463C5.91372 9.65509 5.85792 9.56231 5.80216 9.46839C5.94358 9.39375 6.20207 9.12442 6.20207 8.96297C6.20207 8.94193 6.20243 8.92068 6.20278 8.89983C6.20558 8.73356 6.20796 8.59201 6.02541 8.77417C5.81996 8.97919 5.74219 9.15177 5.74219 9.15177C5.74219 9.15177 5.71894 9.22527 5.70505 9.30355C5.6321 9.17874 5.55957 9.05236 5.48827 8.92534C5.49045 8.92567 5.49274 8.92584 5.49513 8.92584C5.60152 8.92584 5.95501 8.58952 5.95501 8.40072C5.95501 8.37968 5.95537 8.35844 5.95572 8.33759V8.33759V8.33759V8.33759V8.33759V8.33758V8.33758V8.33758V8.33758V8.33758C5.95852 8.17132 5.96091 8.02976 5.77835 8.21192C5.5729 8.41694 5.49513 8.58952 5.49513 8.58952C5.49513 8.58952 5.44281 8.75491 5.44825 8.85373C5.34989 8.67701 5.25421 8.4994 5.16337 8.32337L5.16572 8.32343C5.27211 8.32343 5.6256 7.98711 5.6256 7.79831C5.6256 7.77727 5.62596 7.75603 5.62631 7.73518V7.73518V7.73518V7.73518V7.73518V7.73517V7.73517V7.73517V7.73517C5.62911 7.56891 5.63149 7.42735 5.44894 7.60952C5.24349 7.81453 5.16572 7.98711 5.16572 7.98711C5.16572 7.98711 5.11862 8.13601 5.11844 8.23566C5.02297 8.04785 4.93346 7.86234 4.85257 7.68218C4.80911 7.5664 4.7687 7.45763 4.73185 7.35773C4.7371 7.35544 4.74193 7.35179 4.74628 7.34661C4.81466 7.26511 4.78425 6.77814 4.63962 6.65679C4.6235 6.64326 4.60745 6.62933 4.5917 6.61565C4.46614 6.50664 4.35923 6.41382 4.38143 6.67076ZM4.87027 7.41051C4.87027 7.41051 4.88432 7.22174 5.00726 6.95882C5.1165 6.7252 5.16267 6.85903 5.21691 7.01623L5.21691 7.01624C5.22372 7.03595 5.23064 7.05604 5.23784 7.07581C5.30241 7.25322 5.08527 7.69016 4.98529 7.72654C4.88532 7.76293 4.87027 7.41051 4.87027 7.41051ZM5.36276 9.21602C5.09984 9.09308 4.91107 9.07903 4.91107 9.07903C4.91107 9.07903 4.55865 9.09409 4.59504 9.19406C4.63142 9.29403 5.06836 9.51118 5.24577 9.4466C5.26555 9.43941 5.28563 9.43248 5.30535 9.42567C5.46254 9.37144 5.59638 9.32526 5.36276 9.21602ZM4.66401 8.51678C4.66401 8.51678 4.85278 8.53083 5.1157 8.65377C5.34932 8.76301 5.21549 8.80919 5.05829 8.86342C5.03857 8.87023 5.01849 8.87716 4.99871 8.88435C4.8213 8.94893 4.38436 8.73178 4.34798 8.63181C4.31159 8.53184 4.66401 8.51678 4.66401 8.51678ZM4.90982 8.09152C4.6469 7.96858 4.45813 7.95453 4.45813 7.95453C4.45813 7.95453 4.10571 7.96959 4.14209 8.06956C4.17848 8.16953 4.61542 8.38668 4.79283 8.32211C4.8126 8.31491 4.83268 8.30798 4.8524 8.30118L4.85241 8.30117C5.0096 8.24694 5.14344 8.20076 4.90982 8.09152ZM4.35939 7.27801C4.35939 7.27801 4.53197 7.35577 4.73699 7.56122C4.91915 7.74378 4.7776 7.74139 4.61133 7.73859H4.61133C4.59048 7.73824 4.56923 7.73789 4.54819 7.73789C4.35939 7.73789 4.02307 7.38439 4.02307 7.27801C4.02307 7.17162 4.35939 7.27801 4.35939 7.27801Z"
            fill="#46A000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9323 6.46167H16.5965C16.5965 6.46167 16.8797 6.46167 16.9108 6.73525C16.9108 6.73525 16.9173 9.04394 16.9108 9.22533C16.9043 9.40673 16.5965 9.46844 16.5965 9.46844C16.5965 9.46844 18.217 9.47338 17.9323 9.46844C17.6476 9.46349 17.5848 9.22533 17.5848 9.22533V6.73525C17.5848 6.52444 17.9323 6.46167 17.9323 6.46167ZM2.85332 9.28334C2.70212 8.89297 1.76855 6.50265 1.76855 6.50265H2.69276C2.53221 6.50265 2.4726 6.70702 2.4726 6.70702L3.11995 8.55281C3.11995 8.55281 3.74596 7.04584 3.74596 6.7786C3.74596 6.51137 3.48318 6.50265 3.48318 6.50265H4.68809L4.39699 6.59986C4.39699 6.59986 3.43288 8.81016 3.43288 9.28334C3.38694 9.38822 3.87676 9.45799 3.87676 9.45799H2.58289L2.85332 9.28334ZM13.9166 8.41045L14.6326 7.09114L14.6537 8.55904L14.4319 8.48706L14.2746 9.46727L15.0665 7.94875L14.8028 7.84969L15.783 6.78867L15.4492 8.22273L15.2593 8.05547L14.1364 10.1506L15.3897 8.71458L15.1481 8.59392L16.3858 7.78357L15.847 9.10411L15.5464 8.8877L14.2746 10.4888L13.7471 10.2859L14.2746 8.41045H13.9166ZM13.5031 10.9125H13.1072V11.2137H12.7955L11.9127 12.2377H12.4L12.5692 12.8143L12.7955 12.6108V12.8143L13.238 12.6108L13.6611 12.9771L13.9768 11.569L13.7643 11.413L13.8734 11.3176L13.7643 10.9125H13.5031Z"
            fill="#0093E1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.71469 5.00806C7.71469 5.00806 8.29631 5.40966 8.87792 5.40966C9.45954 5.40966 10.0412 5.00806 10.0412 5.00806C10.0412 5.00806 10.6228 5.40966 11.2044 5.40966C11.786 5.40966 12.3676 5.00806 12.3676 5.00806V6.82111C12.3676 8.69574 10.0412 10.1486 10.0412 10.1486C10.0412 10.1486 7.60205 8.8146 7.71469 6.79885V5.00806Z"
            fill="#F7FCFF"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="7"
            y="5"
            width="6"
            height="6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.71469 5.00806C7.71469 5.00806 8.29631 5.40966 8.87792 5.40966C9.45954 5.40966 10.0412 5.00806 10.0412 5.00806C10.0412 5.00806 10.6228 5.40966 11.2044 5.40966C11.786 5.40966 12.3676 5.00806 12.3676 5.00806V6.82111C12.3676 8.69574 10.0412 10.1486 10.0412 10.1486C10.0412 10.1486 7.60205 8.8146 7.71469 6.79885V5.00806Z"
              fill="white"
            />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.54993 4.8877H12.4499V6.77525H7.54993V4.8877Z"
              fill="#2E42A5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.49709 6.77515H8.08533V10.5904H8.49709V6.77515ZM9.19709 6.77515H8.78533V10.5904H9.19709V6.77515ZM9.48533 6.77515H9.89709V10.5904H9.48533V6.77515ZM10.5971 6.77515H10.1853V10.5904H10.5971V6.77515ZM10.8853 6.77515H11.2971V10.5904H10.8853V6.77515ZM11.9971 6.77515H11.5853V10.5904H11.9971V6.77515Z"
              fill="#AF0100"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
