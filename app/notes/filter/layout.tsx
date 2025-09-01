import css from './layout.module.css';
import React from 'react';

export default function NotesFilterLayout({
  children,
  sidebar,
  modal,
}:  {children : string, sidebar: string, modal: string}) {
  return (
    <div className={css.container}>
      <div className={css.sidebar}>{sidebar}</div>
      <div className={css.content}>{children}</div>
      {modal}
    </div>
  );
}
