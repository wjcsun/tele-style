'use client';
import { Button, AppRoot } from '@/components'
export default function Home() {
  
  return (
    <div>
      <AppRoot>
        <Button children="button" stretched style={{ background: 'skyblue' }} />
      </AppRoot>
    </div>
  );
}
