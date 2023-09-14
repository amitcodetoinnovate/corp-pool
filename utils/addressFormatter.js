export const extractAddressName = (fullAddress) => {
    const parts = fullAddress.split(", ");
    if (parts.length > 0) {
        return parts[0];  // Return the first part as the address name
    }
    return "Address name not found";
};
export const extractRestOfAddress = (fullAddress) => {
    const parts = fullAddress.split(", ");
    if (parts.length > 1) {
        parts.shift();  // Remove the first part (address name)
        parts.shift();  // Remove the second occurrence of the address name
        return parts.join(", ");  // Join the remaining parts back into a single string
    }
    return "Rest of the address not found";
};