import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import './container.scss'

function Container() {
  return (
    <HorizontalScroll
    pageLock      = { bool }
    reverseScroll = { bool }
    style         = { object }
    config        = {{ stiffness: int, damping: int }}
    className     = { string }
    animValues    = { int }
    >
     { children }
    </HorizontalScroll>
  );
}

export default Container;