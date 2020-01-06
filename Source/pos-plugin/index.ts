/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

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
@Plugin({
  pluginName: 'posPlugin',
  plugin: 'posPlugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.dspread_pos_plugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/fullstackmofo/Mpos.git', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class posPlugin extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  // @Cordova()
  // functionName(arg1: string, arg2: number): Promise<any> {
  //   return; // We add return; here to avoid any IDE / Compiler errors
  // }

  @Cordova()
  connectBluetoothDevice(success: any, error: any, autoConnect: any, macAddress: any) {
  }

  @Cordova()
  setAmount(success: any, error: any, amount: any, cashback: any, transactionType: any) {
  }

  @Cordova()
  doTrade(success: any, error: any, timeout: any) {
  }
}
