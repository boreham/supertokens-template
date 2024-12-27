import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";
import Session from "supertokens-auth-react/recipe/session";

export function getApiDomain() {
    const apiPort = import.meta.env.VITE_APP_API_PORT || 3001;
    const apiUrl = import.meta.env.VITE_APP_API_URL || `http://localhost:${apiPort}`;
    return apiUrl;
}

export function getWebsiteDomain() {
    const websitePort = import.meta.env.VITE_APP_WEBSITE_PORT || 3000;
    const websiteUrl = import.meta.env.VITE_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
    return websiteUrl;
}

export const SuperTokensConfig = {
    appInfo: {
        appName: "SuperTokens Demo App",
        apiDomain: getApiDomain(),
        websiteDomain: getWebsiteDomain(),
    },

    style: `
    [data-supertokens~=container] {
         --palette-background: 255, 255, 255;
        --palette-inputBackground: 255, 255, 255;
        --palette-inputBorder: 41, 41, 41;
        --palette-textTitle: 51, 51, 51;
        --palette-textLabel: 51, 51, 51;
        --palette-superTokensBrandingText: 255, 255, 255;
        --palette-superTokensBrandingBackground:: 255, 255, 255;
        --palette-textPrimary: 51, 51, 51;
        --palette-error: 173, 46, 46;
        --palette-textInput: 169, 169, 169;
        --palette-textLink: 114,114,114;
        --palette-textGray: 158, 158, 158;
    }
`,
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [EmailPassword.init(), Session.init()],
    getRedirectionURL: async (context: { action: string; newSessionCreated: any; }) => {
        if (context.action === "SUCCESS" && context.newSessionCreated) {
            return "/dashboard";
        }
    },
};

export const recipeDetails = {
    docsLink: "https://supertokens.com/docs/emailpassword/introduction",
};

export const PreBuiltUIList = [EmailPasswordPreBuiltUI];

export const ComponentWrapper = (props: { children: JSX.Element }): JSX.Element => {
    return props.children;
};
