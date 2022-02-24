import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'


const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
  { key: 4, text: 'Choice 4', value: 4 }
]



const Dropdownmenu = () => (
  <>
  <Dropdown text='Dropdown' options={options} open />
  <Dropdown text='Dropdown' options={options} open />
  <Dropdown text='Dropdown' options={options} open />
  <Dropdown text='Dropdown' options={options} open />
  </>
)

export default Dropdownmenu;