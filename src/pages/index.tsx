'use client';
import { Button, AppRoot, Input, Switch, Slider, TabsList, TabsItem } from '@/components'
import { useState } from 'react';
export default function Home() {
  const [type, setType]  = useState(1)
  return (
    <div>
      <AppRoot>
        <Input header='text' after={<div>icon</div>} disabled={true} />
        <Switch />
        <Slider step={25} />
        
        <TabsList>
          <TabsItem selected={type === 1} onClick={() => setType(1)}>1</TabsItem>
           <TabsItem selected={type === 2} onClick={() => setType(2)}>2</TabsItem>
        </TabsList>
        <Button children="button" stretched style={{ background: 'skyblue' }} />
      </AppRoot>
    </div>
  );
}
