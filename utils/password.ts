import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

/**
	* Hash a plain-text password.
	* @param password - The user's raw password.
	* @returns A promise that resolves to the hashed password.
*/
export async function hashPassword(password: string): Promise<string> {
	return await bcrypt.hash(password, SALT_ROUNDS);
}

/**
	* Compare a plain-text password to a hashed password.
	* @param password - The raw password input by the user.
	* @param hashedPassword - The hashed password from the database.
	* @returns A promise that resolves to true if the password matches.
*/
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
	return await bcrypt.compare(password, hashedPassword);
}
