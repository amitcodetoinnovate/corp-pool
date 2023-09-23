export const getUser = (profileData) => {
    return {
        userId: profileData.id,
        firstName: profileData.givenName,
        lastName: profileData.surname,
        email: profileData.userPrincipalName
    };
};