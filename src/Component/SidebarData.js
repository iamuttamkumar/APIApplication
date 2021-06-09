import React from 'react';
import *  as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';
import * as FaReg from 'react-icons/fa';
import * as CgFile from 'react-icons/cg';
import * as BsCode from "react-icons/bs";
import * as Health from "react-icons/ri";
import * as file from "react-icons/vsc";

export const SidebarData=[
    {
        title:'Overview',
        path:'/overview',
        icon:<AiIcons.AiOutlineFileSearch />,
        cName:'nav-text'
    },

    {
        title:'Subscriptions',
        path:'/subscriptions',
        icon:<MdIcons.MdSubscriptions/>,
        cName:'nav-text'
    },
    {
        title:'TryOut',
        path:'/tryout',
        icon:<HiIcons.HiOutlineChevronRight />,
        cName:'nav-text'
    },
    {
        title:'Comments',
        path:'/comments',
        icon:<FaReg.FaRegCommentDots />,
        cName:'nav-text'
    },
    {
        title:'Documentation',
        path:'/documentation',
        icon:<CgFile.CgFileDocument/>,
        cName:'nav-text'
    },
    {
        title:'SDKs',
        path:'/sdks',
        icon:<BsCode.BsCodeSlash/>,
        cName:'nav-text'
    },
    
]
export const Api_Category_Data=[
    {
        title:'Home',
        path:'/noApi',
        // icon:<MdIcons.MdLabel />,
        icon:<BsCode.BsHouseFill/>,
        cName:'nav-text'
    },
    {
        title:'Accident',
        path:'/noApi',
        // icon:<MdIcons.MdLabel />,
        icon:<FaReg.FaBriefcaseMedical/>,
        cName:'nav-text'
    },
    {
        title:'Generic',
        path:'/noApi',
        icon:<MdIcons.MdLabel />,
        cName:'nav-text'
    },
    {
        title:'Health',
        path:'/',
        // icon:<MdIcons.MdLabel />,
        icon:<Health.RiMentalHealthFill/>,
        cName:'nav-text'
    },
   
    {
        title:'Motor',
        path:'/noApi',
        //icon:<MdIcons.MdLabel />,
        icon:<FaReg.FaMotorcycle/>,
        cName:'nav-text'
    },
    {
        title:'Specific',
        path:'/noApi',
        // icon:<MdIcons.MdLabel />,
        icon:<file.VscOpenPreview/>,
        cName:'nav-text'
    },
    
]