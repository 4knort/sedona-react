import React, { PropTypes } from 'react';

import './top-intro.scss';

const TopIntro = ( { page }) => {
  const topIntroClass = (page === "index") ?  "top-intro " : "top-intro top-intro--border top-intro--form";
  const topTextClass = (page === "index") ? "top-intro__text" : "top-intro__text top-intro__text--form";
  
  const topIntroText = {
    index: {
      h1: "Седона — небольшой городок в аризоне, заслуживающий большего!",

      p: "Рассмотрим 5 причин, по которым седона круче чем гранд каньон!",
    },

    form: {
      h1: "Оставьте свой отзыв",

      p: "Помогите нашим отелям стать лучше! оставьте отзыв о них, а также о посещенных вами достопримечательностях",
    },
    blog: {
      h1: "Блог шерифа",

      p: "Седона удивительный город! горы здесь красного цвета, а местный шериф ведет блог и общается на форумах.",
    },
  }

  let pageText = null;

  switch(page) {
    case "index": {
      pageText = topIntroText.index;
      break;
    }
    case "form": {
      pageText = topIntroText.form;
      break;
    }
    case "blog": {
      pageText = topIntroText.blog;
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

FormTitle.PropTypes = {
  page: React.PropTypes.string,
}

export default TopIntro;