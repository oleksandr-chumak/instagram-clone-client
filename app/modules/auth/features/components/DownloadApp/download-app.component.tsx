import React, { FC } from 'react';
import Image from 'next/image';
import styles from './download-app.module.scss';

export const DownloadApp: FC = () => {
  return (
    <div className={styles.downloadAppWrapper}>
      <h3 className={styles.downloadAppHeader}>Завантажити додаток.</h3>
      <Image
        src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
        width={136}
        height={40}
        alt="App store download"
      />
      <Image
        src="https://static.cdninstagram.com/rsrc.php/v3/yq/r/54pQonhlyEd.png"
        width={136}
        height={40}
        alt="Google play download"
      />
    </div>
  );
};
