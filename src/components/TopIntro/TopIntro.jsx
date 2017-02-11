import React, { PropTypes } from 'react';

import './top-intro.scss';

function topIntroText(page) {
  const topIntroClass = (page === 'index') ? 'top-intro ' : 'top-intro top-intro--border top-intro--form';
  const topTextClass = (page === 'index') ? 'top-intro__text' : 'top-intro__text top-intro__text--form';


  switch (page) {
    case 'form': {
      return {
        title: 'Оставьте свой отзыв',
        description: 'Помогите нашим отелям стать лучше! оставьте отзыв о них, а также о посещенных вами достопримечательностях',
        topIntroClass,
        topTextClass,
      };
    }
    case 'blog': {
      return {
        title: 'Блог шерифа',
        description: 'Седона удивительный город! горы здесь красного цвета, а местный шериф ведет блог и общается на форумах.',
        topIntroClass,
        topTextClass,
      };
    }
    default: {
      return {
        title: 'Седона — небольшой городок в аризоне, заслуживающий большего!',
        description: 'Рассмотрим 5 причин, по которым седона круче чем гранд каньон!',
        topIntroClass,
        topTextClass,
      };
    }
  }
}

const TopIntro = ({ page }) => {
  const data = topIntroText(page);
  return (<div className={data.topIntroClass}>
    <h1 className="top-intro__title">
      {data.title}
    </h1>
    <p className={data.topTextClass}>
      {data.description}
    </p>
  </div>
  );
};

TopIntro.propTypes = {
  page: PropTypes.string,
};

export default TopIntro;
