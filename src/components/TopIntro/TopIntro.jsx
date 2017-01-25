import React from 'react';

import './top-intro.scss';

const TopIntro = ( { page }) => {
  const topTextClass = (page === "index") ? "top-intro__text" : "top-intro__text top-intro__text--form";
  const topIntroClass = (page === "index") ?  "top-intro " : "top-intro top-intro--border top-intro--form";

  const topIntroText = {
    index: {
      h1: "Седона — небольшой городок в аризоне, заслуживающий большего!",

      p: "Рассмотрим 5 причин, по которым седона круче чем гранд каньон!",
    },

    inner: {
      h1: "Оставьте свой отзыв",

      p: "Помогите нашим отелям стать лучше! оставьте отзыв о них, а также о посещенных вами достопримечательностях",
    },
  }

  let pageText = null;

  switch(page) {
    case "index": {
      pageText = topIntroText.index;
      break;
    }
    case "inner": {
      pageText = topIntroText.inner;
      break;
    }
    default: {
      pageText = topIntroText.index;
    }
  }
  
  return (<div className={topIntroClass}>
    <h1 className="top-intro__title">
      {pageText.h1}
    </h1>
    <p className={topTextClass}>
      {pageText.p}
    </p>
  </div>
  )
}

export default TopIntro;