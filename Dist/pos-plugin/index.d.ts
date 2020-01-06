import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name pos Plugin
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { posPlugin } from '@ionic-native/pos-plugin';
 *
 *
 * constructor(private posPlugin: posPlugin) { }
 *
 * ...
 *
 *
 * this.posPlugin.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class posPluginOriginal extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    connectBluetoothDevice(success: any, error: any, autoConnect: any, macAddress: any): void;
    setAmount(success: any, error: any, amount: any, cashback: any, transactionType: any): void;
    doTrade(success: any, error: any, timeout: any): void;
}

export declare const posPlugin: posPluginOriginal;