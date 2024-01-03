'use client';

import { Button } from '@/components/ui/button';
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

const ConnectModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='primary'>Generate</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate connection</DialogTitle>
        </DialogHeader>
        <Select>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Ingress Type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='RTMP'>RTMP</SelectItem>
            <SelectItem value='WHIP'>WHIP</SelectItem>
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
          <DialogClose>
            <Button variant='ghost'>Cancel</Button>
          </DialogClose>
          <Button
            variant='primary'
            onClick={() => {}}
          >
            Generate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectModal;
