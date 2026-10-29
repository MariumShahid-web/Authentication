import React from 'react';
import { Show } from '@clerk/react'


const Dashboard = () => {
  return (
      <Show when="signed-in">
            <h2>Dashboard</h2>
        </Show>
  
  )
}

export default Dashboard