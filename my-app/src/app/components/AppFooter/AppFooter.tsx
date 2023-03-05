import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import './AppFooter.css';

export const AppFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Typography>
        {`${new Date().getFullYear()}.`}
        &nbsp;
        {t('footer.copyright')}
      </Typography>
    </footer>
  );
};
