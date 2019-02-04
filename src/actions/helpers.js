export const isLogin = token => {
	return typeof token === "string" && token.length > 0;
};

export const isAdmin = role => {
	return typeof role === "string" && role === "ROLE_ADMIN";
};
