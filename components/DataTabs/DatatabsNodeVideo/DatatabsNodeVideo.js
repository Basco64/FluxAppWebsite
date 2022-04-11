import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SetupEng1 from './Official/Setup1'
import SetupEng2 from './Official/Setup2'
import SetupEng3 from './Official/Setup3'
import SetupEng4 from './Official/Setup4'
import SetupEng5 from './Official/Setup5'
import SetupEng6 from './Official/Setup6'
import SetupFr1 from './French/Setup1'
import SetupFr2 from './French/Setup2'
import SetupFr3 from './French/Setup3'

export default function DatatabsNodeVideo() {

    function DataTabs({ data }) {
      return (
        <Tabs isFitted variant='soft-rounded'>
          <TabList mb='1em'>
            {data.map((tab, index) => (
              <Tab key={index} _selected={{ color: 'white', bg: 'blue.500' }}>{tab.label}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {data.map((tab, index) => (
              <TabPanel p={4} key={index}>
                {tab.content}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )
    }
  

    const tabData = [
      {
        label: 'Official',
        content:[<SetupEng1/>,<SetupEng2/>,<SetupEng3/>,<SetupEng4/>,<SetupEng5/>,<SetupEng6/>]
      },
      {
        label: 'French',
        content:
          [<SetupFr1/>,<SetupFr2/>,<SetupFr3/>]
      },
      {
        label: 'Others',
        content:
          ['Send your video at Basco#6472, I add them in the day.']
      },
    ]

    return <DataTabs data={tabData} />
  }