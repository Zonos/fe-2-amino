import React from 'react';
import styled from 'styled-components';

import { Text } from '../Text';

const AminoNotice = styled.aside`
  background: var(--amino-gray-100);
  border-radius: var(--amino-radius);
  color: var(--amino-text-color);
  padding: var(--amino-space);

  h5 {
    font-weight: 500;
  }
  a {
    font-weight: 500;
    text-align: right;
    text-decoration: underline;
  }
`;

const AminoSuccessNotice = styled(AminoNotice)`
  background: var(--amino-success);
  h5,
  a {
    color: var(--amino-success-dark);
  }
`;

const AminoErrorNotice = styled(AminoNotice)`
  background: var(--amino-red-200);
  h5,
  a {
    color: var(--amino-danger);
  }
`;

const AminoWarningNotice = styled(AminoNotice)`
  background: var(--amino-warning);

  h5,
  a {
    color: var(--amino-warning-dark);
  }
`;

const AminoPrimaryNotice = styled(AminoNotice)`
  background: var(--amino-blue-100);
  h5,
  a {
    color: var(--amino-blue-500);
  }
`;

export type NoticeProps = {
  anchorLabel?: string;
  href?: string;
  intent?: 'success' | 'error' | 'warning' | 'primary' | 'info';
  text: string;
};

export const Notice = ({
  anchorLabel = 'Read more...',
  href,
  intent,
  text,
}: NoticeProps) => {
  const renderNotice = () => (
    <>
      <Text type="h5">{text}</Text>
      {href && (
        <a
          href={href}
          className="no-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          {anchorLabel}
        </a>
      )}
    </>
  );
  switch (intent) {
    case 'success':
      return <AminoSuccessNotice>{renderNotice()}</AminoSuccessNotice>;
    case 'error':
      return <AminoErrorNotice>{renderNotice()}</AminoErrorNotice>;
    case 'warning':
      return <AminoWarningNotice>{renderNotice()}</AminoWarningNotice>;
    case 'primary':
      return <AminoPrimaryNotice>{renderNotice()}</AminoPrimaryNotice>;
    case 'info':
    default:
      return <AminoNotice>{renderNotice()}</AminoNotice>;
  }
};
