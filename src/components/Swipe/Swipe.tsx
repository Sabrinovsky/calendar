import React, { RefObject, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './styles.scss'

type Props = {
  animationKey: string;
  direction: 'fade-left' | 'fade-right';
  children: (nodeRef: RefObject<HTMLDivElement>) => React.ReactElement;
};

function Swipe({ animationKey, direction, children }: Props) {
  const nodeRef = useRef<HTMLDivElement>(null);
  
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={animationKey}
        nodeRef={nodeRef}
        addEndListener={(done) => {
          nodeRef?.current?.addEventListener('transitionend', done, false);
        }}
        classNames={direction}
      >
        {children(nodeRef)}
      </CSSTransition>
    </SwitchTransition>
  );
}

export { Swipe };
