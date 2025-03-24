/**
 * Gets the real-time location of a specific bus
 * @param systemId The transportation system ID (3994 for UGA)
 * @param busName Optional: The name of the bus to look for
 * @returns Promise that resolves to an array of bus location data
 */
export declare function getBusLocation(systemId: number, busName?: string): Promise<any[]>;
