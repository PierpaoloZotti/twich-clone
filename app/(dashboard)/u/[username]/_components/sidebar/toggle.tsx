'use client';
import Hint from '@/components/hint';
import { Button } from '@/components/ui/button';
import { useCreatorSidebar } from '@/store/use-creator-sidebar';
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';

export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useCreatorSidebar(
    (state) => state,
  );

  const label = collapsed ? 'Expand' : 'Collapse';
  return (
    <>
      {collapsed && (
        <div className='w-full hidden lg:flex items-center justify-center pt-4 mb-4'>
          <Hint
            label={label}
            side='right'
            asChild
          >
            <Button
              size='sm'
              variant='ghost'
              className='text-muted-foreground group'
              onClick={onExpand}
            >
              <ArrowRightFromLine className='h-4 w-4 text-muted-foreground group-hover:text-primary' />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className='p-3 pl-6 mb-2 w-full hidden lg:flex items-center justify-between'>
          <p className='font-semibold text-primary'>Dashboard</p>
          <Hint
            label={label}
            side='right'
            asChild
          >
            <Button
              size='sm'
              variant='ghost'
              className='text-muted-foreground group '
              onClick={onCollapse}
            >
              <ArrowLeftFromLine className='h-4 w-4 text-muted-foreground group-hover:text-primary' />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};
