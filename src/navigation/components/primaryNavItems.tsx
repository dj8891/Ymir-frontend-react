import React from "react";
import { ReactComponent as DashboardIcon } from '../assets/dashboard-icon.svg';
import { ReactComponent as DocumentUploadIcon } from '../assets/document-upload-icon.svg';
import { ReactComponent as SettingsIcon } from '../assets/settings-icon.svg';
import { ReactComponent as TeammatesIcon } from '../assets/teammates-icon.svg';

const primaryNavItems = [
    {
        slug: 'dashboard',
        icon: <DashboardIcon/>
    },
    {
        slug: 'moderators',
        icon: <TeammatesIcon/>
    },
    {
        slug: 'database',
        icon: <DocumentUploadIcon/>
    },
    {
        slug: 'settings',
        icon: <SettingsIcon/>
    }
];

export default primaryNavItems;
