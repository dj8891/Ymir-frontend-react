import React from "react";
import { ReactComponent as ChatsIcon } from '../assets/chats-icon.svg';
import { ReactComponent as ReportsIcon } from '../assets/reports-icon.svg';
import { ReactComponent as MembersIcon } from '../assets/members-icon.svg';
import { ReactComponent as ManageIcon } from '../assets/manage-icon.svg';
import { ReactComponent as DatabaseIcon } from '../assets/database-icon.svg';
import { ReactComponent as DocumentUploadIcon } from '../assets/document-upload-icon.svg';
import { ReactComponent as HelpCenterIcon } from '../assets/help-center-icon.svg';
import { useTranslation } from "react-i18next";

const SecondaryNavItems = () => {
    const { t } = useTranslation();

    return [
        {
            slug: 'dashboard',
            title: t('navigation.dashboard'),
            subRoutes: [
                {
                    url: 'dashboard/chats',
                    title: t('navigation.chats'),
                    icon: <ChatsIcon/>,
                },
                {
                    url: 'dashboard/reports',
                    title: t('navigation.reports'),
                    icon: <ReportsIcon/>,
                },
            ]
        },
        {
            slug: 'moderators',
            title: t('navigation.moderators'),
            subRoutes: [
                {
                    url: 'moderators/members',
                    title: t('navigation.members'),
                    icon: <MembersIcon/>,
                },
                {
                    url: 'moderators/manage-moderator',
                    title: t('navigation.manageModerator'),
                    icon: <ManageIcon/>,
                },
            ]
        },
        {
            slug: 'database',
            title: t('navigation.database'),
            subRoutes: [
                {
                    url: 'database/database',
                    title: t('navigation.database'),
                    icon: <DatabaseIcon/>,
                },
                {
                    url: 'database/upload',
                    title: t('navigation.upload'),
                    icon: <DocumentUploadIcon/>,
                },
            ]
        },
        {
            slug: 'settings',
            title: t('navigation.settings'),
            subRoutes: [
                {
                    url: 'settings/help-center',
                    title: t('navigation.helpCenter'),
                    icon: <HelpCenterIcon/>,
                },
            ]
        },
    ];
};

export default SecondaryNavItems;
