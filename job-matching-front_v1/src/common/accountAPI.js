export const accountGetByIdRouter = (username) => `http://localhost:8080/api/accounts/${username}`;
export const accountPutByIdRouter = (accountId) => `http://localhost:8080/api/accounts/${accountId}`;
export const accountGetBySearchRouter = (stringQuery) => `http://localhost:8080/api/accounts/searchdata/${stringQuery}`;