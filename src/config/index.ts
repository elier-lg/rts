interface configProps {
    usersApiBaseUrl: string;
    feedbackUrl: string;
    helpUrl: string;
}

const config = {
    usersApiBaseUrl: "https://ketser-d1.azurewebsites.net/",
    feedbackUrl: "https://fsl.com/feedback",
    helpUrl: "https://fsl/help"
} as configProps;

export default config;