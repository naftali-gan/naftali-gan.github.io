'use client';

import { useTranslations } from '@/hooks/useTranslations';
import { Translations } from '@/utils/translations';
import Head from 'next/head';

type MetadataHeadProps = {
  section: keyof Translations;
  metadataKey?: 'metadata';
};

export default function MetadataHead({ section, metadataKey = 'metadata' }: MetadataHeadProps) {
  const t = useTranslations(section);
  
  return (
    <Head>
      <title>{(t as any)(metadataKey)?.title}</title>
      <meta name="description" content={(t as any)(metadataKey)?.description} />
    </Head>
  );
} 