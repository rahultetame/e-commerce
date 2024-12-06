// src/components/I18n.tsx
import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TranslateIcon from '@mui/icons-material/Translate';

const I18n = () => {
  const { t, i18n } = useTranslation(); // Initialize i18n and useTranslation hook
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setAnchorEl(null);
  };

  return (
    <>
      <TranslateIcon style={{ fill: '#000' }} />
      <Button
        onClick={handleClick}
        sx={{
          color: '#000',
          fontWeight: 500,
        }}
      >
        {t('language')}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('hi')}>Hindi</MenuItem>
      </Menu>
    </>
  );
};

export default I18n;
