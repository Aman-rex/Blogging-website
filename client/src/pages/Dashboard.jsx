import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import DashSidebar from '../component/DashSidebar'
import DashProfile from '../component/DashProfile'

export default function Dashboard() {
  const location = useLocation('')
  const [tab,setTab] = useState('')
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  },[location.search])
  
  return (
    <div>
      <div className="">
        <DashSidebar/>
        {/* Sidebar */}
      </div>
      {tab === 'profile' && <DashProfile/>}
      {/* profile */}
    </div>
  )
}
