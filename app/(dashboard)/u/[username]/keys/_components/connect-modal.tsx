'use client';

import { Button } from '@/components/ui/button';
import { IngressInput } from 'livekit-server-sdk';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { AlertTriangle } from 'lucide-react';
import { useState, useTransition, useRef } from 'react';

import { createIngress } from '@/actions/ingress';
import { toast } from 'sonner';

const RTMP = String(IngressInput.RTMP_INPUT);
const WHIP = String(IngressInput.WHIP_INPUT);

type IngressType = typeof RTMP | typeof WHIP;

const ConnectModal = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [isPending, startTransition] = useTransition();
  const [ingressType, setIngressType] = useState<IngressType>(RTMP);

  const onSubmit = () => {
    startTransition(() => {
      createIngress(parseInt(ingressType))
        .then(() => {
          toast.success('Connection generated');
          closeRef.current?.click();
        })
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='primary'>Generate</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate connection</DialogTitle>
        </DialogHeader>
        <Select
          disabled={isPending}
          value={ingressType}
          onValueChange={(value) => setIngressType(value)}
        >
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Ingress Type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={RTMP}>RTMP</SelectItem>
            <SelectItem value={WHIP}>WHIP</SelectItem>
          </SelectContent>
        </Select>
        <Alert>
          <AlertTriangle className='w-4 h-4' />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            This will close your current stream and generate a new stream key.
          </AlertDescription>
        </Alert>
        <div className='flex items-center justify-between'>
          <DialogClose
            ref={closeRef}
            asChild
          >
            <Button variant='ghost'>Cancel</Button>
          </DialogClose>
          <Button
            disabled={isPending}
            variant='primary'
            onClick={onSubmit}
          >
            Generate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectModal;
