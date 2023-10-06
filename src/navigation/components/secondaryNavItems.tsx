import React from "react";
import { ReactComponent as ChatsIcon } from '../assets/chats-icon.svg';
import { ReactComponent as ReportsIcon } from '../assets/reports-icon.svg';
import { ReactComponent as MembersIcon } from '../assets/members-icon.svg';
import { ReactComponent as ManageIcon } from '../assets/manage-icon.svg';
import { ReactComponent as DatabaseIcon } from '../assets/database-icon.svg';
import { ReactComponent as DocumentUploadIcon } from '../assets/document-upload-icon.svg';
import { ReactComponent as HelpCenterIcon } from '../assets/help-center-icon.svg';

const SecondaryNavItems = [
    {
        slug: 'dashboard',
        title: 'Dashboard',
        subRoutes: [
            {
                url: 'dashboard/chats',
                title: 'Chats',
                icon: <ChatsIcon/>,
            },
            {
                url: 'dashboard/reports',
                title: 'Reports',
                icon: <ReportsIcon/>,
            },
        ]
    },
    {
        slug: 'moderators',
        title: 'Moderators',
        subRoutes: [
            {
                url: 'moderators/members',
                title: 'Members',
                icon: <MembersIcon/>,
            },
            {
                url: 'moderators/manage-moderator',
                title: 'Manage Moderator',
                icon: <ManageIcon/>,
            },
        ]
    },
    {
        slug: 'database',
        title: 'Database',
        subRoutes: [
            {
                url: 'database/database',
                title: 'Database',
                icon: <DatabaseIcon/>,
            },
            {
                url: 'database/upload',
                title: 'Upload',
                icon: <DocumentUploadIcon/>,
            },
        ]
    },
    {
        slug: 'settings',
        title: 'Settings',
        subRoutes: [
            {
                url: 'settings/help-center',
                title: 'Help Center',
                icon: <HelpCenterIcon/>,
            },
        ]
    },
];

export default SecondaryNavItems;
