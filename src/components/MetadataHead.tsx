'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';

type MetadataHeadProps = {
  section: string;
  metadataKey?: string;
};

export default function MetadataHead({ section, metadataKey = 'metadata' }: MetadataHeadProps) {
  const t = useTranslations(section);
  
  return (
    <Head>
      <title>{t(`${metadataKey}.title`)}</title>
      <meta name="description" content={t(`${metadataKey}.description`)} />
    </Head>
  );
} 