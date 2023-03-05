import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useTranslation } from 'react-i18next';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Languages {
  [key: string]: {
    nativeName: string;
  };
}

const languages: Languages = {
  en: { nativeName: 'EN' },
  uk: { nativeName: 'UKR' },
};

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 60,
        margin: 0,
        '@media screen and (min-width: 480px)': {
          minWidth: 80,
        },
      }}
      size="small"
    >
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={i18n.language}
        onChange={handleChange}
        sx={{
          color: '#fff',
          fontSize: 14,
          fontFamily: 'Arial, Helvetica, sans-serif',
          '& .MuiSelect-icon': {
            color: '#fff',
          },
          '@media screen and (min-width: 480px)': {
            fontSize: 16,
          },
        }}
      >
        {Object.keys(languages).map((lang) => (
          <MenuItem
            key={lang}
            value={lang}
            sx={{
              fontSize: 14,
              fontFamily: 'Arial, Helvetica, sans-serif',
              '@media screen and (min-width: 480px)': {
                fontSize: 16,
              },
            }}
          >
            {languages[lang].nativeName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
