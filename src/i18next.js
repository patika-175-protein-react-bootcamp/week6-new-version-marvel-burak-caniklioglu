import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: "tr",
    lng: "tr",
    resources: {
        en:{
            translation: require('./constant/language/en.json')
        },
        tr:{
            translation: require('./constant/language/tr.json')
        },
        fr:{
            translation: require('./constant/language/fr.json')
        }
    },
    ns: ["translation"],
    defaultNS: "translation",
});

i18n.languages = ["en", "tr", "fr"];
export default i18n;