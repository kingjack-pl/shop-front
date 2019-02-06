export const isLogin = token => {
	return typeof token === "string" && token.length > 0;
};

export const isAdmin = arrRoles => {
	return Array.isArray(arrRoles) && arrRoles.includes("ROLE_ADMIN");
};
