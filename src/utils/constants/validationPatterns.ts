export const PASSWORD_REGEXP =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z])).*$/;
export const IP_REGEXP =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
export const FOLDERNAME_REGEXP = /^\S+( \S+)*$/;
export const EMAIL_REGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const COMPANY_NAME_REGEXP = /^[^[\]{}!@#$%^&*()\-_+=:;'",./?|\\`₩~<>\s ]*$/;
export const COMPANY_DOMAIN_REGEXP = /(?=(^[a-z0-9][a-z0-9-]*[a-z0-9]$))(?=(?!(^www$)))/;
