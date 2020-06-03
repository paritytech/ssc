// SPDX-License-Identifier: Apache-2

import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Title ({ children, className }: Props): React.ReactElement<Props> {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default React.memo(styled(Title)`
  font-size: 1.1rem;
  font-weight: 100;
  margin: 0 0 0.5rem 0;
  opacity: 0.35;
  text-transform: uppercase;
`);