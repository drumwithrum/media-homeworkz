import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './StartingPage.scss';

interface StartingPageProps {
}

const StartingPage: FC = (props: StartingPageProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="wrapper">
      This is your translated StartingPage component! - {t('EXAMPLE')}
    </div>
  );
};

export default StartingPage;
