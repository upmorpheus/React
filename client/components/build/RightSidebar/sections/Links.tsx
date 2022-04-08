import { BugReport, Coffee, GitHub, Link, Savings } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useTranslation } from 'next-i18next';

import Heading from '@/components/shared/Heading';
import { DONATION_URL, GITHUB_ISSUES_URL, GITHUB_URL } from '@/constants/index';

import styles from './Links.module.scss';

const Links = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading path="metadata.links" name={t<string>('builder.rightSidebar.sections.links.heading')} />

      <div className={styles.container}>
        <div className={styles.section}>
          <h2>
            <Savings fontSize="small" />
            {t<string>('builder.rightSidebar.sections.links.donate.heading')}
          </h2>

          <p>{t<string>('builder.rightSidebar.sections.links.donate.body')}</p>

          <a href={DONATION_URL} target="_blank" rel="noreferrer">
            <Button startIcon={<Coffee />}>{t<string>('builder.rightSidebar.sections.links.donate.button')}</Button>
          </a>
        </div>

        <div className={styles.section}>
          <h2>
            <BugReport fontSize="small" />
            {t<string>('builder.rightSidebar.sections.links.bugs-features.heading')}
          </h2>

          <p>{t<string>('builder.rightSidebar.sections.links.bugs-features.body')}</p>

          <a href={GITHUB_ISSUES_URL} target="_blank" rel="noreferrer">
            <Button startIcon={<GitHub />}>
              {t<string>('builder.rightSidebar.sections.links.bugs-features.button')}
            </Button>
          </a>
        </div>

        <div>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <Button variant="text" startIcon={<Link />}>
              {t<string>('builder.rightSidebar.sections.links.github')}
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Links;
