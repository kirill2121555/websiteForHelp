import React from 'react'
import Post from '../posthelper/Post'
import Login from '../pages/login';
import ListHelp from '../posthelper/listhelp';
import FullNeedHelp from './../exampl/FullNeedHelp'
import CanHelp from '../posthelper/canhelp'
import FullCanHelp from '../posthelper/FullCanHelp'
import CanHelpA from '../AuthComponent/CanHelp/CanHelpA'
import AddCanHelp from '../AuthComponent/CanHelp/AddCanHelp'
import AddNeedHelp from '../AuthComponent/NeedHelp/AddNeedHelp'
import Logout from '../pages/logout'
import Registration from '../pages/registration'
import Loginafterregistration from '../pages/Loginafterregistration'
import RecoveryPassword from '../pages/RecoveryPassword'
import RemovePassword from '../pages/RemovePassword'
import Profil from '../AuthComponent/Profil/Profil'
import NeedHelpUpdate from '../AuthComponent/Profil/update/NeedHelpUpdate'
import CanHelpUpdate from '../AuthComponent/Profil/update/CanHelpUpdate'
import Chat from '../AuthComponent/Chat/Chat';
import CreatePointHelp from '../AuthComponent/PointHelp/CreatePointHelp';
import RequesеForAddPH from '../AuthComponent/PointHelp/RequesеForAddPH';
import AllNeedHelp from '../AuthComponent/NeedHelp/AllNeedHelp';
import Dialogs from '../AuthComponent/Chat/Dialogs';

export const publicRoutes = [
    {
        path: "/gum",
        Element: <ListHelp />
    },
    {
        path: "/",
        Element: <ListHelp />
    },
    {
        path: "/ch",
        Element: <CanHelp />
    },
    {
        path: "/nh",
        Element: <AllNeedHelp />
    },
    {
        path: "/login",
        Element: <Login />
    },
    {
        path: "/gum/:id",
        Element: <Post />
    },
    {
        path: "/ch/:id",
        Element: <FullCanHelp />
    },
    {
        path: "/nh/:id",
        Element: <FullNeedHelp />
    },
    {
        path: "/registration",
        Element: <Registration />
    },
    {
        path: "/loginn",
        Element: <Loginafterregistration />
    },
    {
        path: "/recoveryPassword",
        Element: <RecoveryPassword />
    },
    {
        path: "/removePassword/:id",
        Element: <RemovePassword />
    },
]

export const authRoutes = [
    {
        path: "/nha",
        Element: < AllNeedHelp/>
    },
    {
        path: "/addneedhelp",
        Element: <AddNeedHelp />
    },
    {
        path: "/cha",
        Element: <CanHelpA />
    },
    {
        path: "/addcanhelp",
        Element: <AddCanHelp />
    },
    {
        path: "/logout",
        Element: <Logout />
    },
    {
        path: "/profil",
        Element: <Profil />
    },
    {
        path: "/nhupdate/:id",
        Element: <NeedHelpUpdate />
    },
    {
        path: "/chupdate/:id",
        Element: <CanHelpUpdate />
    },
    {
        path: "/chat",
        Element: <Dialogs />
    },
    {
        path: "/chat/:id",
        Element: <Chat />
    },
    {
        path: "/addpointhelp",
        Element: <CreatePointHelp />
    },
    {
        path: '/rfaph',
        Element: <RequesеForAddPH/>
    },   
]