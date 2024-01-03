'use client';

import { toast } from 'sonner';
import { useTransition } from 'react';

import { Switch } from '@/components/ui/switch';
import { updateStream } from '@/actions/stream';

type ToggleCardProps = {
  field: 'isChatEnabled' | 'isChatDelayed' | 'isChatFollowersOnly';
  label: string;
  value: boolean;
};
const ToggleCard = ({ field, label, value = false }: ToggleCardProps) => {
  const [isPendidng, startTransition] = useTransition();
  const onChange = async () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success('Stream updated'))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <div className='rounded-xl bg-muted p-6'>
      <div className='flex items-center justify-between'>
        <p className='font-semibold shrink-0 mr-2'>{label}</p>
        <div>
          <Switch
            onCheckedChange={onChange}
            checked={value}
            disabled={isPendidng}
          >
            {value ? 'On' : 'Off'}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ToggleCard;
