import React from 'react';

import './top-intro.scss';

const TopIntro = () => {
  const topIntroText = {
    index: {
      h1: "Седона — небольшой городок в аризоне, заслуживающий большего!",

      p: "Рассмотрим 5 причин, по которым седона круче чем гранд каньон!",
    },
  }

  const page = topIntroText.index

  return (<div className="top-intro">
    <h1 className="top-intro__title">
      {page.h1}
    </h1>
    <p className="top-intro__text">
      {page.p}
    </p>
  </div>
  )
}

export default TopIntro;