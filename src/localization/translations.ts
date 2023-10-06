
// In the future this can potentially be managed in a UI:
//   https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

const translations = {
    resources: {
        en: {
            translation: {
                navigation: {
                    chats: "Chats",
                    reports: "Reports",
                    members: "Members",
                    manageModerator: "Manage Moderator",
                    database: "Database",
                    upload: "Upload",
                    helpCenter: "Help Center",
                    settings: "Settings",
                    moderators: "Moderators",
                    dashboard: "Dashboard"
                },
                basePage: {
                    available: 'Available',
                },
                errorPage: {
                    oops: "Oops!",
                    unexpectedError: "An unexpected error has occurred.",
                }
            }
        },
        de: {
            translation: {
                navigation: {
                    // This is just to show that we can have different translations for different languages
                    chats: "Chats (de)",
                    reports: "Reports (de)",
                    members: "Members (de)",
                    manageModerator: "Manage Moderator (de)",
                    database: "Database (de)",
                    upload: "Upload (de)",
                    helpCenter: "Help Center (de)",
                    settings: "Settings (de)",
                    moderators: "Moderators (de)",
                    dashboard: "Dashboard (de)"
                },
                basePage: {
                    available: 'Available (de)',
                },
                errorPage: {
                    oops: "Oops! (de)",
                    unexpectedError: "An unexpected error has occurred. (de)",
                }
            }
        }
    },
    lng: "de", // We can manually toggle the language here until we configure a language detector, en for English, de for German
    //lng: "en",
    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    }
};

export default translations;