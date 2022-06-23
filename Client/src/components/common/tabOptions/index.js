import React from 'react'
import '../tabOptions/tabOptions.css'

const TabOptions = ({activeTab,setActiveTab}) => {
  const tabs = [
    {
      id: 1,
      name : 'Delivery'
    },
    {
      id: 2,
      name : 'Dineout'
    },
    {
      id: 3,
      name : 'Nightlife'
    }
  ]

  return (
    <div className='tab-options'>
      <div className="max-width option-wrapper">
        {tabs.map((tab)=>{
          return <div onClick={()=>{setActiveTab(tab.name)}}
          className={`tab-items absolute-center cur-pointer ${activeTab === tab.name && "active-tab"}`}
          key={tab.id}
          >
            <div style={{color:`${activeTab === tab.name ? '#EF4F5F' : 'black'}`}} className='tab-name'>
              {tab.name}
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default TabOptions