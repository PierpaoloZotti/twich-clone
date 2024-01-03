'use client';

import { Button } from '@/components/ui/button';
import { CheckCheck, CopyIcon } from 'lucide-react';
import { useState } from 'react';

type CopyButtonProps = {
  value?: string;
};

const CopyButton = ({ value }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    if (!value) {
      return;
    }

    navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  const Icon = isCopied ? CheckCheck : CopyIcon;
  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={onCopy}
      disabled={!value || isCopied}
    >
      <Icon className='w-4 h-4' />
    </Button>
  );
};

export default CopyButton;
