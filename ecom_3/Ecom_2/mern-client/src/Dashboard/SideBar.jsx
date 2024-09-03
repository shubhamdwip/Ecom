import React from 'react'
import userImg from "../assets/profile.jpg";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloud, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const SideBar = () => {
  return (
    <Sidebar className='bg-gray-100  rounded' aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo">
        Flowbite
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item  href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item  href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item  href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Book
          </Sidebar.Item>
          <Sidebar.Item  href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item  href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item  href="/login" icon={HiArrowSmRight}>
            LogIn
          </Sidebar.Item>
          <Sidebar.Item  href="/logout" icon={HiTable}>
            logOut
          </Sidebar.Item>
          <Sidebar.Item  href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar