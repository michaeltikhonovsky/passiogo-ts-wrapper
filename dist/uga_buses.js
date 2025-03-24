"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const passiogo = __importStar(require("./index"));
async function main() {
    try {
        // Get UGA's transportation system (ID: 3994)
        const uga = await passiogo.getSystemFromID(3994);
        if (!uga) {
            console.error("Could not find UGA transportation system.");
            return;
        }
        // Get all active routes
        const routes = await uga.getRoutes();
        console.log("\nActive Routes:");
        for (const route of routes) {
            console.log(`- ${route.name} (${route.shortName})`);
        }
        // Get all stops
        const stops = await uga.getStops();
        console.log("\nBus Stops:");
        for (const stop of stops) {
            console.log(`- ${stop.name} at (${stop.latitude}, ${stop.longitude})`);
        }
        // Get any current system alerts
        const alerts = await uga.getSystemAlerts();
        console.log("\nCurrent Alerts:");
        for (const alert of alerts) {
            console.log(`- ${alert.name}: ${alert.gtfsAlertDescriptionText}`);
        }
        // Get active vehicles/buses
        const vehicles = await uga.getVehicles();
        console.log("\nActive Vehicles:");
        for (const vehicle of vehicles) {
            console.log(`- ${vehicle.name} on route: ${vehicle.routeName}, location: (${vehicle.latitude}, ${vehicle.longitude})`);
        }
    }
    catch (error) {
        console.error("Error:", error);
    }
}
// Execute the main function
main();
