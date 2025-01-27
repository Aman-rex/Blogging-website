import {Sidebar} from 'flowbite-react'
import {HiUser,HiArrowSmRight} from 'react-icons/hi'
export default function DashSidebar() {
  return (
    <Sidebar>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Sidebar.Item active icon={HiUser} label={'User'} labelColor = 'dark'>
                    Profile
                </Sidebar.Item>
                <Sidebar.Item active icon={HiArrowSmRight} className='cursor-pointer'>
                    SignOut
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>

  )
}
 