import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid';
import SetupOff1 from './Official/Setup1'
import SetupOff2 from './Official/Setup2'
import SetupOff3 from './Official/Setup3'
import SetupOff4 from './Official/Setup4'
import SetupOff5 from './Official/Setup5'
import SetupOff6 from './Official/Setup6'
import SetupFr1 from './French/Setup1'
import SetupFr2 from './French/Setup2'
import SetupFr3 from './French/Setup3'

export default function DatatabsNodeVideo() {

  function DataTabs({ data }) {
    return (
      <Tabs isFitted variant='soft-rounded'>
        <TabList mb='1em' bg='#000'>
          {data.map((tab, index) => (
            <Tab key={uuidv4()} _selected={{ color: 'white', bg: 'blue.500' }}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={5} key={uuidv4()}>
              <SimpleGrid columns={{ base: "1", xl: "2" }} spacing='2'>
                {tab.content}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    )
  }


  const tabData = [
    {
      label: 'Official',
      content: [<SetupOff1 />, <SetupOff2 />, <SetupOff3 />, <SetupOff4 />, <SetupOff5 />, <SetupOff6 />]
    },
    {
      label: 'French',
      content:
        [<SetupFr1 />, <SetupFr2 />, <SetupFr3 />]
    },
    {
      label: 'Others',
      content:
        ['Send your video at Basco#6472 on Discord, I add them in the day.']
    },
  ]

  return <DataTabs data={tabData} />
}